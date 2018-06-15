import Vue from 'vue'
import Vuex from 'vuex'
import plugin from '..'

Vue.use(Vuex)

// Mock redux-devtools-extension API
const init = jest.fn()
const send = jest.fn()
const subscribe = jest.fn(() => jest.fn())
window.devToolsExtension = {
  connect: jest.fn(() => ({
    init,
    send,
    subscribe,
  })),
}

test('works without crashing', () => {
  const store = new Vuex.Store({
    state: {
      count: 1,
    },
    mutations: {
      increment(state) {
        // mutate state
        state.count++
      },
    },
    actions: {
      increment(context, payload) {
        context.commit('increment', payload)
      },
    },
  })
  plugin(store)
  expect(store.state).toMatchSnapshot()
  expect(subscribe.mock.calls).toMatchSnapshot()

  store.dispatch('increment', { a: 1 })
  expect(init.mock.calls).toMatchSnapshot()
  expect(send.mock.calls).toMatchSnapshot()
})
