import { useState, useEffect } from "react";

import { useToast } from "@chakra-ui/react";

import { base } from "./api";

export default function useTodo() {
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false); 
	const [todoList, setTodoList] = useState(null);
	
	const toast = useToast();
	
	
	const getTodoList = async () => {
		// 로딩 중임을 표시
		setIsError(false);
		setIsLoading(true);
		
		try {
			const response = await base().get("/Notto");
			setTodoList(response.data.records);
			
		} catch ( error ) {
			setIsError(true);
		}
		
		setIsLoading(false);
	};
	
	
	// text 값을 받아서 todo 추가 
	const createTodo = async (text) => {
		try {
			const response = await base().post("/Notto", {
				fields: {
					text: text,
					isDone: false,
				},
			});
			
			setTodoList([...todoList, response.data]); // 기존 배열 + 새 데이터 추가 결과 
			
			toast({
				title: "할 일이 추가되었습니다.",
				status: "success",
				duration: 2000,
				position: "bottom",
			});
			
		} catch ( error ) {
			// chakra의 toast 컴포넌트 사용하여 에러 확인
			toast({
				title: "에러가 발생했습니다. 잠시 후 시도해주세요. ",
				status: "error",
				duration: 2000,
				position: "bottom",
			});
		}
	}
	
	
	const updateTodo = async (id, isDone) => {
		try {
			const response = await base().aptch(`/Notto/${id}`, {
				fields: {
					isDone: isDone,
				},
			});
			
			setTodoList(
				todoList.map((item) => {
					if ( item.id === id ) {
						return response.data;
					}
					return item;
				})
			);
			
		} catch ( error ) {
			toast({
				title: "에러가 발생했습니다. 잠시 후 시도해주세요. ",
				status: "error",
				duration: 2000,
				position: "bottom",
			});
		};
	};
	
	
	const deleteTodo = async (id) => {
		try {
		  await base().delete(`/Todo/${id}`);
		  setTodoList(
			todoList.filter((item) => {
			  return item.id !== id;
			})
		  );
			
		  toast({
			title: "할 일이 삭제되었습니다.",
			status: "success",
			duration: 2000,
			position: "bottom",
		  });
			
		} catch (error) {
		  toast({
			title: "에러가 발생했습니다.",
			status: "error",
			duration: 2000,
			position: "bottom",
		  });
		}
	  };
	
	
	useEffect( () => {
		getTodoList();
	}, []);
	
	return [isLoading, isError, todoList, createTodo, updateTodo, deleteTodo];
}