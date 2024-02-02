<script setup lang="ts">
interface NavigationItem {
  name: string
  routeName: RouteName
  icon: string
}

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const { userAttributes } = authStore
const navbarOpen = ref(false)
const userObserver = ref()
const toggleTooltip = ref(false)
const searchTooltip = ref(false)
const auth = useAuth()

function sanitizeUrl(url: string) {
  return encodeURI(url)
}
const screenWidth = ref('')

function handleResize() {
  screenWidth.value = window.innerWidth
}

async function signUserOut(event: MouseEvent) {
  event.preventDefault()
  await auth.signOut()
}

// TODO: handle nested routes
const isCurrentRoute = computed(
  () => (item: NavigationItem) => item.routeName === route.name,
)
const parseCount = computed(
  () => (recentProject: { count: number }) =>
    recentProject.count <= 20 ? recentProject.count.toString() : '20+',
)
const searchInput = ref('')
const searchButtonActive = computed(() => searchInput.value.length > 0)

const navigation: NavigationItem[] = [
  { name: 'News Feed', routeName: 'feed', icon: 'vuesax/bulk/note-21' },
  {
    name: 'Connections',
    routeName: 'connections',
    icon: 'vuesax/bulk/profile-2user',
  },
  { name: 'Tasks', routeName: 'tasks', icon: 'vuesax/bulk/document-text' },
  { name: 'Projects', routeName: 'projects', icon: 'vuesax/bulk/folder' },
  { name: 'Groups', routeName: 'groups', icon: 'vuesax/bulk/people' },
  { name: 'Search', routeName: 'search', icon: 'vuesax/bulk/folder' },
  { name: 'Message', routeName: 'message', icon: 'vuesax/bulk/folder' },
]

const recentProjects = [
  {
    id: 1,
    name: '[ASOF] Consortium Gathering',
    href: '#',
    initial: 'A',
    current: false,
    count: 5,
  },
  {
    id: 2,
    name: '[VoMA] Recruitment Round 4',
    href: '#',
    initial: 'B',
    current: false,
    count: 10,
  },
  {
    id: 3,
    name: '[Miaseen] Goris Project',
    href: '#',
    initial: 'C',
    current: false,
    count: 69,
  },
]

watch(router.currentRoute, () => (navbarOpen.value = false))

onMounted(async () => {
  userObserver.value = await observeUserModel()
})
onMounted(() => {
  screenWidth.value = window.innerWidth
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  userObserver.value.unsubscribe()
})
</script>

