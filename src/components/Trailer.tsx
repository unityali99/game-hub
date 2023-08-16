import Trailer from "../models/Trailer";
import { Box } from "@chakra-ui/react";

interface Prop {
  trailer: Trailer;
}

function Trailer({ trailer }: Prop) {
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <video poster={trailer.preview} src={trailer.data[480]} controls />
    </Box>
  );
}

export default Trailer;
