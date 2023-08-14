import { Alert, Box, Button, Heading, Text } from "@chakra-ui/react";
import NavBar from "../sections/NavBar";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import { AxiosError } from "axios";

function ErrorPage() {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);
  const errorCode = (error as AxiosError)?.response?.status || "";
  const navigate = useNavigate();

  return (
    <Box>
      <NavBar />
      <Alert
        status="warning"
        w={{ base: "90%", sm: "80%", md: "60%", lg: "50%" }}
        mx={"auto"}
        my={10}
        justifyContent={"center"}
        flexDir={"column"}
        borderRadius={20}
      >
        <Heading fontSize={{ base: 100, sm: 150, md: 200 }}>{"🤔"}</Heading>
        <Text color={"red.400"} fontSize={{ base: 25, sm: 35, md: 50 }} mt={5}>
          {isRouteError
            ? "404: Not Found"
            : `Unexpected Error${errorCode && `: ${errorCode}`}`}
        </Text>
        <Button
          onClick={() => navigate(-1)}
          colorScheme="messenger"
          fontSize={{ base: 15, md: 20 }}
          p={{ base: "4", sm: "7" }}
          my={3}
        >
          Go back
        </Button>
      </Alert>
    </Box>
  );
}

export default ErrorPage;
