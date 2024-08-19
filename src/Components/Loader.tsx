import { Card, CardHeader, Skeleton, SkeletonText } from "@chakra-ui/react";
import { CardBody } from "react-bootstrap";

function Loader() {
  
  return (
    <>
 {     <Card>
        <Skeleton height="100px"></Skeleton>
        <CardHeader>
        
        </CardHeader>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </Card>}
    </>
  );
}

export default Loader;
