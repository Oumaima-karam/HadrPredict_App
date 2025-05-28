package com.ensao.hadrpredictapi.controller;

import com.ensao.hadrpredictapi.service.ExcelEleveService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/eleve")
public class EleveController {

    private final ExcelEleveService excelEleveService;

    public EleveController(ExcelEleveService excelEleveService) {
        this.excelEleveService = excelEleveService;
    }

    @PostMapping("/upload")
    public ResponseEntity<String> upload(@RequestParam("file") MultipartFile file) {
        try {
            System.out.println("Nom du fichier reçu : " + file.getOriginalFilename());
            excelEleveService.importer(file);
            return ResponseEntity.ok("Fichier des élèves importé avec succès !");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Erreur : " + e.getMessage());
        }
    }
}

