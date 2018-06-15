import remotedev from 'remotedev'

export default function remotedevPlugin(store, options) {
  const devTools = remotedev.connectViaExtension(options)
  devTools.init(store.state)

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
        case 'RESET':
          return devTools.init(store.state)
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
          store.replaceState(remotedev.extractState(message))
          return devTools.send(null, nextLiftedState)
      }
    }),
  }
}
