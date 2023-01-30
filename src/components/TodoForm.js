import React, { useState } from 'react'

import { FormControl, Input, Button } from "@chakra-ui/react";


function TodoForm({ createTodo }) {

  const [todoInputText, setTodoInputText] = useState("");

  const handleTodoInputTextChange = (e) => {
    setTodoInputText(e.target.value);
  }

  const addTodoItem = (e) => {
	  
	  e.preventDefault(); // 새로고침 방지 
	  
    if ( todoInputText === "" ) {
      return;
    };

    createTodo(todoInputText);

    // 추가 시 입력창 비워주기
    setTodoInputText("");
  };

  
  return (
    <FormControl w="full" p={4} display="flex">
		<form onSubmit={addTodoItem}>
			<Input placeholder="할 일을 추가해보세요." mr={2} 
			  value={todoInputText}
			  onChange={handleTodoInputTextChange}
			/>
			<Button colorScheme="blue" mr={2} type="submit">
			  추가
			</Button>	  
		</form>
    </FormControl>
  );
}

export default TodoForm;