<script setup lang="ts">
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'

const { getUrl } = useS3()
const { formatFullName } = useFormatFullName()

// Omit item counts for now, requires some hacking in the backend
const filters = [
  { name: 'My projects' },
  { name: 'All projects' },
  { name: 'Saved' },
]

const selectedFilter = ref(filters[0])

type DateString = string | null | undefined

const useActivity = computed(() => {
  return (startDate: DateString, endDate: DateString) => {
    if (!startDate && !endDate)
      return ''

    const now = new Date()
    const startDateObj = startDate ? new Date(startDate) : null
    const endDateObj = endDate ? new Date(endDate) : null

    if (!startDate && endDateObj && now <= endDateObj)
      return 'Active'

    if (!startDate && endDateObj && endDateObj <= now)
      return 'Finished'

    if (!endDate && startDateObj && startDateObj <= now)
      return 'Active'

    if (!endDate && startDateObj && now <= startDateObj)
      return ''

    if (startDateObj && endDateObj && startDateObj <= now && now <= endDateObj)
      return 'Active'

    if (endDateObj && endDateObj <= now)
      return 'Finished'

    return ''
  }
})

const formatDate = computed(() => {
  return (date: DateString) => {
    return date ? new Date(date).toLocaleDateString() : ''
  }
})

const useTimeline = computed(() => {
  return (startDate: DateString, endDate: DateString) => {
    if (!startDate && !endDate)
      return ''
    if (!startDate)
      return `Until ${formatDate.value(endDate)}`
    if (!endDate)
      return `From ${formatDate.value(startDate)}`

    return `${formatDate.value(startDate)} - ${formatDate.value(endDate)}`
  }
})
const projects = ref(null) as Ref<API.Project[] | null>

async function fetchProjects() {
  try {
    const { data } = await useAPI().graphql({
      query: listProjects,
    })

    projects.value = (data.listProjects.items as API.Project[]).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()) || null

    projects.value.forEach(async (p) => {
      if (p.user && p.user.profilePicture)
        p.user.profilePicture = (await getUrl({ key: p.user.profilePicture })).url.toString()
    })
  }
  catch (e) {
    useLogger().error(e)
  }
}

function projectCreatedSubscription() {
  const subscription = useAPI()
    .graphql({ query: onCreateProject })
    .subscribe({
      next: ({ data }) => {
        const newProject = data.onCreateProject as API.Project
        if (newProject && projects.value)
          projects.value.unshift(newProject)
      },
      error: err => useLogger().error(err),
    })

  onBeforeUnmount(() => {
    subscription.unsubscribe()
  })
}

onMounted(fetchProjects)
onMounted(projectCreatedSubscription)
// onMounted(projectDeletedSubscription)

definePageMeta({
  name: 'projects',
  path: '/projects',
  layout: 'user-nav',
})
</script>

