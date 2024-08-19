import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../Services/api-client"; 
import APIClient from "../Services/api-client";

export interface Genre {
  id: number;
  name: string;
  games_count: number;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

const useGenre = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genre'],
    queryFn: () => apiClient.getAll(), // Use the getAll method
    staleTime: 7 * 24 * 60 * 60 * 1000, // 1 week
  });

export default useGenre;
