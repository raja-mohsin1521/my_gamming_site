import { Row, Col, Image } from "react-bootstrap";
import useGenre, { Genre } from "../Interfaces/Genres";
import styled from "styled-components";
import { PulseLoader } from "react-spinners";
import useGameQueryStore from "../store";

function Genregrid() {
  const { gameQuery, setGenre } = useGameQueryStore();
  const { data, error, isLoading } = useGenre();

  const handleSelectGenre = (genre: Genre) => {
    if (setGenre) {
      setGenre(genre);
    } else {
      console.error("setGenre is not a function");
    }
  };

  console.log(data);

  return (
    <GenreSideBar>
      {isLoading ? (
        <PulseLoader />
      ) : (
        <>
          <Row className="sticky-top heading">
            <h1 className="mb-4">Genre</h1>
          </Row>
          <Row className="genreContainer">
            {error ? (
              <p>Error: {error.message}</p>
            ) : (
              <Col>
                {data?.results.map((genre) => (
                  <Row className="my-1" key={genre.id}>
                    <Col xs={3}>
                      <Image
                        src={genre.image_background}
                        className="img"
                        rounded
                        fluid
                      />
                    </Col>
                    <Col xs={9}>
                      <button
                        className={`${
                          gameQuery.genre?.id === genre.id ? "active" : ""
                        } mt-1 genre`}
                        onClick={() => handleSelectGenre(genre)}
                      >
                        {genre.name}
                      </button>
                    </Col>
                  </Row>
                ))}
              </Col>
            )}
          </Row>
        </>
      )}
    </GenreSideBar>
  );
}

const GenreSideBar = styled.div`
  position: sticky;
  top: 0;
  color: white;
  border-right: 1px solid grey;
  height: 100vh;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 1px;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  .genre:hover {
    text-decoration: underline;
    font-weight: 500;
  }

  .active {
    font-weight: 500;
    color: #2e4e3e;
  }

  .img {
    aspect-ratio: 3 / 2;
  }

  .genreContainer {
    padding: 1rem;
  }
    .heading{
    background-color:#1A202C}
`;

export default Genregrid;
