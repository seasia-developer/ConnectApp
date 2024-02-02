<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import gmaps from '~/components/gmaps.vue'

const { getUrl, uploadData } = useS3()
const authStore = useAuthStore()
const { userAttributes } = authStore
const awaitingUpdate = ref(false)
const profilePicture = ref((await getUrl({ key: userAttributes.profilePicture })).url.toString())
const profilePictureInput = ref(null) as Ref<HTMLInputElement | null>

function updateProfilePicture() {
  profilePictureInput.value!.click()
}

async function handleUpdateProfilePicture(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target && target.files && target.files[0]

  if (file) {
    useLogger().debug('file mime type', file.type)
    const uploadedData = await uploadData({
      // TODO: generate GUIDs for file uploads
      key: `${userAttributes.id}-${file.name}`,
      data: file,
      options: {
        contentType: file.type,
      },
    }).result
    useLogger().debug(uploadedData)

    const { data } = await useAPI().graphql({
      query: updateUser,
      variables: {
        input: {
          id: userAttributes.id,
          profilePicture: uploadedData.key,
        },
      },
    })
    useLogger().debug(data)
    if (data.updateUser.profilePicture)
      profilePicture.value = (await getUrl({ key: data.updateUser.profilePicture })).url.toString()
  }

  // const image = (event.target as HTMLInputElement).files[0]
}

async function removeProfilePicture() {
  const { data } = await useAPI().graphql({
    query: updateUser,
    variables: {
      input: {
        id: userAttributes.id,
        profilePicture: null,
      },
    },
  })
  useLogger().debug(data)
  profilePicture.value = null as unknown as string
}

const editUserAttrForm = reactive({
  firstName: userAttributes.firstName,
  lastName: userAttributes.lastName,
  birthdate: userAttributes.birthdate,
  phoneNumber: userAttributes.phoneNumber,
  location: userAttributes.location,
  jobTitle: userAttributes.jobTitle,
})

const v$ = useVuelidate(
  {
    firstName: { required },
    lastName: { required },
    birthdate: { required },
    phoneNumber: { required },
    location: {},
    jobTitle: {},
  },
  editUserAttrForm,
)

async function submitUpdate() {
  awaitingUpdate.value = true

  try {
    await useAuth().updateUserAttributes({
      userAttributes: {
        given_name: editUserAttrForm.firstName,
        family_name: editUserAttrForm.lastName,
        birthdate: editUserAttrForm.birthdate,
        phone_number: editUserAttrForm.phoneNumber,
      },
    })

    const { data } = await useAPI().graphql({
      query: updateUser,
      variables: {
        input: {
          id: userAttributes.id,
          firstName: editUserAttrForm.firstName,
          lastName: editUserAttrForm.lastName,
          birthdate: editUserAttrForm.birthdate,
          phoneNumber: editUserAttrForm.phoneNumber,
          jobTitle: editUserAttrForm?.jobTitle || '',
          location: editUserAttrForm?.location || '',
        },
      },
    })

    authStore.currentUser = data.updateUser
    awaitingUpdate.value = false
    await useRouter().push({ name: 'user-profile', params: { userId: userAttributes.id } })
  }
  catch (e) {
    useLogger().error(e)
    awaitingUpdate.value = false
  }
}

definePageMeta({
  name: 'edit-user-profile',
  layout: 'user-nav',
})
</script>

