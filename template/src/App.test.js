import { shallow } from 'vue-test-utils'
import App from './App'

describe('App', () => {
  it('renders', () => { 
    const wrapper = shallow(App)

    expect(wrapper.text().trim()).toBe('Testing')
  })
})
