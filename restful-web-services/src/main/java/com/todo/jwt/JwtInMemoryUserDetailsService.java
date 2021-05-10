package com.todo.jwt;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.todo.helloworld.controller.JwtUserDetailsRepository;
import com.todo.helloworld.controller.Login;
import com.todo.jwt.resource.JwtAuthenticationRestController;
import com.todo.jwt.resource.JwtTokenRequest;
import com.todo.jwt.resource.JwtTokenResponse;

import net.bytebuddy.asm.Advice.This;

@Service
public class JwtInMemoryUserDetailsService implements UserDetailsService {

	static List<JwtUserDetails> inMemoryUserList = new ArrayList<>();

	@Autowired
	JwtUserDetailsRepository loginJpaRepository;

	// username and password
	// dummy=$2a$10$3zHzb.Npv1hfZbLEU5qsdOju/tk2je6W6PnNnY.c1ujWPcZh4PL6e
	static {
		// inMemoryUserList.add(new JwtUserDetails(1L, "Nikhil",
		// "$2y$12$PSGBTHFfig8f6TfIcINF7O0XTP8pMK10Im/ABUJDfSvYD2PuMZ1am",
		// "ROLE_USER_2"));//asd
		// inMemoryUserList.add(new JwtUserDetails(1L, "Nikniv",
		// "$2y$12$ZB2DMs60rc2bu3kkVO4JmuAM1PCQQfQGJGMnhN.tC1vipWHUQD1P6",
		// "ROLE_USER_2"));//niveditha
		// //inMemoryUserList = loginJpaRepository.findAll();
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

		System.out.println(username);
		Login a = loginJpaRepository.findByUserName(username);
		inMemoryUserList.add(new JwtUserDetails(a.getId(), a.getUserName(), a.getPassword(), "ROLE_USER_2"));

		Optional<JwtUserDetails> findFirst = inMemoryUserList.stream()
				.filter(user -> user.getUsername().equals(username)).findFirst();

		if (!findFirst.isPresent()) {
			throw new UsernameNotFoundException(String.format("USER_NOT_FOUND '%s'.", username));
		}

		return findFirst.get();
	}

}
