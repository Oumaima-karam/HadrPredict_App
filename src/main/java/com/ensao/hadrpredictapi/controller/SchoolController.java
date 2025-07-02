package com.ensao.hadrpredictapi.controller;

import com.ensao.hadrpredictapi.entity.Ecole;
import com.ensao.hadrpredictapi.service.EcoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/schools")
@CrossOrigin(origins = "http://localhost:3000") // autorise React à faire des appels
public class SchoolController {

    @Autowired
    private EcoleService schoolService;

    // Ajouter une école
    @PostMapping
    public ResponseEntity<Ecole> createSchool(@RequestBody Ecole ecole) {
        Ecole saved = schoolService.saveSchool(ecole);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    // Obtenir toutes les écoles
    @GetMapping
    public List<Ecole> getAll() {
        return schoolService.getAllSchools();
    }

    @GetMapping("/map")
    public ResponseEntity<List<Ecole>> getAllWithCoordinates() {
        List<Ecole> dtos = schoolService.getSchoolsWithCoordinates();
        return ResponseEntity.ok(dtos);
    }
}



