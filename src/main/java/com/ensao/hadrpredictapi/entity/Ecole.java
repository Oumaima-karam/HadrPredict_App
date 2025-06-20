package com.ensao.hadrpredictapi.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(uniqueConstraints = @UniqueConstraint(columnNames = {"nom", "commune"}))
public class Ecole {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String typeSchool;

    @Column(nullable = false)
    private String province; // supprimé unique = true

    @Column(nullable = false)
    private String commune;

    @Column(nullable = false)
    private String milieu;

    @Column
    private Double latitude;

    @Column
    private Double longitude;

    @OneToMany(mappedBy = "ecole", cascade = CascadeType.ALL)
    private List<Eleve> eleves;

    public Ecole(String nom) {
        this.nom = nom;
    }
}
