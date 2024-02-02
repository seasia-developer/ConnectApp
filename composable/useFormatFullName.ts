type NameString = string | null | undefined

export default function () {
  const formatFullName = computed(() => {
    return (firstName: NameString, lastName: NameString) => {
      return `${firstName} ${lastName}`.trim()
    }
  })

  return { formatFullName }
}
