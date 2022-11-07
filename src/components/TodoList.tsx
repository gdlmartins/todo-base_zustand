import * as React from "react";
import { Button, Input, Flex, Checkbox, Heading } from "@chakra-ui/react";
import  useStore, { Todo } from "../store"
import { Console } from "console";

function TodoListItems() {
  const store = useStore();
  return (
    <>
      {store.todos.map((i:Todo) => (
        <Flex pt={2} key={i.id}>
          <Checkbox 
          checked={i.done}
          onClick={()=>store.toggle(i.id)}
          />
          <Input mx={2} value={i.text} />
          <Button
          onClick={()=>store.remove(i.id)}
          >Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <>
      <Heading>Todo List</Heading>
      <TodoListItems />
    </>
  );
}

export default TodoList;
