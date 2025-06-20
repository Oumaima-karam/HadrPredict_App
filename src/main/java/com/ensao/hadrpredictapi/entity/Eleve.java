package com.ensao.hadrpredictapi.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.OffsetDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor


public class Eleve {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private Long idEleve;

    @Column(nullable = false)
    private LocalDate dateDeNaissance;

    private String situation;

    @Column(nullable = false)
    private String genre;

    @ManyToOne
    @JoinColumn(name = "id_ecole", nullable = false)
    private Ecole ecole;

    private String classe;
    private String cycle;
    private Integer absence;
    private Double resultat;

    @Column(name = "prediction")
    private Integer prediction;

    @Column(name = "probability_abandon")
    private Double probabilityAbandon;


}

