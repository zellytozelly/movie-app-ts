import { atom } from 'hooks/state'
import { ISearch } from 'types/movie.d'

export const searchDataState = atom<ISearch[]>({
  key: '#searchDataState',
  default: [],
})

export const modalClickState = atom<Boolean>({
  key: '#modalClickState',
  default: false,
})

export const favoriteDataState = atom<ISearch[]>({
  key: '#favoriteDataState',
  default: [],
})

export const oneFavoriteState = atom<ISearch>({
  key: '#oneFavoriteState',
  default: {
    Title: '',
    Year: '',
    imdbID: '',
    Type: '',
    Poster: '',
  },
})
