<template>
    <TransitionRoot :show="open" as="template" @after-leave="query = ''">
        <Dialog
            as="div"
            class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"
            @close="open = false"
        >
            <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in duration-200"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
            </TransitionChild>

            <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="ease-in duration-200"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
            >
                <Combobox
                    as="div"
                    class="mx-auto max-w-3xl transform divide-y divide-dark-100 overflow-hidden rounded-xl bg-dark-200 shadow-2xl ring-2 ring-primary/20 transition-all"
                    v-slot="{ activeOption }"
                    @update:modelValue="onSelect"
                >
                    <div class="relative">
                        <SearchIcon
                            class="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                        />
                        <ComboboxInput
                            class="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-white placeholder-gray-400 focus:ring-0 sm:text-sm focus:outline-none focus:bg-black/10"
                            placeholder="Search..."
                            @change="query = $event.target.value"
                        />
                    </div>

                    <ComboboxOptions
                        v-if="query === '' || filteredPeople.length > 0"
                        class="flex divide-x divide-dark-100"
                        as="div"
                        static
                        hold
                    >
                        <div
                            :class="['max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4', activeOption && 'sm:h-96']"
                        >
                            <h2
                                v-if="query === ''"
                                class="mt-2 mb-4 text-xs font-semibold text-gray-500"
                            >Popüler Aramalar</h2>
                            <div hold class="-mx-2 text-sm text-gray-500">
                                <ComboboxOption
                                    v-for="person in query === '' ? recent : filteredPeople"
                                    :key="person.id"
                                    :value="person"
                                    as="template"
                                >
                                    <div
                                        :class="['group flex cursor-pointer select-none items-center rounded-md p-2', activeOption && 'hover:bg-black/10 text-gray-200']"
                                    >
                                        <img
                                            :src="person.imageUrl"
                                            alt
                                            class="h-6 w-6 flex-none rounded-full"
                                        />
                                        <span class="ml-3 flex-auto truncate">{{ person.name }}</span>
                                        <ChevronRightIcon
                                            v-if="activeOption"
                                            class="ml-3 h-5 w-5 flex-none text-gray-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </ComboboxOption>
                            </div>
                        </div>

                        <div
                            v-if="activeOption"
                            class="hidden h-96 w-1/2 flex-none flex-col divide-y divide-dark-100 overflow-y-auto sm:flex"
                        >
                            <div class="flex-none p-6 text-center">
                                <img
                                    :src="activeOption.imageUrl"
                                    alt
                                    class="mx-auto h-16 w-16 rounded-full"
                                />
                                <h2 class="mt-3 font-semibold text-gray-200">{{ activeOption.name }}</h2>
                                <p class="text-sm leading-6 text-gray-500">{{ activeOption.role }}</p>
                            </div>
                            <div class="flex flex-auto flex-col justify-between p-6">
                                <dl class="grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-500">
                                    <dt class="col-end-1 font-semibold text-gray-200">Phone</dt>
                                    <dd>{{ activeOption.phone }}</dd>
                                    <dt class="col-end-1 font-semibold text-gray-200">URL</dt>
                                    <dd class="truncate">
                                        <a
                                            :href="activeOption.url"
                                            class="text-primary underline"
                                        >{{ activeOption.url }}</a>
                                    </dd>
                                    <dt class="col-end-1 font-semibold text-gray-200">Email</dt>
                                    <dd class="truncate">
                                        <a
                                            :href="`mailto:${activeOption.email}`"
                                            class="text-primary underline"
                                        >{{ activeOption.email }}</a>
                                    </dd>
                                </dl>
                                <button
                                    type="button"
                                    class="mt-6 w-full rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primary/60 focus:outline-none focus:ring-2 focus:ring-primary/70"
                                >Send message</button>
                            </div>
                        </div>
                    </ComboboxOptions>

                    <div
                        v-if="query !== '' && filteredPeople.length === 0"
                        class="py-14 px-6 text-center text-sm sm:px-14"
                    >
                        <UsersIcon class="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                        <p class="mt-4 font-semibold text-gray-200">No people found</p>
                        <p
                            class="mt-2 text-gray-500"
                        >We couldn’t find anything with that term. Please try again.</p>
                    </div>
                </Combobox>
            </TransitionChild>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import { computed, ref } from 'vue'
import { SearchIcon } from '@heroicons/vue/solid'
import { ChevronRightIcon, UsersIcon } from '@heroicons/vue/outline'
// import { stateStore } from '../stores/store.js'
import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'

const people = [
  {
    id: 1,
    name: 'Leslie Alexander',
    phone: '1-493-747-9031',
    email: 'lesliealexander@example.com',
    role: 'Co-Founder / CEO',
    url: 'https://example.com',
    profileUrl: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Leslie Alexander',
    phone: '1-493-747-9031',
    email: 'lesliealexander@example.com',
    role: 'Co-Founder / CEO',
    url: 'https://example.com',
    profileUrl: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Leslie Alexander',
    phone: '1-493-747-9031',
    email: 'lesliealexander@example.com',
    role: 'Co-Founder / CEO',
    url: 'https://example.com',
    profileUrl: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    phone: '1-493-747-9031',
    email: 'lesliealexander@example.com',
    role: 'Co-Founder / CEO',
    url: 'https://example.com',
    profileUrl: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Leslie Alexander',
    phone: '1-493-747-9031',
    email: 'lesliealexander@example.com',
    role: 'Co-Founder / CEO',
    url: 'https://example.com',
    profileUrl: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Leslie Alexander',
    phone: '1-493-747-9031',
    email: 'lesliealexander@example.com',
    role: 'Co-Founder / CEO',
    url: 'https://example.com',
    profileUrl: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 7,
    name: 'Leslie Alexander',
    phone: '1-493-747-9031',
    email: 'lesliealexander@example.com',
    role: 'Co-Founder / CEO',
    url: 'https://example.com',
    profileUrl: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 8,
    name: 'Leslie Alexander',
    phone: '1-493-747-9031',
    email: 'lesliealexander@example.com',
    role: 'Co-Founder / CEO',
    url: 'https://example.com',
    profileUrl: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 9,
    name: 'Leslie Alexander',
    phone: '1-493-747-9031',
    email: 'lesliealexander@example.com',
    role: 'Co-Founder / CEO',
    url: 'https://example.com',
    profileUrl: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 10,
    name: 'Leslie Alexander',
    phone: '1-493-747-9031',
    email: 'lesliealexander@example.com',
    role: 'Co-Founder / CEO',
    url: 'https://example.com',
    profileUrl: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 11,
    name: 'Leslie Alexander',
    phone: '1-493-747-9031',
    email: 'lesliealexander@example.com',
    role: 'Co-Founder / CEO',
    url: 'https://example.com',
    profileUrl: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]
// const stateStore = useStateStore();
// console.log(stateStore.getState())
const recent = [people[5], people[4], people[2]]

export default {
    components: {
        ChevronRightIcon,
        Combobox,
        ComboboxInput,
        ComboboxOptions,
        ComboboxOption,
        Dialog,
        DialogOverlay,
        SearchIcon,
        TransitionChild,
        TransitionRoot,
        UsersIcon,
    },
    setup() {
        
        
        const open = ref(true)
        const query = ref('')
        const filteredPeople = computed(() =>
            query.value === ''
                ? []
                : people.filter((person) => {
                    return person.name.toLowerCase().includes(query.value.toLowerCase())
                })
        )

        return {
            open,
            query,
            recent,
            filteredPeople,
            onSelect(person) {
                window.location = person.url
            },
        }
    },
}
</script>