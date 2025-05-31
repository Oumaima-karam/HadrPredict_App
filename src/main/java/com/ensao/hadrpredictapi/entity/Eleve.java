package com.ensao.hadrpredictapi.entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.OffsetDateTime;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor


public class Eleve {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_eleve")
    private Long idEleve;

    @Column(name = "id_handicap")
    private Integer idHandicap;

    @Column(name = "date_de_naissance")
    private OffsetDateTime date_de_naissance ;

    @Column(name = "Type_etablissement")
    private String Type_etablissement;

    @Column(name = "Situation")
    private String Situation;

    @Column(name = "Milieu")
    private String Milieu;

    @Column(name = "Genre")
    private String Genre;

    @Column(name = "Commune")
    private String Commune;

    @Column(name = "Province")
    private String Province;

    @Column(name = "Nom_etablissement")
    private String Nom_etablissement;

    @Column(name = "Classe")
    private String Classe;

    @Column(name = "Cycle")
    private String Cycle;




    @Column(name = "Absence")
    private Integer Absence;

    @Column(name = "Resultat")
    private Double Resultat;
    // Getters et Setters

}

