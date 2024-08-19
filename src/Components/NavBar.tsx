import { useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useLoginStore from "../LoginStore";

function NavBar() {
  const { setIsLogin } = useLoginStore();
  const navigate = useNavigate();
  
  const handleLogout = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsLogin(false);
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  useEffect(() => {
    const handleStorageChange = () => {
      if (!localStorage.getItem('authToken')) {
        setIsLogin(false);
        navigate('/login');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [navigate, setIsLogin]);

  return (
    <Navigation>
      <Container fluid>
        <Row className="pt-3 pb-2">
          <Col xs={5} md={3} lg={2}>
            <Image src="/vite.svg" fluid />
          </Col>
          <Col className="text-center" xs={0} md={6} lg={8}>
            <h3>Full Name</h3>
          </Col>
          <Col className="text-end" xs={7} md={3} lg={2}>
            <Button onClick={handleLogout}>Logout</Button>
          </Col>
        </Row>
      </Container>
    </Navigation>
  );
}

const Navigation = styled.div`
  background-color: #000000;
  margin: 0px 0px 10px 0px;
`;

export default NavBar;
