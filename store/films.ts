import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { Film } from '@/models'
import { $axios } from '~/utils/nuxt-instance'

interface Show {
  id: Film[`id`]
}

@Module({ name: 'films', stateFactory: true, namespaced: true })
export default class Films extends VuexModule {
  private films = [] as Film[]
  private film = {} as Film

  public get $all() {
    return this.films
  }

  public get $single() {
    return this.film
  }

  @Mutation
  private SET_ALL(films: Film[]) {
    this.films = films
  }

  @Mutation
  private SET_SINGLE(film: Film) {
    this.film = film
  }

  @Action
  public async index() {
    const films = await $axios.$get(
      '/person/19292/movie_credits?api_key=1f9055d2748525fa5e3b2cb6e4baaffd&language=pt-BR'
    )
    this.context.commit('SET_ALL', films.cast)
  }

  @Action
  public async show({ id }: Show) {
    const film = await $axios.$get(
      `/movie/${id}?api_key=1f9055d2748525fa5e3b2cb6e4baaffd&language=pt-BR`
    )
    this.context.commit('SET_SINGLE', film)
  }
}
