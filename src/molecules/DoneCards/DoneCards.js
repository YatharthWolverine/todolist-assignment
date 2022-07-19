import React from "react";
import { Box, Text } from "atoms";

export const DoneCards = ({ title, id }) => {
  return (
    <>
      <Box
        borderRadius="0.4rem"
        bg="green"
        p="0.5rem 0.8rem"
        m="0.2rem"
        cursor="pointer"
      >
        <Text color="white" fontSize="1.2rem">
          ✔ {title}
        </Text>
      </Box>
    </>
  );
};
