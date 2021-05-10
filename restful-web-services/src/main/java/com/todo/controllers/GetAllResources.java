package com.todo.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.todo.helloworld.controller.ToDo;
import com.todo.helloworld.controller.TodoHardcodedService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class GetAllResources {

	//spring security password - e006dc25-2fe8-43cc-91d1-c02aba7d90f5
	
	@Autowired
	private TodoHardcodedService todoService;

	//fetch all the todo's
	@GetMapping("/users/{username}/todos")
	public List<ToDo> getAllToDos(@PathVariable String username) {
		return todoService.getAll();
	}

	//delete 1 todo
	@DeleteMapping("/users/{username}/todos/{id}") // http://localhost:8084/users/nikhil/todos/1
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
		ToDo todo = todoService.deleteById(id);
		if (todo != null)
			return ResponseEntity.noContent().build();//postman lo status with no content chupiyadaniki vadtarata

		return ResponseEntity.notFound().build();//postman lo status with not found ani chupiyadaniki vadtarata
	}

	@GetMapping("/users/{username}/todos/{id}")
	public ToDo getToDo(@PathVariable String username, @PathVariable long id) {
		return todoService.findById(id);
	}

	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<ToDo> updateToDo(@PathVariable String username, @PathVariable long id,
			@RequestBody ToDo todo) {

		@SuppressWarnings("unused")
		ToDo todoUpdated = todoService.save(todo);

		return new ResponseEntity<ToDo>(todo, HttpStatus.OK);
	}

	@PostMapping("/users/{username}/todos")
	public ResponseEntity<ToDo> updateToDo(@PathVariable String username,
			@RequestBody ToDo todo) {

		ToDo createdTodo = todoService.save(todo);

		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
}
