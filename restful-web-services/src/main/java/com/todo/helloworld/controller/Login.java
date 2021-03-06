package com.todo.helloworld.controller;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


//@Component 
@Entity
public class Login {

	@Id
	@GeneratedValue
	private Long id;
	private String userName;
	private String password;
	private String email;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	@Override
	public String toString() {
		return "Login [id=" + id + ", userName=" + userName + ", password=" + password + ", email=" + email + "]";
	}
	
	
}
