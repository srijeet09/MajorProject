package com.Voting.service;

import java.util.List;

import com.Voting.model.Candidates;

public interface CandidateService {
void add(Candidates candidates);
List<Candidates> findByAdmin(String admin);
void removeById(int id);
void modify(Candidates candidates);
Candidates getById(int id);
List<Candidates> getAll();
void removeByAdmin(String admin);
}
