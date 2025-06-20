package com.ensao.hadrpredictapi.service;

import com.ensao.hadrpredictapi.dto.PredictionResponse;
import com.ensao.hadrpredictapi.dto.StudentInput;
import com.ensao.hadrpredictapi.entity.Eleve;
import com.ensao.hadrpredictapi.entity.Ecole;
import com.ensao.hadrpredictapi.repository.EleveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.time.Period;

@Service
public class EleveService {

    @Autowired
    private EleveRepository eleveRepository;

    private final RestTemplate restTemplate = new RestTemplate();

    // URL de ton API Python FastAPI
    private final String pythonApiUrl = "http://127.0.0.1:8000/predict";

    private int calculerAge(LocalDate dateNaissance) {
        return Period.between(dateNaissance, LocalDate.now()).getYears();
    }
    public PredictionResponse predictAbandon(Long eleveId) throws Exception {
        Eleve eleve = eleveRepository.findById(eleveId)
                .orElseThrow(() -> new Exception("Élève non trouvé"));

        Ecole ecole = eleve.getEcole();

        // Préparer les données à envoyer à l'API Python
        StudentInput input = new StudentInput(
                calculerAge(eleve.getDateDeNaissance()),
                eleve.getGenre(),
                eleve.getResultat(),
                eleve.getAbsence(),
                eleve.getCycle(),
                ecole.getMilieu(),
                ecole.getTypeSchool()
        );

        // Appel POST vers l'API Python
        PredictionResponse prediction = restTemplate.postForObject(pythonApiUrl, input, PredictionResponse.class);

        if (prediction == null) {
            throw new Exception("Erreur lors de la récupération de la prédiction");
        }

        return prediction;
    }
}
