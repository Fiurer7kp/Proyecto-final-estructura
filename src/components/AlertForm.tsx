import React, { useState } from 'react';

const AlertForm: React.FC = () => {
  const [alertType, setAlertType] = useState('security');

  return (
    <div style={{ padding: '20px' }}>
      <h3>🚨 Reportar Alerta</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <label>Tipo de Alerta:</label>
        <select 
          value={alertType} 
          onChange={(e) => setAlertType(e.target.value)}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        >
          <option value="security">🔒 Seguridad</option>
          <option value="event">🎉 Evento</option>
          <option value="traffic">🚗 Tráfico</option>
          <option value="weather">🌧️ Clima</option>
        </select>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Descripción:</label>
        <textarea 
          placeholder="Describe lo que está sucediendo..."
          style={{ width: '100%', padding: '8px', marginTop: '5px', height: '80px' }}
        />
      </div>

      <button 
        style={{
          width: '100%',
          padding: '10px',
          background: '#e74c3c',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        📢 Reportar Alerta
      </button>

      <div style={{ marginTop: '20px', padding: '10px', background: '#d4edda', borderRadius: '5px' }}>
        <small>📍 Ubicación: Pasto, Nariño</small>
      </div>
    </div>
  );
};

export default AlertForm;