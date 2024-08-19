import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import useGameQueryStore from "../store";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";


const StyledInput = styled.input`
  color: white;
  border: 1px solid #ced4da;
  padding: 0.415rem 0.75rem;
  border-radius: 0.25rem;
  width: 65%;

  ::placeholder {
    color: #ced4da;
    opacity: 1; /* Ensure the color is fully opaque */
  }
`;

function Searchgame() {
  const [text, setText] = useState('');
  const { setSearchText } = useGameQueryStore();

  const search = () => {
    setSearchText(text);
  
  };
  const clear = () => {
    setSearchText(null);
    setText('');
  };
  return (
    <Row>
      <Col className="text-end mt-3">
        <StyledInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search games..."
        />
        <Button  onClick={search}><CiSearch/></Button>
        <Button className="mx-2" onClick={clear}>Clear</Button>
      </Col>
    </Row>
  );
}

export default Searchgame;
