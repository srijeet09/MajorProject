package com.Voting.service;

import java.util.List;

import com.Voting.model.Voters;



public interface VotersService {
void add(Voters product);
List<Voters> findByAdmin(String name);
void removeById(int id,String admin);
void removeById1(int id);
void modify(Voters product);
Voters getById(int id,String admin);
void removeByAdmin(String admin);
}

