import React, { useState } from 'react';
import './formPage.css';
import Sidebar from '../../components/Layout/Sidebar/Sidebar';

const provinces = ['Oujda-Angad', 'Nador', 'Driouch', 'Jerada', 'Berkane', 'Taourirt', 'Figuig', 'Guercif'];

const predefinedCities = {
    'Oujda-Angad': ['Oujda', 'Aïn Sfa', 'Bni Khaled', 'Bsara', 'Isly'],
    'Nador': ['Nador', 'Al Aroui', 'Beni Ansar', 'Beni Chiker', 'Bni Bouifrour'],
    'Driouch': ['Driouch', 'Ben Taieb', 'Midar', 'Trougout', 'Mtalssa'],
    'Jerada': ['Jerada', 'Touissit', 'Gafait', 'Lebkhata', 'Mrija'],
    'Berkane': ['Berkane', 'Ahfir', 'Aïn Erreggada', 'Aklim', 'Madagh'],
    'Taourirt': ['Taourirt', 'Debdou', 'El Aïoun Sidi Mellouk', 'Mechraa Hammadi', 'Sidi Ali Belkassem'],
    'Figuig': ['Figuig', 'Bouanane', 'Abou Lhamam', 'Bouarfa', 'Maiziz'],
    'Guercif': ['Guercif', 'Taddart', 'Assefrou', 'Bni Oukil', 'Tiztoutine']
};

export default function FormPage() {
const [form, setForm] = useState({province: '', city: '', establishment: '', file: null});

const [isOtherCity, setIsOtherCity] = useState(false);

const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'city' && value === 'other') {
        setIsOtherCity(true);
        setForm(p => ({ ...p, city: '' }));
    } else {
        setForm(p => ({
        ...p,
        [name]: files ? files[0] : value,
        ...(name === 'province' && { city: '', isOtherCity: false }),
    }));
    }
};

const getCities = () => {
    return predefinedCities[form.province] || [];
};

return (

    <div className="page-layout">

        <Sidebar />

        <div className="flex-1 min-h-screen justify-center">
        <div className="form-container">
        <h2>Formulaire</h2>
        <form onSubmit={e => { e.preventDefault(); console.log(form); }}>
        
        <div className="form-group">
        <label>Province :</label>
        <select 
            name="province" 
            value={form.province} 
            onChange={handleChange} 
            required
        >
            <option value="">Sélectionner une province</option>
            {provinces.map(p => <option key={p} value={p}>{p}</option>)}
        </select>
        </div>

        <div className="form-group">
        <label>Ville :</label>
        {!isOtherCity ? (
            <select name="city" value={form.city} onChange={handleChange} required >
            <option value="">Sélectionner une ville</option>
                {form.province && (<>
                {getCities().map(c => (
                    <option key={c} value={c}>{c}</option>
                ))}
                <option value="other">Autre</option>
                </>
            )}
            </select>
        ) : (
            <input
                type="text"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="Entrez le nom de la ville"
                required
                autoFocus
            />
        )}
        </div>

        <div className="form-group">
            <label>Établissement :</label>
            <input
                type="text"
                name="establishment"
                value={form.establishment}
                onChange={handleChange}
                placeholder="Nom de l'établissement"
                required
            />
        </div>

        <div className="form-group">
        <label>Importer un fichier :</label>
        <input type="file" name="file" onChange={handleChange} />
        </div>

        <button type="submit">Ajouter</button>
        </form>
        </div>
        </div>
    </div>
);
}