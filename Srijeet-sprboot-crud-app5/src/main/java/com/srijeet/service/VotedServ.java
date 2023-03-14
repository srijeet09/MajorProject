package com.srijeet.service;

import java.util.List;

import com.srijeet.model.Voted;
import com.srijeet.model.product1;



public interface VotedServ {
void add(Voted product);
List<Voted> findByAdmin(String name);
}

