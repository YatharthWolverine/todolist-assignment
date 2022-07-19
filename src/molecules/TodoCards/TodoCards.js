import React from "react";
import { Flex, Box, Text } from "atoms";

export const TodoCards = ({
  title,
  id,
  todo,
  setTodo,
  status,
  tags,
  setTags,
}) => {
  const handleClick = (id) => {
    let x = todo.find((ele) => ele.id === id);
    let y = todo.filter((ele) => ele.id !== id);
    x.status = "complete";
    setTodo([...y, x]);
  };

  const handleRedo = (id) => {
    let a = todo.find((ele) => ele.id === id);
    let b = todo.filter((ele) => ele.id !== id);
    a.status = "incomplete";
    setTodo([a, ...b]);
  };
  const handleRemove = (id) => {
    let k = todo.filter((ele) => ele.id !== id);
    setTodo(k);
    let tag = k.map((a) => a.tags.map((b) => b));
    setTags(tag.flat());
  };

  return (
    <>
      <Flex
        borderRadius="0.4rem"
        bg={status === "complete" ? "green" : "#403BCB"}
        p="0.5rem 0.8rem"
        m="0.2rem"
      >
        <Box
          onClick={() => handleClick(id)}
          _hover={{ transform: "scale(1.1)" }}
          cursor="pointer"
        >
          <Text color="white" fontSize="1.2rem">
            {title}
          </Text>
        </Box>

        {status === "incomplete" && (
          <Text
            ml="1.4rem"
            color="white"
            fontSize="1rem"
            _hover={{ transform: "scale(1.1)" }}
            cursor="pointer"
            onClick={() => handleRemove(id)}
          >
            ✘
          </Text>
        )}
        {status === "complete" && (
          <Text
            ml="1.4rem"
            color="white"
            fontSize="1rem"
            _hover={{ transform: "scale(1.1)" }}
            cursor="pointer"
            onClick={() => handleRedo(id)}
          >
            ✔
          </Text>
        )}
      </Flex>
    </>
  );
};
