import { Platform } from "./Platform";
import { FetchResponse } from "../Services/api-client";
import { Genre } from "./Genres";
import { Sort } from "./Sort";
import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";

interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  metacritic: number;
  slug:string;
  platforms: { platform: Platform }[];
}

const apiClient = new APIClient<Game>('/games');

const useGame = (
  selectedPlatform: Platform | null,
  selectedGenre: Genre | null,
  selectedSort: Sort | null,
  selectedSearch:string| null
) => 
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', { selectedPlatform, selectedGenre, selectedSort ,selectedSearch }],
    queryFn:  ({ pageParam = 1 }) => {
      const response =  apiClient.getAll({
        params: {
          genres: selectedGenre?.id,
          parent_platforms: selectedPlatform?.id,
          ordering: selectedSort?.slug,
          search:selectedSearch,
          page: pageParam,
        }
      });
      return response;
    },
    getNextPageParam: (lastPage) => {
    
      const nextPageMatch = lastPage.next?.match(/page=(\d+)/);
      return nextPageMatch ? parseInt(nextPageMatch[1], 10) : undefined;
    },
    initialPageParam: 1, 
    staleTime: 24 * 60 * 60 * 1000, 
  });

export default useGame;
