import { atom } from 'hooks/state'
import { ISearch } from 'types/movie.d'

export const searchDataState = atom<ISearch[]>({
  key: '#searchDataState',
  default: [],
})
  