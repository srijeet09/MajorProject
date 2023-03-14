package com.Voting.service;

import java.util.List;

import com.Voting.model.Voter;



public interface CandidatesService {
void add(Voter product);
List<Voter> findByAdmin(String name);
void removeById(int id,String admin);
void removeById1(int id);
void modify(Voter product);
Voter getById(int id,String admin);
void removeByAdmin(String admin);
}

