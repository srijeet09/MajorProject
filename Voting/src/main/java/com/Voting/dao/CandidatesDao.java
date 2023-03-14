package com.Voting.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Voting.model.Candidates;
import com.Voting.model.Voter;
@Repository
public interface CandidatesDao extends JpaRepository<Candidates, Integer> {
public List<Candidates> findByAdmin(String Name);
@Modifying
@Transactional
@Query(value="delete from Candidates c where c.admin = ?1")
void deleteByAdmin(String Admin);
}
