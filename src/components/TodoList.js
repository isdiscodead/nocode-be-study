import React from 'react'

import { Flex, CardBody, Spinner } from "@chakra-ui/react";

import TodoItem from "./TodoItem";
import TodoForm from './TodoForm';

import useTodo from "../hooks/useTodo";


function TodoList() {
    // 투두 아이템 목록
	const [isLoading, isError, todoList, createTodo, updateTodo, deleteTodo] = useTodo();
	
	
	// 로딩 중 및 에러 발생 시 처리 
	if ( isLoading || todoList === null ) {
		return ( <CardBody display="flex" flexDir="column" overflowY="auto" p={0}>
            <Flex flexDir="column" flex={1} px={8} pb={6} overflowY="scroll" justifyContent="center" alignItems="center">
                <Spinner color="blue.500" size="xl" thickness="4px" emptyColor="gray.200" speed="0.65s" />
            </Flex>
        </CardBody>
		);
	}
	
	if ( isError ) {
		return ( <CardBody display="flex" flexDir="column" overflowY="auto" p={0}>
            <Flex flexDir="column" flex={1} px={8} py={6} overflowY="scroll">
                Error!
            </Flex>
        </CardBody>
		);
	}
	
	if ( todoList.length === 0 ) {
		return ( <CardBody display="flex" flexDir="column" overflowY="auto" p={0}>
            <Flex flexDir="column" flex={1} px={8} pb={6} overflowY="scroll" justifyContent="center" alignItems="center">
                할 일이 없습니다. 
            </Flex>
			<TodoForm createTodo={createTodo} />
        </CardBody>
		);
	}
	
	/*
    const [todoItemList, setTodoItemList] = useState([]);
	// 임시 데이터 넣어두기
    useEffect(() => {
        const sampleItemList = [
            { id: 1, text: "sample todo 1", isDefaultChecked: true},
            { id: 2, text: "sample todo 2", isDefaultChecked: false},      
            { id: 3, text: "sample todo 3", isDefaultChecked: false},      
            { id: 4, text: "sample todo 4", isDefaultChecked: false},      
            { id: 5, text: "sample todo 5", isDefaultChecked: false},      
            { id: 6, text: "sample todo 6", isDefaultChecked: false},      
        ];
        setTodoItemList(sampleItemList);
    }, []);
	*/
	

    return (
        <CardBody display="flex" flexDir="column" overflowY="auto" p={0}>
            <Flex flexDir="column" flex={1} py={6} overflowY="scroll">
                { todoList.map((item) => (
                    <TodoItem 
						key={item.id} 
						id={item.id}
                    	text={item.fields.text}
                    	isDefaultChecked={item.fields.isDone}
						updateTodo={updateTodo}
						deleteTodo={deleteTodo}
                    />
                ))}    
            </Flex>
			<TodoForm createTodo={createTodo} />
        </CardBody>
    )
}

export default TodoList;