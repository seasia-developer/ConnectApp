<script>
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { maxLength, minLength, required } from '@vuelidate/validators'

// import DateTimePicker from '../components/DateTimePicker.vue'
import MultiSelectOptions from './MultiSelectOptions.vue'
import UserInput from '~/components/UserInput.vue'
import UserButton from '~/components/UserButton.vue'
import ModalShow from '~/components/ModalShow.vue'

export default {
  components: {
    UserInput,
    UserButton,
    ModalShow,
    MultiSelectOptions,
  },
  setup() {
    const { uploadData } = useS3()

    const searchInput = ref('')
    const searchButton = computed(() => searchInput.value.length > 0)

    const { userAttributes } = useAuthStore()

    const createProjectModel = reactive({
      name: '',
      startDate: '',
      endDate: '',
      location: '',
      about: '',
      milestones: [],
      causeAreas: [],
    })

    const vCreateProject$ = useVuelidate(
      {
        name: { required, minLength: minLength(1), maxLength: maxLength(100) },
        startDate: { required },
        endDate: { required },
        location: { required },
        about: { maxLength: maxLength(740) },
        milestones: {
          required,
          minLength: minLength(1),
          maxLength: maxLength(50),
        },
        causeAreas: {},
      },
      createProjectModel,
    )

    async function submitCreateProject(isDraft) {
      try {
        const { data } = await useAPI().graphql({
          query: createProject,
          variables: {
            input: {
              userId: userAttributes.id,
              status: isDraft ? 'DRAFT' : 'ACTIVE',
              name: createProjectModel.name,
              // startDate: createProjectModel.startDate,
              // endDate: createProjectModel.endDate,
              location: createProjectModel.location,
              about: createProjectModel.about,
              // milestones: createProjectModel.milestones,
            },
          },
        })
        useLogger().debug(data)
      }
      catch (e) {
        useLogger().error(e)
      }
    }

    const createGroupModel = reactive({
      name: '',
      about: '',
      private: false,
      visible: true,
    })

    const vCreateGroup$ = useVuelidate(
      {
        name: { required, minLength: minLength(1), maxLength: maxLength(100) },
        about: { maxLength: maxLength(740) },
        private: { required },
        visible: { required },
      },
      createGroupModel,
    )

    async function submitCreateGroup(file) {
      try {
        const { data } = await useAPI().graphql({
          query: createGroup,
          variables: {
            input: {
              userId: userAttributes.id,
              name: createGroupModel.name,
              about: createGroupModel.about,
              private: createGroupModel.private,
              visible: createGroupModel.visible,
            },
          },
        })
        useLogger().debug(data)

        const uploadedData = await uploadData({
          key: `${data.createGroup.id}-${file.name}`,
          data: file,
        }).result
        useLogger().debug(uploadedData)
        const { updatedData } = await useAPI().graphql({
          query: updateGroup,
          variables: {
            input: {
              id: data.createGroup.id,
              profilePicture: uploadedData.key,
            },
          },
        })
        useLogger().debug(updatedData)
      }
      catch (e) {
        useLogger().error(e)
      }
    }

    return {
      searchInput,
      searchButton,
      vCreateProject$,
      createProjectModel,
      submitCreateProject,
      vCreateGroup$,
      createGroupModel,
      submitCreateGroup,
    }
  },
  data() {
    return {
      selectPrivacy: [
        { value: null, label: 'Choose Privacy' },
        { value: false, label: 'Public' },
        { value: true, label: 'Private' },
      ],
      selectDiscoverability: [
        { value: null, label: 'Search Settings' },
        { value: true, label: 'Searchable' },
        { value: false, label: 'Restricted' },
      ],
      AddMemberOptions: [
        'Nonkosi Joyi',
        'Wade Warren',
        'Theresa Webb',
        'Ronald Richards',
        'Nonkosi Joyi',
      ],
      addMember: [],
      isModalVisible: false,
      isProjectModal: false,
      imagePreview: null,
      isFixedDivVisible: false,
      listVisible: false,
      imageUpdate: false,
      open: false,
      step: 1,

      modalOptions: [
        {
          modalTitle: 'Project',
          modalicon: 'document-text',
          modalDesc:
            ' Connect, communicate, and collaborate seamlessly with your team in projects.',
          plusIcon: 'plus',
        },
        {
          modalTitle: 'Group',
          modalicon: 'people',
          modalDesc:
            ' Connect with your community and find new possibilities in groups.',
          plusIcon: 'plus',
        },
      ],
      skillOption: [
        {
          skillTitle: '👩‍⚖️ Advocacy & Human Rights',
        },
        {
          skillTitle: '📊 Leadership & Team Management',
        },
        {
          skillTitle: '💻 Computers & Technology',
        },
        {
          skillTitle: '👩‍🎓 Education & Literacy',
        },
        {
          skillTitle: '🌱 PR & Marketing',
        },
        {
          skillTitle: '👥 Drawing',
        },
        {
          skillTitle: '📺 Media & Broadcasting',
        },
        {
          skillTitle: '🙋🏾‍ Teaching & Tutoring',
        },
        {
          skillTitle: '⚖️ Justice & Legal',
        },
        {
          skillTitle: '👨‍✈️ Event Planning & Coordination',
        },
        {
          skillTitle: '🐕 Data analysis',
        },
        {
          skillTitle: '🧑‍🦽 Non-Profit Volunteer / Organizer ',
        },
        {
          skillTitle: '👨‍🚒 Emergency & Safety',
        },
        {
          skillTitle: '⛪️ Photography',
        },
        {
          skillTitle: '👨‍⚕️ Health & Medicine',
        },
      ],
      isDropdownOpen: false,
      inputArr: [{ value: '' }],
    }
  },

  // Modal function
  methods: {
    updateStartDate(newDate) {
      // Handle the date change in your parent component
      this.createProjectModel.startDate = newDate
    },
    updateEndDate(newDate) {
      this.createProjectModel.endDate = newDate
    },
    handleUpdateMilestone(ele) {
      this.createProjectModel.milestones = ele
    },
    handleUpdateMember(ele) {
      this.addMember = ele
    },

    handleImageChange() {
      const input = this.$refs.imageInput
      if (input.files && input.files[0]) {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.imagePreview = e.target.result
        }
        reader.readAsDataURL(input.files[0])
      }
    },
    updateImage() {
      this.imageUpdate = true
    },
    removeImage() {
      this.imagePreview = null
      this.imageUpdate = false
    },
    toggleFixedDiv() {
      this.isFixedDivVisible = !this.isFixedDivVisible
    },
    handleList() {
      this.listVisible = !this.listVisible
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    addList() {
      this.inputArr.push({ value: '' })
    },
    async handleSteps() {
      if (this.step === 3)
        await this.submitCreateProject(false)

      this.step = this.step + 1
    },
    cancelSteps() {
      if (this.step > 1)
        this.step = this.step - 1
    },
  },
}
</script>

