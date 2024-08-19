import useGenres from '../Interfaces/Genres';
import { Genre } from '../Interfaces/Genres';

const useGenre = (id?: number): Genre | undefined => {
  const { data: genres } = useGenres();
  return genres?.results.find((g) => g.id === id);
};

export default useGenre;
