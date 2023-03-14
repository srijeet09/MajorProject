package com.Voting.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.Voting.dao.FeedbackDao;
import com.Voting.dao.CandidatesDao;
import com.Voting.model.Feedback;
import com.Voting.model.Candidates;
import com.Voting.model.Voter;
@org.springframework.stereotype.Service
public class FeedService implements FeedServ {
	@Autowired
	private FeedbackDao feedback;
	@Override
	public void add(Feedback product) {
	feedback.save(product);
	
	}
	
 	
}
