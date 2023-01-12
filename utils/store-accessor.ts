import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Films from '~/store/films'

// eslint-disable-next-line import/no-mutable-exports
let films: Films

function initializeStores(store: Store<any>): void {
  films = getModule(Films, store)
}

export { initializeStores, films }