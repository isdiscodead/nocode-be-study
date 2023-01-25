import React from 'react'

import { Flex, Checkbox, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons"


function TodoItem(props) {
  // delete 기능
  const deleteTodo = () => {
    props.setTodoItemList(
      // 현재 todo 제외한 나머지 todo만 필터링 
      props.todoItemList.filter( (item) => item.id !== props.id )
    );
  };


  return (
    <Flex px={8} py={2} 
      _hover={{bgColor: "blue.50"}}
      justifyContent="space-between"
    >
      <Checkbox size="lg" defaultChecked={props.isDefaultChecked}>
        {props.text}
      </Checkbox>
      <IconButton icon={<DeleteIcon/>} size="sm" ml={2} onClick={deleteTodo}/>
    </Flex>
  )
}

export default TodoItem