import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";

import useStore from "../store";

function TodoAdd() {
  const store = useStore();
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">

      <Input 
      value={store.newTodo}
      onChange={(e)=> store.setNewTodo(e.target.value)}
      placeholder="New todo" />
      <Button
      onClick={()=>store.addTodo()}
      >Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
