import React from 'react'

import { Flex, Checkbox, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons"


function TodoItem(props) {
	// check
	const handleIsDone = (e) => {
		props.updateTodo( props.id, e.target.checked ); // checkbox의 이벤트이므로 checked 프로퍼티 사용 
	};
	
	
	  // delete 기능
	  const deleteTodo = () => {
		props.deleteTodo( props.id )
	  };


  return (
    <Flex px={8} py={2} 
      _hover={{bgColor: "blue.50"}}
      justifyContent="space-between"
    >
      <Checkbox size="lg" defaultChecked={props.isDefaultChecked} onChange={handleIsDone}>
        {props.text}
      </Checkbox>
      <IconButton icon={<DeleteIcon/>} size="sm" ml={2} onClick={deleteTodo}/>
    </Flex>
  )
}

export default TodoItem