package com.todo.helloworld.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {

	private static List<ToDo> todos = new ArrayList<ToDo>();
	private static long idCounter = 0; 
	
	static {
		todos.add(new ToDo(++idCounter,"SPRING","please learn",new Date(),false));
		todos.add(new ToDo(++idCounter,"REACT","please learn",new Date(),false));
		todos.add(new ToDo(++idCounter,"WEB DEV","please learn",new Date(),false));
//		todos.add()
	}
	  
	public List<ToDo> getAll()
	{
		return todos;
	}
	
	public ToDo save(ToDo todo) {
		if(todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++idCounter); 
			todos.add(todo);
		}
		else {
			deleteById(todo.getId());
			todos.add(todo);
		}
		return todo;
	}
	
	public ToDo deleteById(long id) {
		ToDo todo = findById(id);
		if(todo == null)
			return null;
		
		if(todos.remove(todo)) {
			return todo;
		}
		return null;
	}
	
	public ToDo findById(long id) {
		for(ToDo todo:todos) {
			if(todo.getId() == id)
				return todo;
		}
		return null;
	}
}