<template>
  <div class="px-[32px] py-[24px]">
    <!-- TOP ROW -->
    <div class="flex justify-between">
      <h1 class="text-2xl font-bold tracking-wide capitalize">
        Projects
      </h1>

      <!-- FILTER SELECTOR -->
      <Listbox
        v-model="selectedFilter"
        as="div"
      >
        <div class="relative">
          <ListboxButton class="relative w-[145px] cursor-pointer rounded-full bg-white py-1.5 pl-4 pr-5 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 sm:text-sm sm:leading-6">
            <span class="absolute inset-y-0 flex items-center pl-2 pointer-events-none left-1">
              <NuxtIcon
                name="up-down-arrows"
                class="text-gray-500"
                aria-hidden="true"
              />
            </span>
            <span class="block pl-5 truncate">
              {{ selectedFilter.name }}
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions class="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white shadow-lg max-h-60 rounded-xl ring-1 ring-gray-200 sm:text-sm">
              <ListboxOption
                v-for="f in filters"
                :key="f.name"
                v-slot="{ active }"
                as="template"
                :value="f"
              >
                <li
                  class="relative py-2 pl-3 cursor-pointer select-none pr-9"
                  :class="[active ? 'bg-slate-200' : '']"
                >
                  <span
                    class="block truncate"
                  >
                    {{ f.name }}
                  </span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
      <!-- END FILTER SELECTOR -->
    </div>
    <!-- END TOP ROW -->

    <!-- LIST PROJECT CARDS -->
    <div
      v-if="projects"
      class="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-5 3xl:grid-cols-5"
    >
      <RouterLink
        v-for="p in projects"
        :key="p.id"
        as="div"
        :to="{ name: 'view-project', params: { projectId: p.id } }"
        class="flex h-[334px] flex-col overflow-auto rounded-t-xl"
      >
        <div class="h-40 aspect-w-16">
          <img
            class="object-cover w-full"
            src="~/assets/img/default-background.jpeg?auto=format&fit=crop&w=987&q=80&quot;"
          >
          <span
            v-if="useActivity(p.startDate, p.endDate)"
            class="relative left-3 top-2 rounded-full px-1.5 py-1 text-[10px] leading-[12px]"
            :class="useActivity(p.startDate, p.endDate) === 'Active' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-500'"
          >
            {{ useActivity(p.startDate, p.endDate) }}
          </span>
        </div>
        <div class="flex flex-col p-3 mb-0 grow">
          <div class="inline-flex items-center justify-start gap-1.5 text-gray-500">
            <span class="text-xs font-light">
              {{ p.location }}
            </span>
            <template v-if="useTimeline(p.startDate, p.endDate)">
              <span class="leading-[12px]">
                •
              </span>
              <span class="text-xs font-light">
                {{ useTimeline(p.startDate, p.endDate) }}
              </span>
            </template>
          </div>
          <div class="mt-1 text-sm font-bold text-gray-800 line-clamp-2">
            {{ p.name }}
          </div>
          <!-- <div class="mt-1 grow"> -->
          <div class="mt-1">
            <div class="text-xs text-gray-600 line-clamp-3">
              {{ p.about }}
            </div>
          </div>
          <!-- <div class="flex items-center"> -->
          <div class="flex items-center mt-3">
            <StorageImg
              class="inline-block w-6 h-6 rounded-full shrink-0"
              :storage-key="p.user?.profilePicture"
            />
            <h3 class="text-xs font-semibold text-gray-800 ms-1">
              {{ formatFullName(p.user?.firstName, p.user?.lastName) }}
            </h3>
          </div>
        </div>
      </RouterLink>
    </div>
    <!-- END LIST PROJECT CARDS -->

    <!-- PROJECT CARD SKELETON-LOADERS -->
    <div
      v-else
      class="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 2xl:gap-5 3xl:grid-cols-5"
    >
      <template
        v-for="i in 2"
        :key="i"
      >
        <div
          :class="[i === 2 ? 'hidden md:block' : '']"
          class="flex h-[334px] flex-col overflow-auto rounded-t-xl"
        >
          <div class="h-40 aspect-w-16 animate-pulse bg-slate-300" />
          <div class="flex flex-col p-3 mb-0 grow">
            <div class="inline-flex items-center justify-start gap-3 mt-1 text-gray-500">
              <span class="w-20 h-2 rounded animate-pulse bg-slate-300" />
              <span class="w-20 h-2 rounded animate-pulse bg-slate-300" />
            </div>
            <!-- <div class="mt-1 grow"> -->
            <div class="mt-1">
              <div class="h-2 mt-3 rounded animate-pulse bg-slate-300" />
              <div class="h-2 mt-3 rounded animate-pulse bg-slate-300" />
              <div class="h-2 mt-3 rounded animate-pulse bg-slate-300" />
              <div class="w-24 h-2 mt-3 rounded animate-pulse bg-slate-300" />
            </div>
            <!-- <div class="flex items-center gap-3"> -->
            <div class="flex items-center gap-3 mt-8">
              <div class="w-6 h-6 rounded-full animate-pulse bg-slate-300" />
              <div class="w-20 h-2 rounded animate-pulse bg-slate-300" />
            </div>
          </div>
        </div>
      </template>
    </div>
    <!-- END PROJECT CARD SKELETON-LOADERS -->
  </div>
</template>
