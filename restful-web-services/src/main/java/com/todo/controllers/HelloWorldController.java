package com.todo.controllers;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.todo.email.SendEmail;
import com.todo.helloworld.controller.HelloWorldBeanController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HelloWorldController {

	@GetMapping(path = "/")
	public String sayHelloWorld() {
		return "Hello World";
	}

	@GetMapping(path = "/bean")
	public HelloWorldBeanController bean() {
		return new HelloWorldBeanController("Hello Maven");
	}

	@GetMapping(path = "/bean/helloWorldPathVariable/{name}")
	public HelloWorldBeanController pathParameter(@PathVariable String name) {
		// throw new RuntimeException("Error at backend");
		return new HelloWorldBeanController("Hello " + name);
	}
	
	@GetMapping(path = "/mail")
	public String sendAnEmail() {
		return new SendEmail().sendMail();
	}

}