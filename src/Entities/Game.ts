import { Genre } from '../Interfaces/Genres';
import { Platform } from '../Interfaces/Platform';

 interface Publisher {
  id: number;
  name: string;
}
export default interface ExactGame {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
