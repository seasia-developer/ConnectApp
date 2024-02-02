import { Amplify } from 'aws-amplify'
import { Hub } from 'aws-amplify/utils'
import config from '~/amplifyconfiguration.json'

export const useAuthStore = defineStore('authStore', () => {
  const { formatFullName } = useFormatFullName()
  const currentUser = ref()
  const isLoggedIn = computed(() => currentUser.value?.id !== undefined || false)

  const userAttributes = computed(() => {
    return {
      id: currentUser.value?.id || '',
      emailAddress: currentUser.value?.emailAddress || '',
      phoneNumber: currentUser.value?.phoneNumber || '',
      firstName: currentUser.value?.firstName || '',
      lastName: currentUser.value?.lastName || '',
      fullName: currentUser.value ? formatFullName.value(currentUser.value?.firstName, currentUser.value?.lastName) : '',
      birthdate: currentUser.value?.birthdate || '',
      profilePicture: currentUser.value?.profilePicture || '',
      createdAt: currentUser.value?.createdAt || '',
      updatedAt: currentUser.value?.updatedAt || '',
      jobTitle: currentUser.value?.jobTitle || '',
      location: currentUser.value?.location || '',
    }
  })

  async function fetchCurrentUser(id: string) {
    try {
      const { data } = await useLeanQuery({
        query: getUser,
        variables: { id },
        fields: [
          'id',
          'emailAddress',
          'phoneNumber',
          'firstName',
          'lastName',
          'birthdate',
          'profilePicture',
          'createdAt',
          'updatedAt',
          'jobTitle',
          'location',
        ],
      })

      if (data.getUser?.id) {
        currentUser.value = data.getUser
        return data.getUser
      }

      return null
    }
    catch (e) {
      useLogger().error('unable to fetch user', e)
    }
  }

  if (process.client)
    Amplify.configure(config, { ssr: useRuntimeConfig().public.ssrEnabled })

  Hub.listen('auth', async ({ payload }) => {
    switch (payload.event) {
      case 'signedIn':
        useLogger().info('calling fetchUser from HUB!')
        try {
          await fetchCurrentUser(payload.data.userId)
        }
        catch (e) {
          useLogger().error('error', e)
        }
        return await navigateTo({ name: 'feed' })
      case 'signedOut':
        if (currentUser.value !== null)
          return currentUser.value = null
        break
      case 'tokenRefresh':
        if (currentUser.value)
          return fetchCurrentUser(currentUser.value.id)
        break
    }
  })

  watch(currentUser, () => {
    if (!isLoggedIn.value) {
      useLogger().debug('navigating to signin page')
      navigateTo({ name: 'signin' })
    }
  })

  return {
    currentUser,
    isLoggedIn,
    userAttributes,
    fetchCurrentUser,
  }
}, {
  persist: true,
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