<template>
  <div
    class="relative flex h-screen safe-top sm:min-h-[720px]"
    :class="[navbarOpen ? 'overflow-hidden' : '']"
  >
    <!-- SIDEBAR NAVIGATION -->
    <div
      :class="[navbarOpen ? '' : 'hidden']"
      class="absolute inset-0 z-10 bg-white safe-top safe-left safe-right lg:flex lg:w-[236px] lg:flex-col"
    >
      <!-- SIDEBAR HEADER -->
      <div
        class="flex h-[--user-nav-header-h-sm] shrink-0 items-center justify-end bg-white px-4 py-2 lg:h-[--user-nav-header-h] lg:justify-start lg:border-r lg:border-gray-200"
      >
        <button
          type="button"
          class="h-[38px] w-[38px] rounded-full bg-gray-100 shadow-sm lg:hidden"
          @click="navbarOpen = false"
        >
          <NuxtIcon
            name="vuesax/linear/menu"
            class="flex justify-center text-xl text-slate-900"
            aria-hidden="true"
          />
        </button>

        <RouterLink :to="{ name: 'index' }" class="hidden lg:block">
          <TextLogo />
        </RouterLink>
      </div>
      <!-- END SIDEBAR HEADER -->

      <!-- SIDEBAR CONTENT -->
      <div
        class="flex flex-col h-full px-4 overflow-y-auto bg-white grow lg:border-r lg:border-gray-200 lg:px-6 "
      >
        <!-- USER AVATAR -->
        <div class="block mt-4 group shrink-0 lg:hidden">
          <div class="flex items-center">
            <RouterLink
              :to="{
                name: 'user-profile',
                params: { userId: userAttributes.id },
              }"
            >
              <StorageImg
                class="inline-block rounded-full h-11 w-11 shrink-0"
                :storage-key="userAttributes.profilePicture"
              />
            </RouterLink>
            <RouterLink
              :to="{
                name: 'user-profile',
                params: { userId: userAttributes.id },
              }"
            >
              <div class="ml-4">
                <div class="font-bold">
                  {{ userAttributes.fullName }}
                </div>
                <div class="text-xs text-gray-500">
                  View your profile
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
        <!-- END USER AVATAR -->

        <nav class="flex flex-col flex-1 mt-4 lg:mt-0">
          <ul role="list" class="flex flex-col flex-1 gap-y-10">
            <!-- NAV MENU ITEMS -->
            <li>
              <ul role="list" class="space-y-1 lg:-mx-1.5">
                <li v-for="item in navigation" :key="item.name">
                  <RouterLink
                    :to="`/${item.routeName}`"
                    class="group flex gap-x-3 rounded-lg px-4 py-2.5 text-sm leading-6"
                    :class="[
                      isCurrentRoute(item)
                        ? 'bg-slate-100 text-gray-800'
                        : 'text-gray-500 hover:bg-slate-100 hover:text-gray-800',
                    ]"
                  >
                    <NuxtIcon
                      :name="item.icon"
                      class="mt-1 text-lg font-normal"
                      :class="[
                        isCurrentRoute(item)
                          ? 'text-blue-600'
                          : 'text-gray-400 group-hover:text-gray-600',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </RouterLink>
                </li>
              </ul>
            </li>
            <!-- END NAV MENU ITEMS -->

            <!-- SECONDARY NAV MENU ITEMS -->
            <li>
              <div class="text-xs leading-6 text-gray-500">
                Recent Projects
              </div>
              <ul role="list" class="mt-2 -mx-2 space-y-1">
                <li v-for="r in recentProjects" :key="r.name">
                  <a
                    :href="sanitizeUrl(r.href)"
                    class="flex p-2 text-sm leading-6 rounded-lg group gap-x-3"
                    :class="[
                      r.current
                        ? 'bg-slate-100 text-gray-800'
                        : 'text-gray-500 hover:bg-slate-100 hover:text-gray-800',
                    ]"
                  >
                    <span
                      class="flex items-center justify-center w-6 h-6 font-medium bg-gray-100 rounded-full shrink-0 lg:h-7 lg:w-7"
                      :class="[
                        r.current
                          ? 'border-gray-600 text-gray-600'
                          : 'text-gray-800 group-hover:border-gray-600 group-hover:text-gray-600',
                      ]"
                    >
                      {{ r.initial }}
                    </span>
                    {{ r.name }}
                    <span
                      v-if="r.count"
                      class="ml-auto h-6 w-9 min-w-max whitespace-nowrap rounded-full bg-white px-1.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
                      aria-hidden="true"
                    >
                      {{ parseCount(r) }}
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <!-- END SECONDARY NAV MENU ITEMS -->
          </ul>
        </nav>
      </div>
      <!-- SIDEBAR CONTENT -->
    </div>
    <!-- END SIDEBAR NAV -->

    <!-- MAIN CONTENT -->
    <div class="relative grow bg-slate-50 lg:ml-[236px]">
      <!-- NAVBAR HEADER -->
      <header
        class="fixed top-0 z-50 flex h-[--user-nav-header-h-sm] w-full flex-wrap bg-white px-4 py-2 text-sm safe-top-margin sm:static sm:flex-nowrap sm:justify-start lg:h-[--user-nav-header-h] lg:px-8 lg:py-5"
        :class="[navbarOpen ? 'hidden sm:block' : '']"
      >
        <div
          class="absolute -top-[--user-nav-header-h] left-0 h-[--user-nav-header-h] w-full bg-white sm:hidden"
        />
        <nav
          class="relative flex flex-row items-center justify-between w-full safe-left safe-right"
          aria-label="Global"
        >
          <!-- SEARCH BAR -->
          <div class="relative hidden lg:flex lg:w-full lg:pr-16">
            <label class="hidden"> Search everything </label>
            <input
              v-model="searchInput"
              placeholder="Coming soon"
              class="w-full border-gray-200 rounded-l-lg shadow-sm bg-gray-50"
            >
            <button
              type="button"
              class="inline-flex h-[2.875rem] w-[2.875rem] shrink-0 items-center justify-center rounded-r-md border border-transparent text-sm font-semibold text-white shadow-sm transition-all focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              :class="[searchButtonActive ? 'bg-gray-800' : 'bg-gray-300']"
              :disabled="!searchButtonActive"
              @mouseover="
                () => {
                  if (screenWidth > 1024){
                    searchTooltip = true;
                  }
                }
              "
              @mouseleave="
                () => {
                  searchTooltip = false;
                }
              "
            >
              <NuxtIcon name="search" class="text-[16px] text-white" />
            </button>
            <div
              v-if="searchTooltip"
              class="absolute right-10 z-10 top-14 w-[14rem] transition delay-700 duration-300 ease-in-out"
            >
              <span
                class="-top-3 absolute right-10 h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-amber-500"
              />
              <BoardingTooltip
                label="Search here!"
                content="Connect with the world Explore projects, profiles, and more in  just a few clicks!"
                image=""
                button="Next ->"
              />
            </div>
          </div>
          <!-- END SEARCH BAR -->

          <!-- LEFT BUTTON ROW -->
          <div class="flex flex-row items-center gap-x-6">
            <RouterLink :to="{ name: isNativePlatform ? 'feed' : 'index' }">
              <Logo class="lg:hidden" />
            </RouterLink>

            <!-- <button
              type="button"
              class="hidden sm:block lg:hidden w-[38px] h-[38px] rounded-full border border-gray-200 shadow-sm hover:bg-gray-100 transition-all"
              @click="navbarOpen = true"
            >
              <NuxtIcon
                name="vuesax/linear/menu"
                class="flex justify-center text-xl text-slate-900"
                aria-hidden="true"
              />
            </button> -->
          </div>
          <!-- LEFT BUTTON ROW -->

          <!-- RIGHT BUTTON ROW -->
          <div
            class="flex flex-row items-center justify-end gap-x-1 sm:gap-x-6"
          >
            <!-- MOBILE SEARCH BUTTON -->
            <button
              type="button"
              class="h-[38px] w-[38px] rounded-full border border-gray-200 shadow-sm transition-all hover:bg-gray-100 lg:hidden lg:h-12 lg:w-12"
            >
              <NuxtIcon
                name="search"
                class="flex justify-center text-[19px] text-slate-900"
                aria-hidden="true"
              />

            </button>

            <!-- {{ createTooltip }} -->

            <CreateModalTwo />

            <!-- <button
              type="button"
              class="sm:w-[106px] h-[46px] px-4 inline-flex items-center gap-x-2.5 rounded-full bg-blue-500 transition-all tracking-wide font-semibold text-white shadow-sm hover:bg-blue-600"
              @click=""
            >
              <span class="hidden sm:block">
                Create
              </span>
              <NuxtIcon
                name="plus"
                class="mb-[0px] text-[14.5px]"
                aria-hidden="true"
              />
            </button> -->

            <Dropdown />

            <!-- <button
              type="button"
              class="w-10 h-10 transition-all border border-gray-200 rounded-full shadow-sm hover:bg-gray-100"
            >
              <NuxtIcon
                name="vuesax/outline/notification"
                class="flex justify-center text-xl text-slate-900"
                aria-hidden="true"
              />
            </button> -->

            <MessagesDropDown class="hidden sm:block" />

            <!-- <button
              type="button"
              class="w-10 h-10 transition-all border border-gray-200 rounded-full shadow-sm hover:bg-gray-100"
            >
              <NuxtIcon
                name="vuesax/outline/message"
                class="flex justify-center text-xl text-slate-900"
                aria-hidden="true"
              />
            </button> -->

            <!-- TOGGLE NAV MENU -->

            <button
              type="button"

              class="h-[38px] w-[38px] hs-dropdown1 rounded-full border border-gray-200 shadow-sm transition-all hover:bg-gray-100 lg:hidden lg:h-12 lg:w-12"
              @click="navbarOpen = true"
            >
              <NuxtIcon
                name="vuesax/linear/menu"
                class="flex justify-center text-xl text-slate-900"
                aria-hidden="true"
              />
            </button>
            <!-- END TOGGLE NAV MENU -->

            <!-- USER AVATAR DROPDOWN -->
            <div class="relative">
              <div>
                <div class="relative hidden hs-dropdown lg:inline-flex">
                  <button
                    type="button"
                    class="w-10 h-10 transition-all rounded-full shadow-sm"

                    @mouseover="
                      () => {
                        if (screenWidth > 1024){
                          toggleTooltip = true;
                        }
                      }
                    "
                    @mouseleave="
                      () => {
                        toggleTooltip = false;
                      }
                    "
                  >
                    <StorageImg
                      class="inline-block w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800"
                      :storage-key="userAttributes.profilePicture"
                    />
                  </button>
                  <div
                    class="hs-dropdown-menu duration relative z-50 hidden min-w-[15rem] rounded-2xl bg-white px-3 pb-6 pt-3 opacity-0 drop-shadow-[0_1px_12px_rgba(0,0,0,0.25)] transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:divide-gray-700 dark:border dark:border-gray-700 dark:bg-gray-800"
                    aria-labelledby="hs-dropdown-with-title"
                  >
                    <div
                      class="absolute -top-3 right-3 h-0 w-0 border-x-[12px] border-b-[15px] border-x-transparent border-b-white"
                    />
                    <div class="flex flex-row p-3">
                      <StorageImg
                        class="inline-block w-10 h-10 rounded-full ring-2 ring-white dark:ring-gray-800"
                        :storage-key="userAttributes.profilePicture"
                      />
                      <div class="ml-4">
                        <div class="font-bold">
                          {{ userAttributes.fullName }}
                        </div>
                        <div
                          class="mt-1 w-[160px] overflow-hidden truncate text-xs text-gray-500"
                        >
                          Chief Architect | Synopsis
                        </div>
                      </div>
                    </div>
                    <div
                      class="ml-[11px] mt-2 inline-flex h-12 w-[220px] items-start justify-start"
                    >
                      <RouterLink
                        :to="{
                          name: 'user-profile',
                          params: { userId: userAttributes.id },
                        }"
                        class="flex h-[38px] shrink grow basis-0 items-center justify-center gap-2 rounded-3xl border-2 border-blue-500 px-3 py-2.5"
                      >
                        <div
                          class="text-center text-[15px] font-semibold text-blue-500"
                        >
                          View Profile
                        </div>
                      </RouterLink>
                    </div>
                    <div class="py-1 first:pt-0 last:pb-0">
                      <span
                        class="block px-3 py-2 text-[16px] font-bold text-slate-900 dark:text-gray-500"
                      >
                        Account
                      </span>
                      <a
                        class="flex items-center gap-x-3.5 rounded-md px-3 py-1 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
                      >
                        Settings
                      </a>
                      <a
                        class="flex items-center gap-x-3.5 rounded-md px-3 py-1 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
                      >
                        Help
                      </a>
                      <a
                        class="flex items-center gap-x-3.5 rounded-md px-3 py-1 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
                      >
                        Saved
                      </a>
                    </div>
                    <div class="mx-3 mt-1 h-[1px] bg-gray-200" />
                    <div class="py-2 first:pt-0 last:pb-0">
                      <span
                        class="block px-3 py-1 text-[16px] font-bold text-slate-900 dark:text-gray-500"
                      >
                        Manage
                      </span>
                      <a
                        id="logout"
                        class="flex items-center gap-x-3.5 rounded-md px-3 py-1 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        href="#"
                        @click="signUserOut"
                      >
                        Log out
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-if="toggleTooltip"
                class="absolute -left-40 z-10 top-12 w-[14rem] transition delay-700 duration-300 ease-in-out"
              >
                <span
                  class="-top-3 absolute right-10 h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-amber-500"
                />
                <BoardingTooltip
                  label="Manage Your Profile"
                  content="Access and customize your account details by clicking the profile button"
                  image="profileTooltipImage"
                  button="Got It!"
                />
              </div>
            </div>

            <!-- END USER AVATAR DROPDOWN -->
          </div>
          <!-- END RIGHT BUTTON ROW -->
        </nav>
      </header>
      <!-- END NAVBAR HEADER -->

      <div
        class="h-[calc(100vh-var(--user-nav-header-h))] pt-[--user-nav-header-h-sm] safe-left safe-right sm:overflow-scroll sm:pt-0"
      >
        <slot />
      </div>
    </div>
    <!-- END MAIN CONTENT -->
  </div>
</template>
