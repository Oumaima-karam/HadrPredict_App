package com.ensao.hadrpredictapi.repository;

import com.ensao.hadrpredictapi.entity.Eleve;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EleveRepository extends JpaRepository<Eleve, Long> {

}