<template>
  <div class="aspect-w-16 h-[146px] sm:h-[280px]">
    <img class="object-cover w-full" src="~/assets/img/default-background.jpeg?auto=format&fit=crop&w=987&q=80">
  </div>

  <div class="mx-[16.5px]">
    <div class="-translate-y-20 sm:rounded-2xl">
      <div class="relative inline-flex hs-dropdown">
        <button
          id="hs-dropdown-custom-trigger" type="button"
          class="transition-all border border-gray-200 rounded-full shadow-sm hs-dropdown-toggle hover:bg-gray-100"
        >
          <img v-if="profilePicture" class="h-[100px] w-[100px] rounded-full dark:ring-gray-800" :src="profilePicture">
          <img
            v-else class="h-[100px] w-[100px] rounded-full dark:ring-gray-800"
            src="~/assets/img/avatar-placeholder.png"
          >
        </button>

        <div
          class="hs-dropdown-menu duration mt-2 hidden w-[10rem] rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:border dark:border-gray-700 dark:bg-gray-800"
          aria-labelledby="hs-dropdown-custom-trigger"
        >
          <button class="flex py-2 pl-2" @click="updateProfilePicture">
            <NuxtIcon name="edit" class="mr-3 pt-0.5 text-[16px] text-black" />
            <div id="imageInput" class="text-sm text-black border-0">
              Update photo
            </div>
          </button>
          <input ref="profilePictureInput" type="file" hidden @change="handleUpdateProfilePicture">
          <button v-if="profilePicture !== null" class="flex py-2 pl-2" @click="removeProfilePicture">
            <NuxtIcon name="trash" class="mr-3 pt-0.5 text-[16px] text-red-600" />
            <div class="text-sm text-red-600 border-0">
              Remove
            </div>
          </button>
        </div>
      </div>

      <div class="mt-2 text-lg font-bold text-black">
        {{ userAttributes.fullName }}
      </div>
      <div class="inline-flex items-center justify-start gap-2 mt-1">
        <!-- <NuxtIcon name="geo-alt" class="-ml-0.5 pt-[0.5px] text-lg" aria-hidden="true" /> -->
        <!-- <div class="text-[13px] leading-none text-gray-500">
          Yerevan, AM
        </div> -->
        <!-- <div class="h-[2.5px] w-[2.5px] rounded-full bg-slate-400" /> -->
        <!-- <div class="text-center text-[13px] leading-none text-slate-500">
          Chief Architect
        </div> -->
      </div>
    </div>

    <div class="-translate-y-16">
      <div class="text-2xl font-bold text-gray-800">
        Profile settings
      </div>

      <div class="max-w-2xl">
        <!-- FIRST NAME INPUT -->
        <div class="mt-3 inline-flex w-full flex-col items-start justify-start gap-2.5">
          <div
            class="inline-flex items-center self-stretch justify-start border-gray-200"
            :class="[v$.firstName.$errors.length ? 'border-b-2 border-red-200' : 'border-b border-gray-200']"
          >
            <div class="flex w-5/12 items-center justify-start gap-2.5">
              <label for="editUserAttrForm.firstName" class="px-4 py-3 text-center text-[15px] text-gray-500">
                First Name
              </label>
            </div>
            <div class="flex items-center justify-start shrink grow basis-0">
              <div class="flex shrink grow basis-0 items-center justify-start gap-2.5 rounded-lg">
                <input
                  id="editUserAttrForm.firstName" v-model="editUserAttrForm.firstName" spellcheck="false"
                  autocapitalize="none" badinput="false"
                  class="w-7/12 shrink grow basis-0 border-none bg-inherit px-4 py-3 text-[15px] text-gray-800"
                  @blur="v$.firstName.$touch"
                >
              </div>
            </div>
          </div>
        </div>
        <!-- END FIRST NAME INPUT -->

        <!-- LAST NAME INPUT -->
        <div class="mt-3 inline-flex w-full flex-col items-start justify-start gap-2.5">
          <div
            class="inline-flex items-center self-stretch justify-start border-gray-200"
            :class="[v$.lastName.$errors.length ? 'border-b-2 border-red-200' : 'border-b border-gray-200']"
          >
            <div class="flex w-5/12 items-center justify-start gap-2.5">
              <label for="editUserAttrForm.lastName" class="px-4 py-3 text-center text-[15px] text-gray-500">
                Last Name
              </label>
            </div>
            <div class="flex items-center justify-start shrink grow basis-0">
              <div class="flex shrink grow basis-0 items-center justify-start gap-2.5 rounded-lg">
                <input
                  id="editUserAttrForm.lastName" v-model="editUserAttrForm.lastName" spellcheck="false"
                  autocapitalize="none" badinput="false"
                  class="w-7/12 shrink grow basis-0 border-none bg-inherit px-4 py-3 text-[15px] text-gray-800"
                  @blur="v$.lastName.$touch"
                >
              </div>
            </div>
          </div>
        </div>
        <!-- END LAST NAME INPUT -->

        <!-- BIRTHDATE INPUT -->
        <div class="mt-3 inline-flex w-full flex-col items-start justify-start gap-2.5">
          <div
            class="inline-flex items-center self-stretch justify-start border-gray-200"
            :class="[v$.birthdate.$errors.length ? 'border-b-2 border-red-200' : 'border-b border-gray-200']"
          >
            <div class="flex w-5/12 items-center justify-start gap-2.5">
              <label for="editUserAttrForm.birthdate" class="px-4 py-3 text-center text-[15px] text-gray-500">
                Birthdate
              </label>
            </div>
            <div class="flex items-center justify-start shrink grow basis-0">
              <div class="flex shrink grow basis-0 items-center justify-start gap-2.5 rounded-lg">
                <input
                  id="editUserAttrForm.birthdate" v-model="editUserAttrForm.birthdate" type="date" spellcheck="false"
                  badinput="false" max="2999-12-31"
                  class="w-7/12 shrink grow basis-0 border-none bg-inherit px-4 py-3 text-[15px] text-gray-800"
                  @blur="v$.birthdate.$touch"
                >
              </div>
            </div>
          </div>
        </div>
        <!-- END BIRTHDATE INPUT -->

        <!-- PHONE INPUT -->
        <div class="mt-3 inline-flex w-full flex-col items-start justify-start gap-2.5">
          <div
            class="inline-flex items-center self-stretch justify-start border-gray-200"
            :class="[v$.phoneNumber.$errors.length ? 'border-b-2 border-red-200' : 'border-b border-gray-200']"
          >
            <div class="flex w-5/12 items-center justify-start gap-2.5">
              <label for="editUserAttrForm.phoneNumber" class="px-4 py-3 text-center text-[15px] text-gray-500">
                Phone
              </label>
            </div>
            <div class="flex items-center justify-start shrink grow basis-0">
              <div class="flex shrink grow basis-0 items-center justify-start gap-2.5 rounded-lg">
                <input
                  id="editUserAttrForm.phoneNumber" v-model="editUserAttrForm.phoneNumber" spellcheck="false"
                  autocapitalize="none" badinput="false"
                  class="w-7/12 shrink grow basis-0 border-none bg-inherit px-4 py-3 text-[15px] text-gray-800"
                  @blur="v$.phoneNumber.$touch"
                >
              </div>
            </div>
          </div>
        </div>
        <!-- END PHONE INPUT -->

        <!-- LOCATION INPUT -->
        <div class="mt-3 inline-flex w-full flex-col items-start justify-start gap-2.5">
          <div
            class="inline-flex items-center self-stretch justify-start border-gray-200"
            :class="[v$.location.$errors.length ? 'border-b-2 border-red-200' : 'border-b border-gray-200']"
          >
            <div class="flex w-5/12 items-center justify-start gap-2.5">
              <label for="editUserAttrForm.location" class="px-4 py-3 text-center text-[15px] text-gray-500">
                Location
              </label>
            </div>
            <div class="flex items-center justify-start shrink grow basis-0">
              <div class="flex shrink grow basis-0 items-center justify-start gap-2.5 rounded-lg">
                <!-- <input
                  id="editUserAttrForm.location" v-model="editUserAttrForm.location" spellcheck="false"
                  autocapitalize="none" badinput="false"
                  class="w-7/12 shrink grow basis-0 border-none bg-inherit px-4 py-3 text-[15px] text-gray-800"
                  @blur="v$.location.$touch"
                > -->
                <gmaps
                  class="w-[24.5rem] h-full pl-8 border-0 bg-slate-50 text-xs"
                  :value="editUserAttrForm.location"
                  :change="(event:Event) => {
                    editUserAttrForm.location = event
                  }"
                />
              </div>
            </div>
          </div>
        </div>
        <!-- END LOCATION INPUT -->

        <!-- JOB INPUT -->
        <div class="mt-3 inline-flex w-full flex-col items-start justify-start gap-2.5">
          <div
            class="inline-flex items-center self-stretch justify-start border-gray-200"
            :class="[v$.jobTitle.$errors.length ? 'border-b-2 border-red-200' : 'border-b border-gray-200']"
          >
            <div class="flex w-5/12 items-center justify-start gap-2.5">
              <label for="editUserAttrForm.jobTitle" class="px-4 py-3 text-center text-[15px] text-gray-500">
                Job Title
              </label>
            </div>
            <div class="flex items-center justify-start shrink grow basis-0">
              <div class="flex shrink grow basis-0 items-center justify-start gap-2.5 rounded-lg">
                <input
                  id="editUserAttrForm.jobTitle" v-model="editUserAttrForm.jobTitle" spellcheck="false"
                  autocapitalize="none" badinput="false"
                  class="w-7/12 shrink grow basis-0 border-none bg-inherit px-4 py-3 text-[15px] text-gray-800"
                  @blur="v$.jobTitle.$touch"
                >
              </div>
            </div>
          </div>
        </div>
        <!-- END JOB INPUT -->

        <button
          type="button"
          class="mt-7 inline-flex h-11 w-[155px] items-center justify-center rounded-full bg-blue-100 px-4 py-3.5 font-semibold text-blue-500"
          @click="submitUpdate"
        >
          <template v-if="awaitingUpdate">
            <div
              class="inline-block h-6 w-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-500"
              role="status" aria-label="loading"
            >
              <span class="sr-only">
                Loading...
              </span>
            </div>
          </template>
          <template v-else>
            Update Settings
          </template>
        </button>
        <button
          class="float-right mt-7 inline-flex h-11 items-center justify-center px-4 py-3.5 font-semibold"
          @click="$router.go(-1)"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>
