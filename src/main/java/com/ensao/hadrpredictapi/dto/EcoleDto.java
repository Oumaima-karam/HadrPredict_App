package com.ensao.hadrpredictapi.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EcoleDto {
    private Long id;
    private String nom;
    private String typeEtablissement; // correspond à typeSchool dans l'entité
    private String commune;
    private String province;
    private String milieu;
}
