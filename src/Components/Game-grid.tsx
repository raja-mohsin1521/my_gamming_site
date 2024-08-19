import styled from "styled-components";
import useGame from "../Interfaces/Game";
import { Card, Col, Container, Row } from "react-bootstrap";
import Loader from "./Loader";
import noImage from "../../public/No_Image_Available.jpg";
import InfiniteScroll from "react-infinite-scroll-component";
import { SyncLoader } from "react-spinners";
import useGameQueryStore from "../store";
import { Link } from "react-router-dom";

function GameGrid() {
  const { gameQuery } = useGameQueryStore();
  const platform = gameQuery.platform || null;
  const genre = gameQuery.genre || null;
  const sort = gameQuery.sort || null;
  const search = gameQuery.searchText || null
  const {
    data,
    error,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useGame(platform, genre, sort,search);

  
  const allGames = data?.pages.flatMap(page => page.results) || [];

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <Gamming>
      {isLoading ? (
        <Row>
          {skeletons.map((skeleton) => (
            <Col sm={12} key={skeleton} md={6} lg={4} className="mb-3">
              <Loader />
            </Col>
          ))}
        </Row>
      ) : (
        <InfiniteScroll
          dataLength={fetchedGamesCount}
          hasMore={!!hasNextPage}
          next={() => fetchNextPage()}
          loader={<SyncLoader color="#ffffff" />}
        >
          <Container>
            <Row>
              <Col>
                {error ? (
                  <p>Error: {error.message}</p>
                ) : (
                  <Row>
                    {allGames.map((game) => (
                      <Col sm={12} md={6} lg={4} className="mb-3" key={game.id}>
                        <Card className="card">
                          <Card.Img
                            variant="top"
                            className="img"
                            src={
                              game.background_image
                                ? game.background_image
                                : noImage
                            }
                          />
                          <Card.Body className="card-body">
                            <Card.Title>{game.name}</Card.Title>
                            <Card.Text className="mt-4">
                              <Row>
                                <Col xs={8}>
                                  <p className="mt-1">{game.released}</p>
                                </Col>
                                <Col className="text-end" xs={4}>
                                  <p
                                    className={`${
                                      game.metacritic <= 60
                                        ? "bg-danger"
                                        : game.metacritic <= 80
                                        ? "bg-warning"
                                        : "bg-success"
                                    } text-center score`}
                                  >
                                    {game.metacritic || "N/A"}
                                  </p>
                                </Col>
                              </Row>
                              <Row>
                                <Col className="text-center">
                                  <Link className="button" to={'/games/' + game.slug}>
                                    More Details
                                  </Link>
                                </Col>
                              </Row>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                )}
              </Col>
            </Row>
          </Container>
        </InfiniteScroll>
      )}
    </Gamming>
  );
}

const Gamming = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  .card {
    border-radius: 10px;
    border: 1px solid grey;
    overflow: hidden;
  }
  .img {
    object-fit: cover;
  }
  .score {
    padding: 5px 0px;
    border-radius: 5px;
    color: white;
    font-weight: 500;
  }

  .card-body {
    background-color: #2e4e3e;
    color: white;
    border-radius: 0px 0px 10px 10px;
  }

 .button {
    background: linear-gradient(135deg, #4a6d5b, #0e4e3e);
    color: white;
    padding: 7px 10px;
    border-radius: 8px;
    border: none;
    background-size: 200% 200%;
    background-position: left;
    transition: all 0.3s ease;
}

.button:hover {
    background-position: right;
    text-decoration: underline;
}

`;

export default GameGrid;
