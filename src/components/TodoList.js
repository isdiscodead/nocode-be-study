import React, { useState,  useEffect } from 'react'

import { Flex, CardBody } from "@chakra-ui/react";

import TodoItem from "./TodoItem";
import TodoForm from './TodoForm';


function TodoList() {
    // 투두 아이템 목록
    const [todoItemList, setTodoItemList] = useState([]);

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


    return (
        <CardBody display="flex" flexDir="column" overflowY="auto" p={0}>
            <Flex flexDir="column" flex={1} py={6} overflowY="scroll">
                { todoItemList.map((item) => (
                    <TodoItem key={item.id} id={item.id}
                    text={item.text}
                    isDefaultChecked={item.isDefaultChecked}
                    todoItemList={todoItemList} setTodoItemList={setTodoItemList} 
                    />
                ))}    
            </Flex>
            <TodoForm todoItemList={todoItemList} setTodoItemList={setTodoItemList} />
        </CardBody>
    )
}

export default TodoList;