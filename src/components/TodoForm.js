import React, { useState } from 'react'

import { FormControl, Input, Button } from "@chakra-ui/react";


function TodoForm({ todoItemList, setTodoItemList }) {

  const [todoInputText, setTodoInputText] = useState("");

  const handleTodoInputTextChange = (e) => {
    setTodoInputText(e.target.value);
  }

  const addTodoItem = () => {
    if ( todoInputText === "" ) {
      return;
    };

    setTodoItemList([
      ...todoItemList,
      {
        id: new Date().getTime(),
        text: todoInputText,
        isDefaultChecked: false,
      },
    ]);

    // 추가 시 입력창 비워주기
    setTodoInputText("");
  };

  
  return (
    <FormControl w="full" p={4} display="flex">
        <Input placeholder="할 일을 추가해보세요." mr={2} 
          value={todoInputText}
          onChange={handleTodoInputTextChange}
        />
        <Button colorScheme="blue" mr={2} onClick={addTodoItem}>
          추가
        </Button>
    </FormControl>
  );
}

export default TodoForm;