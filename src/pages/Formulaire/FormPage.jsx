import React, { useState } from 'react';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import './FormPage.css';

export default function FormPage() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validExtensions = ['xls', 'xlsx'];

  const handleFile = (selectedFile) => {
    const fileExt = selectedFile.name.split('.').pop().toLowerCase();
    if (!validExtensions.includes(fileExt)) {
      setError('❌ Format invalide. Seuls les fichiers .xls et .xlsx sont autorisés.');
      setFile(null);
      setSuccess('');
    } else {
      setError('');
      setFile(selectedFile);
      uploadToBackend(selectedFile);
    }
  };

  const uploadToBackend = (file) => {
    const formData = new FormData();
    formData.append('file', file);

    fetch('http://localhost:8081/api/eleve/upload', {
      method: 'POST',
      body: formData
    })
      .then(res => res.text())
      .then(message => {
        setSuccess(`✅ ${message}`);
        setError('');
      })
      .catch(async err => {
        console.error('Erreur complète :', err);
        let message = "❌ Erreur lors de l'envoi du fichier.";
        try {
          const text = await err.response?.text?.();
          if (text) message = `❌ ${text}`;
        } catch {}
        setError(message);
        setSuccess('');
      });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const downloadTemplate = () => {
    fetch('http://localhost:8081/api/eleve/template')
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'modele_eleve.xlsx';
        a.click();
      })
      .catch(() => {
        setError("❌ Impossible de télécharger le modèle.");
      });
  };

  return (
    <div className="page-layout">
      <Sidebar />
      <main className="main-content">
        <h2 className="title">📥 Importation des Données Élèves</h2>

        <div
          className="upload-zone"
          onDragEnter={e => e.preventDefault()}
          onDragOver={e => e.preventDefault()}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept=".xls,.xlsx"
            className="file-input"
            onChange={handleFileChange}
          />
          <div className="upload-content">
            <span className="upload-icon">📁</span>
            <p>Glissez-déposez votre fichier ici ou cliquez pour sélectionner.</p>
          </div>
        </div>

        {file && <div className="file-info">📄 Fichier sélectionné : <strong>{file.name}</strong></div>}
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <section className="instructions">
          <h3>📘 Instructions :</h3>
          <ol>
            <li>Le fichier Excel doit contenir exactement 13 colonnes </li>
            <li>La première ligne doit contenir les en-têtes de colonnes</li>
            <li>Les dates doivent être au format <strong>AAAA-MM-JJ</strong> ou <strong>JJ/MM/AAAA</strong></li>
            <li>La taille maximale du fichier est <strong>20 Mo</strong></li>
          </ol>
        </section>

        <section className="excel-guide">
          <h3>📊 Aperçu d’un fichier correct :</h3>
          <table className="excel-sample">
            <thead>
              <tr>
                <th>id_eleve</th>
                <th>id_handicap</th>
                <th>date_de_naissance</th>
                <th>Type_etablissement</th>
                <th>Milieu</th>
                <th>Genre</th>
                <th>Commune</th>
                <th>Province</th>
                <th>Nom_etablissement</th>
                <th>Classe</th>
                <th>Cycle</th>
                <th>Absence</th>
                <th>Resultat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1001</td>
                <td>3</td>
                <td>2012-05-14</td>
                <td>Public</td>
                <td>Urbain</td>
                <td>F</td>
                <td>Casablanca</td>
                <td>Casablanca-Settat</td>
                <td>Lycée Ibn Khaldoun</td>
                <td>3ème</td>
                <td>Secondaire</td>
                <td>2</td>
                <td>15</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
