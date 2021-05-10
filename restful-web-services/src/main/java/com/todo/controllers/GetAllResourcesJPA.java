package com.todo.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.todo.helloworld.controller.JwtUserDetailsRepository;
import com.todo.helloworld.controller.Login;
import com.todo.helloworld.controller.ToDo;
import com.todo.helloworld.controller.TodoHardcodedService;
import com.todo.helloworld.controller.TodoJpaRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class GetAllResourcesJPA {

	//spring security password - e006dc25-2fe8-43cc-91d1-c02aba7d90f5
	
	@Autowired
	private TodoHardcodedService todoService;
	
	@Autowired
	private JwtUserDetailsRepository jwtUserDetailsRepository;
	
	@Autowired
	private TodoJpaRepository todoJpaRepository;
	
	@PostMapping(path="/registeruser")//ResponseEntity<ToDo>
	public ResponseEntity createTodoUser(@RequestBody Login login) {

		//todo.setUserName(username);
		//Login createdTodo = todoService.save(todo);

//		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(jwtUserDetailsRepository.save(login).getId()).toUri();
//		return ResponseEntity.created(uri).build();
		System.out.println("hit from frontend = "+login.getEmail());
		System.out.println("hit from frontend = "+login.getPassword());
		System.out.println("hit from frontend = "+login.getUserName());
		
		if(jwtUserDetailsRepository.findByEmail(login.getEmail())!=null) {
			System.out.println("mail already exists");
			return new ResponseEntity(login.getUserName(), HttpStatus.NOT_ACCEPTABLE);
		}
		else {
			System.out.println("mail does not exists");
			login.setPassword(new BCryptPasswordEncoder().encode(login.getPassword()));
			jwtUserDetailsRepository.save(login);
			return new ResponseEntity(login.getUserName(), HttpStatus.OK);
		}
		
		
		//return "connected";
	}
	
	
	

	//fetch all the todo's
	@GetMapping("/jpa/users/{username}/todos")
	public List<ToDo> getAllToDos(@PathVariable String username) {
		
		return todoJpaRepository.findByUserName(username);
		//return todoService.getAll();
	}
	
	//get todos by username
	@GetMapping("/jpa/users/{username}/todos/{id}")
	public ToDo getToDo(@PathVariable String username, @PathVariable long id) {
		return todoJpaRepository.findById(id).get();
	}

	//delete 1 todo
	@DeleteMapping("/jpa/users/{username}/todos/{id}") // http://localhost:8084/users/nikhil/todos/1
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
		todoJpaRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}

	

	@PutMapping("/jpa/users/{username}/todos/{id}")
	public ResponseEntity<ToDo> updateToDo(@PathVariable String username, @PathVariable long id,
			@RequestBody ToDo todo) {

		todo.setUserName(username);
		@SuppressWarnings("unused")
		ToDo todoUpdated = todoJpaRepository.save(todo);

		return new ResponseEntity<ToDo>(todo, HttpStatus.OK);
	}

	@PostMapping("/jpa/users/{username}/todos")
	public ResponseEntity<ToDo> createTodo(@PathVariable String username,
			@RequestBody ToDo todo) {

		todo.setUserName(username);
		ToDo createdTodo = todoService.save(todo);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		return ResponseEntity.created(uri).build();
	}
}
