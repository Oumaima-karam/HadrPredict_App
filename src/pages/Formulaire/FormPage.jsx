import React, { useState } from 'react';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';
import './FormPage.css';

export default function FormPage() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const validExtensions = ['xls', 'xlsx'];

  const handleFile = (selectedFile) => {
    const fileExt = selectedFile.name.split('.').pop().toLowerCase();
    if (!validExtensions.includes(fileExt)) {
      setError('❌ Format invalide. Seuls les fichiers .xls et .xlsx sont autorisés.');
      setFile(null);
      setSuccess('');
      return;
    }
    setError('');
    setFile(selectedFile);
    // Ne lance pas l'upload automatiquement ici, laisse l'utilisateur valider via bouton
    setSuccess('');
  };

  const uploadToBackend = async () => {
    if (!file) {
      setError('❌ Veuillez sélectionner un fichier avant d\'importer.');
      setSuccess('');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8081/api/eleve/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const text = await response.text();
        setSuccess(`✅ ${text}`);
        setError('');
        setFile(null); // reset fichier après succès
      } else {
        const errText = await response.text();
        setError(`❌ Erreur serveur : ${errText || response.statusText}`);
        setSuccess('');
      }
    } catch (err) {
      setError(`❌ Erreur réseau : ${err.message}`);
      setSuccess('');
    } finally {
      setLoading(false);
    }
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
      .then(res => {
        if (!res.ok) throw new Error('Impossible de télécharger le modèle.');
        return res.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'modele_eleve.xlsx';
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => {
        setError('❌ Impossible de télécharger le modèle.');
        setSuccess('');
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
            disabled={loading}
          />
          <div className="upload-content">
            <span className="upload-icon">📁</span>
            <p>Glissez-déposez votre fichier ici ou cliquez pour sélectionner.</p>
          </div>
        </div>

        {file && (
          <div className="file-info">
            📄 Fichier sélectionné : <strong>{file.name}</strong>
          </div>
        )}

        <button
          onClick={uploadToBackend}
          disabled={loading || !file}
          style={{ marginTop: 15, padding: '10px 20px', cursor: loading || !file ? 'not-allowed' : 'pointer' }}
        >
          {loading ? 'Import en cours...' : 'Importer le fichier'}
        </button>

        {error && <div className="error-message" style={{ marginTop: 20 }}>{error}</div>}
        {success && <div className="success-message" style={{ marginTop: 20 }}>{success}</div>}

        <section className="instructions" style={{ marginTop: 40 }}>
          <h3>📘 Instructions :</h3>
          <ol>
            <li>Le fichier Excel doit contenir exactement 13 colonnes.</li>
            <li>La première ligne doit contenir les en-têtes de colonnes.</li>
            <li>Les dates doivent être au format <strong>AAAA-MM-JJ</strong> ou <strong>JJ/MM/AAAA</strong>.</li>
            <li>La taille maximale du fichier est <strong>20 Mo</strong>.</li>
          </ol>
        </section>

        <section className="excel-guide" style={{ marginTop: 40 }}>
  <h3>📊 Exemple d’un fichier Excel valide :</h3>
  <table className="excel-sample">
    <thead>
      <tr>
        <th>idEleve</th>
        <th>dateDeNaissance</th>
        <th>genre</th>
        <th>classe</th>
        <th>cycle</th>
        <th>absence</th>
        <th>resultat</th>
        <th>nomEcole</th>
        <th>commune</th>
        <th>province</th>
        <th>typeSchool</th>
        <th>milieu</th>
        <th>situation</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1001</td>
        <td>2012-05-14</td>
        <td>F</td>
        <td>3ème</td>
        <td>Secondaire</td>
        <td>2</td>
        <td>15.0</td>
        <td>Lycée Ibn Khaldoun</td>
        <td>Casablanca</td>
        <td>Casablanca-Settat</td>
        <td>Public</td>
        <td>Urbain</td>
        <td>Actif</td>
      </tr>
    </tbody>
  </table>
</section>

        <button
          onClick={downloadTemplate}
          style={{ marginTop: 30, padding: '10px 20px' }}
          disabled={loading}
        >
          Télécharger le modèle Excel
        </button>
      </main>
    </div>
  );
}
