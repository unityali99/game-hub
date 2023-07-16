import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={theme}>
    <ColorModeScript
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      initialColorMode={theme.config.initialColorMode as "light" | "dark"}
    />
    <App />
  </ChakraProvider>
);
