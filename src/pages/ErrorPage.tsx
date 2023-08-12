import { Alert, Box, Button, Heading, Text } from "@chakra-ui/react";
import NavBar from "../sections/NavBar";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);
  const navigate = useNavigate();

  return (
    <Box>
      <NavBar />
      <Alert
        status="warning"
        w={"50%"}
        mx={"auto"}
        my={10}
        justifyContent={"center"}
        flexDir={"column"}
        borderRadius={20}
      >
        <Heading fontSize={200}>{"🤔"}</Heading>
        <Text color={"red.400"} fontSize={50} mt={5}>
          {isRouteError ? "404: Not Found" : "Unexpected Error"}
        </Text>
        <Button
          onClick={() => navigate(-1)}
          colorScheme="messenger"
          fontSize={20}
          p={"7"}
          my={3}
        >
          Go back
        </Button>
      </Alert>
    </Box>
  );
}

export default ErrorPage;
