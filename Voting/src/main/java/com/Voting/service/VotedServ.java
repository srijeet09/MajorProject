package com.Voting.service;

import java.util.List;

import com.Voting.model.Voted;
import com.Voting.model.Voters;



public interface VotedServ {
void add(Voted product);
List<Voted> findByAdmin(String name);
}