<template>
  <div class="relative inline-block hs-dropdown">
    <button
      id="hs-dropdown-custom-trigger"
      type="button"
      class="hs-dropdown-toggleh-[38px] inline-flex h-[39px] w-[40px] items-center gap-x-2.5 rounded-full border border-gray-200 bg-blue-500 px-3 font-semibold tracking-wide text-white shadow-sm transition-all lg:h-10 lg:w-10 lg:px-4"
      @click="toggleDropdown"
    >
      <span class="hidden lg:block"> Create </span>
      <NuxtIcon name="plus" class="mb-[0px] text-[14.5px]" aria-hidden="true" />
    </button>

    <div
      class="hs-dropdown-menu hs-menu duration inset-x-0 top-10 z-50 mr-0 mt-2 hidden h-screen w-screen min-w-[15rem] rounded-none bg-gray-100 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:right-20 hs-dropdown-open:mr-56 hs-dropdown-open:opacity-100 sm:h-auto sm:w-72 sm:overscroll-none sm:rounded-lg sm:bg-white sm:p-2 dark:border dark:border-gray-700"
      data-popper-placement="bottom-end"
      aria-labelledby="hs-dropdown-custom-trigger"
    >
      <span
        class="flex items-center w-full p-2 text-xl font-semibold text-gray-800 bg-white md:block sm:hidden"
      >
        <NuxtIcon name="arrow-left" class="mr-2 text-[15px] text-gray-800" />
        create
      </span>
      <span
        class="-top-3 right-32 w-0 border-x-8 border-b-[15px] border-x-transparent border-b-white sm:absolute sm:before:h-0"
      />
      <div class="pt-1 pb-2 bg-white rounded-xl sm:pt-0">
        <li
          v-for="data in modalOptions"
          :key="data.modalTitle"
          data-hs-overlay="modal-open"
          class="flex items-center justify-around px-4 py-2 mx-4 my-2 mt-4 cursor-pointer rounded-xl bg-gray-100/50 text-start"
          @click="
            (e) => {
              if (data?.modalTitle === 'Group') {
                isModalVisible = true;
                isProjectModal = false;
              }
              else if (data?.modalTitle === 'Project') {
                isProjectModal = true;
                isModalVisible = false;
              }
            }
          "
        >
          <span class="h-[26px] rounded-xl bg-gray-200 p-1">
            <NuxtIcon
              :name="data.modalicon"
              class="mr-2 text-[18px] text-gray-800"
            />
          </span>
          <span class="w-full ml-4">
            <span class="block font-bold text-gray-800">
              {{ data.modalTitle }}
            </span>
            <span class="w-full text-xs font-normal text-gray-500">
              {{ data.modalDesc }}
            </span>
          </span>
          <span class="h-[25px]">
            <NuxtIcon
              :name="data.plusIcon"
              class="mr-2 text-[16px] text-gray-500"
            />
          </span>
        </li>
      </div>
    </div>
    <span
      class="duration inset-0 transition after:left-0 after:top-0 after:z-10 after:h-full after:w-full after:bg-gray-900 hs-dropdown-open:after:fixed max-[639px]:hidden"
    />
  </div>

  <ModalShow :showmodal="isProjectModal">
    <template #modalContent>
      <div
        class="flex flex-col overflow-y-auto rounded-none border bg-white shadow-sm slick-scrollbars sm:rounded-xl dark:border-gray-700 dark:bg-gray-800 dark:shadow-slate-700/[.7]"
        :class="[
          step === 4
            ? 'h-[350px] w-3/4 overflow-y-hidden rounded-xl'
            : 'h-[650px] w-full',
        ]"
      >
        <div
          class="flex items-center justify-between px-10 py-4 bg-slate-50 sm:bg-white"
          :class="[step === 4 ? 'hidden' : 'block']"
        >
          <h3 class="font-bold text-gray-800 dark:text-white">
            <span class="hidden sm:block"> Project Information </span>
          </h3>
          <button
            class="px-3 py-2 text-sm font-semibold text-black bg-gray-200 border-2 rounded-full sm:py-2"
            @click="
              () => {
                isProjectModal = false;
              }
            "
          >
            Save & exit
          </button>
        </div>
        <div
          v-if="showForm || step === 1"
          class="w-full p-4 pt-2 overflow-y-auto bg-slate-50 sm:bg-slate-50 sm:p-10"
        >
          <form class="p-2 pt-5 sm:p-10 sm:pt-5">
            <div>
              <label
                class="block text-xs text-gray-600 dark:text-white"
                for="createProjectModel.name"
              >
                Project Name Title*
              </label>
              <input
                id="createProjectModel.name"
                v-model="createProjectModel.name"
                type="text"
                name="Project Name Title"
                placeholder="Enter title"
                class="block w-full px-4 py-3 mt-2 text-xs border-gray-200 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 sm:py-3 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
              >
            </div>
            <div class="grid sm:grid-cols-2 sm:gap-4">
              <div class="pt-5">
                <div class="relative max-w-sm">
                  <DateChange
                    :vmodel="createProjectModel.startDate"
                    label="Start Date*"
                    labelstyle="block text-xs text-gray-600 dark:text-white mb-2"
                    placeholder="Select Date"
                    @update:vmodel="updateStartDate"
                  />
                  <div
                    class="pointer-events-none absolute right-[5px] top-[36px] flex items-center"
                  />
                </div>
              </div>
              <div class="pt-5">
                <div class="relative max-w-sm">
                  <DateChange
                    :vmodel="createProjectModel.endDate"
                    label="End Date*"
                    labelstyle="block text-xs text-gray-600 dark:text-white mb-2"
                    placeholder="Select Date"
                    @update:vmodel="updateEndDate"
                  />
                </div>
              </div>
            </div>
            <div class="relative">
              <NuxtIcon
                name="location"
                class="absolute left-[14px] top-[56px] mr-2 text-[16px] text-gray-500"
              />
              <div>
                <label
                  class="block pt-5 text-xs text-gray-600 dark:text-white"
                  for="createProjectModel.location"
                >
                  Select Location*
                </label>
                <input
                  id="createProjectModel.location"
                  v-model="createProjectModel.location"
                  type="text"
                  name="Select Location"
                  placeholder="Enter Location"
                  class="block w-full px-10 py-3 mt-2 text-xs border-gray-200 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:p-10 sm:py-3 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                >
              </div>
            </div>
            <div class="pt-5">
              <label for="about-project" class="text-xs text-gray-600">
                About Project
              </label>

              <textarea
                id="about-project"
                v-model="createProjectModel.about"
                name="about-project"
                class="block w-full px-4 py-3 mt-2 text-xs border-gray-200 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 sm:py-3 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                cols="30"
                rows="4"
                placeholder="Enter text"
              />
            </div>
            <div class="relative">
              <NuxtIcon
                name="Pointer"
                class="absolute left-[20px] top-[61px] mr-2 text-[8px] text-gray-800"
              />
              <UserInput
                :vmodel="createProjectModel.milestones"
                inputtype="text"
                labelstyle="block text-xs text-gray-600 pt-5 dark:text-white"
                labelfor="milestones"
                inputid="milestones"
                name="milestones"
                label="Milestones"
                placeholder="Enter milestone"
                inputstyle="py-3 sm:py-3 px-10 mt-2 text-xs block w-full border-gray-200 shadow-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 p-10 sm:p-10 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                @update:vmodel="handleUpdateMilestone"
              />
            </div>
            <div
              v-for="(option, index) in inputArr"
              :key="index"
              :value="option.value"
            >
              <div class="relative">
                <NuxtIcon
                  name="Pointer"
                  class="absolute left-[20px] top-[17px] mr-2 text-[8px] text-gray-800"
                />
                <UserInput
                  v-model="option.value"
                  inputtype="text"
                  labelstyle="block text-xs text-gray-600 dark:text-white"
                  labelfor="milestones"
                  inputid="milestones"
                  name="milestones"
                  placeholder="Enter milestones"
                  inputstyle="py-3 sm:py-3 px-10 mt-2 text-xs block w-full border-gray-200 shadow-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 p-10 sm:p-10 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                />
              </div>
            </div>
            <div class="mt-5 group">
              <UserButton
                buttontype="button"
                name="+ Add option"
                class="w-full py-3 text-gray-800 bg-gray-200 border-2 rounded-lg hover:bg-gray-800 hover:text-white sm:py-3"
                @click="addList"
              />
            </div>
          </form>
        </div>
        <div
          v-if="step === 2"
          class="w-full h-full px-8 overflow-y-auto bg-slate-50 sm:px-16 md:px-16"
        >
          <p
            class="hidden text-3xl font-bold text-center text-gray-800 pt-14 sm:block"
          >
            Add skills required for this project
          </p>
          <p
            class="block py-8 pb-2 text-2xl font-bold text-center text-gray-800 sm:hidden"
          >
            Add Skills for Volunteers
          </p>
          <ul class="grid grid-cols-2 pb-6 mt-8 sm:grid-cols-4">
            <li
              v-for="(option, index) in skillOption"
              :key="index"
              class="flex items-center justify-center h-8 px-8 py-6 m-auto mb-4 text-xs font-normal text-center rounded-lg cursor-pointer hover:bg-blue-50 hover:text-blue-500 sm:w-auto"
              :class="[
                index === 0 || index === 7 || index === 13
                  ? 'bg-blue-50 text-blue-500'
                  : 'bg-white',
              ]"
            >
              {{ option.skillTitle }}
            </li>
            <div class="flex justify-center">
              <button
                class="m-1 flex h-8 w-24 cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white px-[1px] text-center text-xs font-normal hover:bg-gray-50 hover:text-gray-500"
              >
                <span class="mr-1"> + </span>Add new
              </button>
            </div>
          </ul>
        </div>

        <div
          v-if="step === 3"
          class="h-full w-full bg-slate-50 px-16 max-[355px]:px-8"
        >
          <div>
            <p
              class="hidden pt-16 mb-4 ml-16 text-3xl font-bold text-gray-800 text-start sm:block"
            >
              Adding Members
            </p>
            <p
              class="block py-8 pb-2 text-2xl font-bold text-center text-gray-800 sm:hidden"
            >
              Adding Volunteers
            </p>
          </div>
          <div class="w-full m-auto sm:w-4/5">
            <MultiSelectOptions
              :vmodel="addMember"
              :options="AddMemberOptions"
              @update:vmodel="handleUpdateMember"
            />
            <div class="pt-5">
              <label for="about-project" class="text-xs text-gray-600">
                Tell your friends what is the project about
              </label>

              <textarea
                id="about-project"
                name="about-project"
                class="block w-full px-4 py-3 mt-2 text-xs border-gray-200 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 sm:py-3 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                cols="30"
                rows="4"
                placeholder="Enter some text"
              />
            </div>
          </div>
        </div>
        <div v-if="step === 4" class="h-full bg-slate-50">
          <div class="flex justify-end mx-6 my-4">
            <NuxtIcon
              name="close"
              class="cursor-pointer text-[24px] text-gray-500"
              aria-hidden="true"
              data-hs-overlay="#hs-slide-down-animation-modal"
              @click="
                () => {
                  isProjectModal = false;
                  isModalVisible = false;
                  step = 1;
                }
              "
            />
          </div>
          <div
            class="flex flex-col items-center justify-center w-full px-4 bg-slate-50 sm:px-16"
          >
            <div class="w-24 rounded-full bg-blue-50 p-7">
              <img class="w-full" src="~/assets/img/document-favorite.png">
            </div>
            <div class="py-6 pb-1 sm:py-8">
              <p
                class="text-xl font-bold text-center text-gray-800 sm:text-2xl"
              >
                Project is successfully created
              </p>
            </div>
            <div>
              <UserButton
                buttontype="button"
                name="Got it"
                class="hidden px-8 py-2 text-sm font-semibold text-gray-800 border-2 border-gray-200 rounded-full hover:bg-gray-100 sm:block"
                data-hs-overlay="#hs-slide-down-animation-modal"
                @click="
                  () => {
                    isProjectModal = false;
                    isModalVisible = false;
                    step = 1;
                  }
                "
              />
              <p
                class="block text-sm font-normal text-center text-gray-500 sm:hidden"
              >
                You're applying to volunteer in Philippines
              </p>
            </div>
          </div>
        </div>
        <div
          class="w-full bg-gray-100 py-[1px]"
          :class="[step === 4 ? 'hidden' : 'block']"
        >
          <div
            class="w-20 bg-blue-500 py-[2px]"
            :class="[step === 2 ? 'w-72' : step === 3 ? 'w-full' : 'w-20']"
          />
        </div>
        <div
          class="flex items-center justify-between px-10 py-4 bg-white"
          :class="[step === 4 ? 'hidden' : 'block']"
        >
          <UserButton
            buttontype="button"
            name="Back"
            class="px-10 py-2 text-black border-2 border-gray-200 rounded-full hover:bg-gray-100"
            @click="cancelSteps()"
          />
          <UserButton
            buttontype="button"
            name="Next"
            class="px-10 py-2 mr-2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
            @click="handleSteps()"
          />
        </div>
      </div>
    </template>
  </ModalShow>

  <ModalShow :showmodal="isModalVisible">
    <template #modalContent>
      <div
        class="flex h-[650px] w-full flex-col overflow-y-auto rounded-none border bg-white shadow-sm slick-scrollbars sm:rounded-xl dark:border-gray-700 dark:bg-gray-800 dark:shadow-slate-700/[.7]"
      >
        <h3
          class="flex px-10 py-4 font-bold text-gray-800 sm:py-10 sm:pb-0 dark:text-white"
        >
          <NuxtIcon
            name="arrow-left"
            class="mr-2 mt-1 block text-[15px] text-gray-800 sm:hidden"
            aria-hidden="true"
          />
          Create a group
        </h3>
        <div class="p-10 pt-2 overflow-y-auto bg-gray-100 sm:bg-white">
          <div class="w-full mt-3 mb-6 bg-gray-300 rounded-2xl">
            <label
              for="file"
              class="relative flex flex-col items-center justify-center h-60"
            >
              <input
                v-if="!imagePreview || imageUpdate"
                id="file"
                ref="imageInput"
                type="file"
                placeholder="Add image"
                class="invisible"
                @change="handleImageChange"
              >
              <input
                v-else
                id="file"
                ref="imageInput"
                type="text"
                placeholder="Add image"
                class="invisible"
              >
              <img
                :src="imagePreview"
                alt="Preview"
                class="absolute w-full h-full"
                :class="[
                  !imagePreview ? 'hidden' : 'h-full w-full rounded-2xl',
                ]"
              >
              <div
                v-if="imagePreview"
                :class="[imagePreview && 'border-0 bg-slate-100/20 text-white']"
                class="absolute flex px-4 py-2 text-sm font-bold text-center border rounded-full border-slate-500 text-slate-500"
                @click="handleList"
              >
                <NuxtIcon name="image" class="mr-2 text-[16px]" />
                <button>Change Image</button>
                <div
                  v-if="listVisible"
                  class="absolute right-0 w-full px-4 py-2 bg-white top-10 rounded-xl"
                >
                  <div class="flex py-2" @click="updateImage">
                    <NuxtIcon name="edit" class="mr-2 text-[16px] text-black" />
                    <button
                      id="imageInput"
                      class="text-xs font-light text-black border-0"
                    >
                      Update image
                    </button>
                  </div>
                  <div class="flex py-2" @click="removeImage">
                    <NuxtIcon
                      name="trash"
                      class="mr-2 text-[16px] text-red-600"
                    />
                    <button class="text-xs font-light text-red-600 border-0">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div
                v-else
                :class="[imagePreview && 'border-0 bg-slate-100/20 text-white']"
                class="absolute flex px-4 py-2 text-sm font-bold text-center border rounded-full border-slate-500 text-slate-500"
              >
                <NuxtIcon name="image" class="mr-2 text-[16px]" />
                Add Image
              </div>
            </label>
          </div>

          <div>
            <label
              class="block text-xs text-gray-600 dark:text-white"
              for="groupName"
            >
              Group Name*
            </label>
            <input
              id="createGroupModel.name"
              v-model="createGroupModel.name"
              type="text"
              name="Group Name"
              placeholder="Enter a name"
              class="block w-full px-4 py-3 mt-2 text-xs border-gray-200 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 sm:py-3 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
              :class="{
                'shadow-input-error border-red-500':
                  vCreateGroup$.name.$errors.length,
              }"
              @blur="vCreateGroup$.name.$touch"
            >
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="pt-5 ">
              <label
                for="createGroupModel.private"
                class="text-xs text-gray-600"
              >
                Choose Privacy*
              </label>
              <select
                id="createGroupModel.private"
                v-model="createGroupModel.private"
                class="block w-full px-4 py-3 mt-2 text-xs whitespace-normal border-gray-200 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 sm:py-3 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                placeholder="Choose Privacy"
              >
                <option
                  v-for="(option, index) in selectPrivacy"
                  :key="index"
                  :value="option.value"
                  class="text-gray-600"
                  :disabled="index === 0 ? true : false"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
            <div class="pt-5 ">
              <label
                for="createGroupModel.visible"
                class="text-xs text-gray-600"
              >
                Discoverability*
              </label>
              <select
                id="createGroupModel.visible"
                v-model="createGroupModel.visible"
                class="block w-full px-4 py-3 mt-2 text-xs whitespace-normal border-gray-200 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 sm:py-3 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                placeholder="Choose Privacy"
              >
                <option
                  v-for="(option, index) in selectDiscoverability"
                  :key="index"
                  :value="option.value"
                  class="text-gray-600"
                  :disabled="index === 0 ? true : false"
                >
                  {{ option.label }}
                </option>
              </select>
            </div>
          </div>
          <div>
            <div class="relative flex pt-5">
              <NuxtIcon
                name="search"
                class="absolute left-4 top-12 text-[16px] text-gray-500"
              />
              <div class="w-full">
                <UserInput
                  v-model="searchInput"
                  inputtype="text"
                  label="Invite members"
                  labelstyle="block text-xs text-gray-600 dark:text-white"
                  labelfor="member"
                  inputid="member"
                  name="member"
                  placeholder="Search members"
                  inputstyle="py-3 sm:py-3 px-12 text-xs block w-full border-gray-200 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:p-10 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 rounded-l-lg"
                />
              </div>
              <div class="flex items-end">
                <UserButton
                  buttontype="button"
                  name="Add"
                  class="h-[42px] rounded-r-lg bg-gray-300 px-6 text-white sm:px-12"
                  :class="[searchButton ? 'bg-gray-800' : 'bg-gray-300']"
                  :disabled="!searchButton"
                />
              </div>
            </div>
            <div
              class="flex justify-between px-4 py-2 mt-2 rounded-lg group hover:bg-blue-50"
            >
              <div class="flex">
                <img
                  class="inline-block w-10 h-10 mr-3 rounded-full"
                  src="https://d1hbpr09pwz0sk.cloudfront.net/profile_pic/yervant-zorian-2b3f2c6c"
                  alt="Image Description"
                >
                <div>
                  <p class="mt-3 text-sm font-bold sm:mt-0 sm:text-base">
                    Eleanor Pena
                  </p>
                  <p class="hidden text-sm font-normal sm:block sm:text-center">
                    Volunteer<span class="mx-2"> . </span><span>Electrical Engineer</span>
                  </p>
                </div>
              </div>
              <UserButton
                name="Invite"
                class="mt-1.5 h-8 rounded-full px-4 text-sm text-blue-500 group-hover:bg-blue-100"
              />
            </div>
          </div>
          <div class="pt-5">
            <label for="createGroupModel.about" class="text-xs text-gray-600">
              About Group
            </label>

            <textarea
              id="createGroupModel.about"
              v-model="createGroupModel.about"
              name="createGroupModel.about"
              class="block w-full px-4 py-3 mt-2 text-xs border-gray-200 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:p-4 sm:py-3 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
              cols="30"
              rows="4"
              placeholder="Enter text (optional)"
            />
          </div>
          <div class="flex pt-6">
            <UserButton
              buttontype="button"
              name="Create"
              class="px-12 py-2 mr-2 text-white bg-blue-500 rounded-full hover:bg-blue-600"
              @click="
                () => {
                  submitCreateGroup(imagePreview);
                  isProjectModal = false;
                  isModalVisible = false;
                }
              "
            />

            <UserButton
              buttontype="button"
              name="Cancel"
              class="px-12 py-2 text-gray-600 border-2 border-gray-200 rounded-full hover:bg-gray-100"
              @click="
                () => {
                  isProjectModal = false;
                  isModalVisible = false;
                }
              "
            />
          </div>
        </div>
      </div>
    </template>
  </ModalShow>
  <!-- Modal component -->
</template>

<style>
.hs-menu {
  position: absolute !important;
  inset: 3px auto auto -99% !important;
}

@media (max-width: 1024px) {
  .hs-menu {
    inset: 3px auto auto -88px !important;
  }
}

@media (max-width: 722px) {
  .hs-menu {
    inset: 3px auto auto -195% !important;
  }
}

@media (max-width: 660px) {
  .hs-menu {
    inset: 3px auto auto -12px !important;
  }
}

@media (max-width: 642px) {
  .hs-menu {
    inset: -3px auto auto 0 !important;
  }
}
</style>
