import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Button } from "atoms";
import { TodoCards } from "molecules/TodoCards";
import Cookies from "js-cookie";

export const TodoApp = () => {
  const [todo, setTodo] = useState(
    JSON.parse(Cookies.get("todo")) ? JSON.parse(Cookies.get("todo")) : []
  );
  const [field, setField] = useState("");
  const [tags, setTags] = useState(
    JSON.parse(Cookies.get("tags")) ? JSON.parse(Cookies.get("tags")) : []
  );
  const [filter, setFilter] = useState([]);

  const handleTodo = (e) => {
    let entry = e.target.value.split("#");
    setTodo([
      {
        id: todo.length + 1,
        task: entry[0],
        tags: entry.slice(1).map((a) => a.replace(/\s/g, "")),
        status: "incomplete",
      },
      ...todo,
    ]);
    entry.slice(1).map((a) => tags.push(a.replace(/\s/g, "")));
    setField("");
  };

  useEffect(() => {
    Cookies.set("todo", JSON.stringify(todo), { expires: 365 });
    Cookies.set("tags", JSON.stringify(tags), { expires: 365 });
  }, [todo, tags]);

  let filteredData = [];
  filteredData = todo.filter((a) =>
    a.tags.map((k) => filter.some((x) => k === x)).some((d) => d === true)
  );

  return (
    <>
      <Flex
        justifyItems="center"
        alignItems="center"
        height="100vh"
        bg="#050E29"
        px={{ xs: "1rem" }}
      >
        <Box
          bg="white"
          borderRadius="0px 24px 24px 24px"
          width={{ xs: "20rem", md: "32rem" }}
          height="25rem"
          overflowY="auto"
          className="hide-scrollbar"
          p="2rem"
          mx="auto"
          boxShadow="10px 10px 25px rgba(25, 118, 210, 0.5)"
        >
          <Text
            fontSize="2rem"
            textAlign="center"
            color="#050E29"
            fontWeight="600"
          >
            📋 TodoApp
          </Text>
          <Flex justifyContent="center" my="1rem">
            <input
              type="text"
              name="todo"
              value={field}
              onChange={(e) => setField(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleTodo(e)}
            />
            <Button
              variant="primary"
              ml="1.6rem"
              width="fit-content"
              px="2rem"
              onClick={() => {
                setField("");
                setTodo([]);
                setTags([]);
                setFilter([]);
              }}
            >
              reset
            </Button>
          </Flex>
          <Flex flexWrap="wrap" pb="2rem">
            {filteredData?.length === 0
              ? todo?.map((items, index) => {
                  return (
                    <TodoCards
                      title={items?.task}
                      key={index}
                      id={items?.id}
                      todo={todo}
                      setTodo={setTodo}
                      status={items?.status}
                      tags={tags}
                      setTags={setTags}
                    />
                  );
                })
              : filteredData?.map((items, index) => {
                  return (
                    <TodoCards
                      title={items?.task}
                      key={index}
                      id={items?.id}
                      todo={todo}
                      setTodo={setTodo}
                      status={items?.status}
                      tags={tags}
                      setTags={setTags}
                    />
                  );
                })}
          </Flex>
          {todo?.length === 0 && (
            <Text fontSize="1.4rem" fontWeight="500" textAlign="center">
              Bucket list looks Empty 📌
            </Text>
          )}
          <Box py="1.6rem">
            {tags?.length !== 0 && (
              <Text fontSize="1.4rem" fontWeight="500" textAlign="center">
                Tags:
              </Text>
            )}
            <Flex flexWrap="wrap" py="1.6rem">
              {[...new Set(tags)].map((items, index) => {
                return (
                  <Box
                    bg={filter.includes(items) ? "#403bcb" : "#DCE5FF"}
                    cursor="pointer"
                    borderRadius="0.5rem"
                    p="0.2rem"
                    mr="0.8rem"
                    mb="0.8rem"
                    key={items.id}
                    onClick={() => {
                      if (filter.includes(items)) {
                        let y = filter.filter((a) => a !== items);
                        setFilter(y);
                      } else {
                        setFilter([...filter, items]);
                      }
                    }}
                  >
                    <Text
                      fontSize="1.2rem"
                      fontWeight="400"
                      mx="0.8rem"
                      color={filter.includes(items) ? "white" : "#050E29"}
                    >
                      #{items}
                    </Text>
                  </Box>
                );
              })}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
};
