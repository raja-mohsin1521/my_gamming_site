import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../Services/api-client";
import APIClient from "../Services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatform = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platform'],
    queryFn: () => apiClient.getAll(), // Use getAll method from APIClient
    staleTime: 7 * 24 * 60 * 60 * 1000, // 1 week
  });

export default usePlatform;
