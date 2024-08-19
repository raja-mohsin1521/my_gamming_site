import { Col, Container, Row } from "react-bootstrap";
import "../App.css";
import Gamegrid from "../Components/Game-grid";
import Genregrid from "../Components/Genre-grid";
import "bootstrap/dist/css/bootstrap.min.css";
import PlatformSelector from "../Components/PlatformSelector";

import SortSelector from "../Components/SortSelector";
import DynamicHeading from "../Components/DynamicHeading";
import Searchgame from "../Components/SearchGame";
import useLoginStore from "../LoginStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../Components/NavBar";


function Home() {
 
  const { isLogin } = useLoginStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate('/login');
    }
  }, [isLogin, navigate]);

  if (!isLogin) return null;
  return (
    <>


    
      <Container className="background" fluid>
       <Row>
        <NavBar/>
       </Row>

        <Row>
          <Col xs={12} md={4} lg={3}>
            <Genregrid
         
            />
          </Col>
          <Col xs={12} md={8} lg={9}>
            <Row className="sticky-top pb-4 selectors">
              <Col xs={12} md={2}>
                <PlatformSelector
                 
                />
              </Col>
              <Col xs={12} md={8}>
                <Searchgame  />
              </Col>
              <Col xs={12} md={2} className="text-end">
                <SortSelector
                 
                />
              </Col>
            </Row>
            <hr className="mb-4 bg-light text-light " />
            <Row>
              <Col>
                <DynamicHeading
                
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Gamegrid
             
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home