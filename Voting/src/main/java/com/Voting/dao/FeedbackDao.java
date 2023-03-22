package com.Voting.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.Voting.model.Feedback;
import com.Voting.model.Candidates;
import com.Voting.model.Voters;
@Repository
public interface FeedbackDao extends JpaRepository<Feedback, Integer> {
}
