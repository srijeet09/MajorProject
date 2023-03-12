package com.evoting.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Admin")
public class Product3 {
 private String Name;
 @Id
private int id;
private String email;
private String password;
private String security;
public String getName() {
	return Name;
}
public String getSecurity() {
	return security;
}
public void setSecurity(String security) {
	this.security = security;
}
public void setName(String name) {
	Name = name;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
} 

}
