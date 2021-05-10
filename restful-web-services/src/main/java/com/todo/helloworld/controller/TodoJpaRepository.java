package com.todo.helloworld.controller;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoJpaRepository extends JpaRepository<ToDo, Long>{

	List<ToDo> findByUserName(String username);
	
}
