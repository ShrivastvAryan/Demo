"use client";

import { extendTheme } from "@chakra-ui/theme-tools";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";


const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export function Provider({ children }) {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
}
