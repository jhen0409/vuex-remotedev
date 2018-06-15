import remotedev from 'remotedev'
import cloneDeep from 'lodash.clonedeep'

export default function remotedevPlugin(store, options) {
  const devTools = remotedev.connectViaExtension(options)
  const initialState = cloneDeep(store.state)

  devTools.init(initialState)

  store.subscribe((mutation, state) => {
    devTools.send(
      Object.assign({}, mutation, {
        type: mutation.type || 'vuex:mutation',
      }),
      state,
    )
  })

  return {
    store,
    devTools,
    unsubscribe: devTools.subscribe(message => {
      if (message.type !== 'DISPATCH') return
      switch (message.payload.type) {
        case 'COMMIT':
          return devTools.init(store.state)
        case 'RESET':
          store.replaceState(initialState)
          return devTools.init(initialState)
        case 'TOGGLE_ACTION':
          // TODO: Implement TOGGLE_ACTION
          return
        case 'ROLLBACK':
          return devTools.init(remotedev.extractState(message))
        case 'JUMP_TO_STATE':
        case 'JUMP_TO_ACTION':
          return store.replaceState(remotedev.extractState(message))
        case 'IMPORT_STATE':
          const { nextLiftedState } = message.payload
          const { computedStates } = nextLiftedState
          store.replaceState(computedStates[computedStates.length - 1].state)
          return devTools.send(null, nextLiftedState)
      }
    }),
  }
}
