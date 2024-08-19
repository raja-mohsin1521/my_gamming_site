import { create } from 'zustand';
import { Genre } from './Interfaces/Genres';
import { Platform } from './Interfaces/Platform';
import { Sort } from './Interfaces/Sort';

export interface GameQuery {
  genre?: Genre | null;
  platform?: Platform | null;
  sort?: Sort | null;
  searchText?: string;
  searchWord?:string;
}


interface LoginStore {
  isLogin: boolean;
  setIsLogin: (login: boolean) => void;
}


interface GameQueryStore {
  gameQuery: GameQuery;
  setGenre: (genre: Genre | null) => void;
  setPlatform: (platform: Platform | null) => void;
  setSort: (sort: Sort | null) => void;
  setSearchText: (searchText: string) => void;

}


export const useLoginStore = create<LoginStore>((set) => ({
  isLogin: false,
  setIsLogin: (login) =>
    set(() => ({
      isLogin: login,
    })),
}));

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {
    genre: null,
    platform: null,
    sort: null,
    searchText: '',
  },
  setGenre: (genre) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, genre },
    })),
  setPlatform: (platform) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, platform },
    })),
  setSort: (sort) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, sort },
    })),
  setSearchText: (searchText) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, searchText },
    })),
}));

export default useGameQueryStore;
