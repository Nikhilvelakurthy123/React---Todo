package com.todo.helloworld.controller;


public class HelloWorldBeanController {

	private String message;
	
	public HelloWorldBeanController(String string) {
		// TODO Auto-generated constructor stub
		this.message = string;
	}

	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}
	
	@Override
	public String toString() {
		return "HelloWorldBeanController [message=" + message + "]";
	}
}
