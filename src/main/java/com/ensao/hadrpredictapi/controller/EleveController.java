package com.ensao.hadrpredictapi.controller;

import com.ensao.hadrpredictapi.service.ExcelEleveService;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

@CrossOrigin(origins = "http://localhost:3000")
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


