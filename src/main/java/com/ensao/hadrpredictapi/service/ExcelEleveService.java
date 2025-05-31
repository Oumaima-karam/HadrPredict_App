package com.ensao.hadrpredictapi.service;

import com.ensao.hadrpredictapi.entity.Eleve;
import com.ensao.hadrpredictapi.repository.EleveRepository;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.time.Instant;
import java.time.OffsetDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.List;

@Service
public class ExcelEleveService {

    private final EleveRepository repository;

    public ExcelEleveService(EleveRepository repository) {
        this.repository = repository;
    }

    public void importer(MultipartFile file) throws Exception {
        List<Eleve> eleves = new ArrayList<>();

        try (InputStream is = file.getInputStream();
            Workbook workbook = new XSSFWorkbook(is)) {

            Sheet sheet = workbook.getSheetAt(0);
            boolean header = true;

            for (Row row : sheet) {
                if (header) {
                    header = false;
                    continue;
                }

                Eleve eleve = new Eleve();

                eleve.setIdEleve(getLongValue(row.getCell(0)));
                eleve.setIdHandicap(getIntegerValue(row.getCell(1)));
                eleve.setDate_de_naissance(getOffsetDateTimeValue(row.getCell(2)));
                eleve.setType_etablissement(getStringCellValue(row.getCell(3)));
<<<<<<< HEAD
                eleve.setMilieu(getStringCellValue(row.getCell(4)));
                eleve.setGenre(getStringCellValue(row.getCell(5)));
                eleve.setCommune(getStringCellValue(row.getCell(6)));
                eleve.setProvince(getStringCellValue(row.getCell(7)));
                eleve.setNom_etablissement(getStringCellValue(row.getCell(8)));
                eleve.setClasse(getStringCellValue(row.getCell(9)));
                eleve.setCycle(getStringCellValue(row.getCell(10)));
                eleve.setAbsence(getIntegerValue(row.getCell(11)));
                eleve.setResultat(getDoubleValue(row.getCell(12)));

                // Situation (colonne 13) est optionnelle
                if (row.getLastCellNum() > 13) {
                    eleve.setSituation(getStringCellValue(row.getCell(13)));
                }
=======
                eleve.setSituation(getStringCellValue(row.getCell(4)));
                eleve.setMilieu(getStringCellValue(row.getCell(5)));
                eleve.setGenre(getStringCellValue(row.getCell(6)));
                eleve.setCommune(getStringCellValue(row.getCell(7)));
                eleve.setProvince(getStringCellValue(row.getCell(8)));
                eleve.setNom_etablissement(getStringCellValue(row.getCell(9)));
                eleve.setClasse(getStringCellValue(row.getCell(10)));
                eleve.setCycle(getStringCellValue(row.getCell(11)));
                eleve.setAbsence(getIntegerValue(row.getCell(12)));
                eleve.setResultat(getDoubleValue(row.getCell(13)));
>>>>>>> d3cb3d376f3590b2478f2bb6568e070c43a9e293

                eleves.add(eleve);
            }
        }

        repository.saveAll(eleves);
    }

    private String getStringCellValue(Cell cell) {
        if (cell == null) return null;
        return switch (cell.getCellType()) {
            case STRING -> cell.getStringCellValue();
            case NUMERIC -> String.valueOf(cell.getNumericCellValue());
            case BOOLEAN -> String.valueOf(cell.getBooleanCellValue());
            default -> null;
        };
    }

    private Long getLongValue(Cell cell) {
        if (cell == null || cell.getCellType() != CellType.NUMERIC) return null;
        return (long) cell.getNumericCellValue();
    }

    private Integer getIntegerValue(Cell cell) {
        if (cell == null || cell.getCellType() != CellType.NUMERIC) return null;
        return (int) cell.getNumericCellValue();
    }

    private Double getDoubleValue(Cell cell) {
        if (cell == null || cell.getCellType() != CellType.NUMERIC) return null;
        return cell.getNumericCellValue();
    }

    private OffsetDateTime getOffsetDateTimeValue(Cell cell) {
        if (cell == null) return null;

        if (cell.getCellType() == CellType.NUMERIC && DateUtil.isCellDateFormatted(cell)) {
            Instant instant = cell.getDateCellValue().toInstant();
            return instant.atZone(ZoneId.systemDefault()).toOffsetDateTime();
        }

        // Si la date est saisie en texte : "yyyy-MM-dd"
        String text = getStringCellValue(cell);
        try {
            return OffsetDateTime.parse(text);
        } catch (Exception e) {
            return null;
        }
    }
}




