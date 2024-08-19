import { useQuery } from '@tanstack/react-query';
import Trailer from '../Entities/Trailer';
import APIClient from '../Services/api-client';

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: apiClient.getAll,
    select: (data) => data.results 
  });
};

export default useTrailers;
