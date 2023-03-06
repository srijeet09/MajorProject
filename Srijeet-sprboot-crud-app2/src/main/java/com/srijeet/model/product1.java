package com.srijeet.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class product1 {
	@Id
	private int id;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
}
