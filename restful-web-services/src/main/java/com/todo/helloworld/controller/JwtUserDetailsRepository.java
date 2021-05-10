package com.todo.helloworld.controller;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JwtUserDetailsRepository extends JpaRepository<Login, Long>{

	Login findByUserName(String username);
	Login findByEmail(String email);
}
