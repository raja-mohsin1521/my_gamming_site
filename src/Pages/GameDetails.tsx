import {
  Button,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from '@chakra-ui/react';
import useLoginStore from '../LoginStore';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ExpandableText from '../Components/ExpandableText';
import GameAttributes from '../Components/GameAttributes';
import GameScreenshots from '../Components/GameScreenshots';
import GameTrailer from '../Components/GameTrailer';
import useGames from '../Interfaces/Games';
;
import { Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import NavBar from '../Components/NavBar';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGames(slug!);
  const { isLogin } = useLoginStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, [isLogin, navigate]);

  if (isLoading) return <Spinner />;
  if (!isLogin) return null; 

  if (error || !game) throw error;

  return (
    <>
      
      <Row>
        <NavBar/>
       </Row>
       <Button className='my-3'>
        <Link to={'/games'}>{`<-Back`}</Link>
      </Button>
      <Container fluid>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
          <GridItem>
            <Heading>{game.name}</Heading>
            <ExpandableText>{game.description_raw}</ExpandableText>
            <GameAttributes game={game} />
          </GridItem>
          <GridItem>
            <GameTrailer gameId={game.id} />
            <GameScreenshots gameId={game.id} />
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
};



export default GameDetailPage;
