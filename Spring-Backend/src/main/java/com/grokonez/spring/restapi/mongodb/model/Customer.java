package com.grokonez.spring.restapi.mongodb.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "customer")
public class Customer {
	
	//Déclaration des variables
	@Id
	private String id;
	private String lastName;
	private String firstName;
	private int age;
	private String email;
	private String password;
	private boolean active;

	//Constructeurs
	public Customer() {
	}

	public Customer(String id, String name, String prenom, int age, String email, String password) {
		this.id = id;
		this.lastName = lastName;
		this.firstName = firstName;
		this.age = age;
		this.email =  email;
		this.password = password;
	}

	
	//Accesseurs et mutateurs
	public String getId() {
		return id;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getLastName() {
		return this.lastName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	public String getFirstName() {
		return this.firstName;
	}
	
	public void setAge(int age) {
		this.age = age;
	}

	public int getAge() {
		return this.age;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEmail() {
		return this.email;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}

	public String getPassword() {
		return this.password;
	}	
	
	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "Customer [id=" + id + ", lastName=" + lastName + ", firstName=" +  firstName + ", age=" + age + ", email=" + email + ", active=" + active + "]";
	}
}
