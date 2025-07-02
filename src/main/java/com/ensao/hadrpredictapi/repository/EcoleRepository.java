package com.ensao.hadrpredictapi.repository;

import com.ensao.hadrpredictapi.entity.Ecole;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EcoleRepository extends JpaRepository<Ecole, Long> {
    Optional<Ecole> findByNomAndCommune(String nom, String commune);
    List<Ecole> findByLatitudeIsNotNullAndLongitudeIsNotNull();

}
