import { mount, RouterLinkStub } from '@vue/test-utils'
import FilteredList from '@/components/FilteredList/FilteredList.vue'

const listData = [
  {
    id: 20,
    linkTo: '/users/20',
    linkText: 'adrian graham',
  },
  {
    id: 21,
    linkTo: '/users/21',
    linkText: 'amanda patterson',
  },
  {
    id: 22,
    linkTo: '/users/22',
    linkText: 'elizabeth lee',
  },
  {
    id: 23,
    linkTo: '/users/23',
    linkText: 'amanda ford',
  },
  {
    id: 24,
    linkTo: '/users/24',
    linkText: 'kay perry',
  },
  {
    id: 25,
    linkTo: '/users/25',
    linkText: 'landon miller',
  },
]

describe('Logo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FilteredList, {
      propsData: {
        listData,
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('renders list of items', () => {
    const wrapper = mount(FilteredList, {
      propsData: {
        listData,
      },
      stubs: {
        NuxtLink: RouterLinkStub,
      },
    })
    const listItems = wrapper.vm.$el.getElementsByTagName('ul')[0].childNodes
    expect(listItems.length).toBe(6)
  })
})
