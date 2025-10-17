import React from 'react';

const PastoMap: React.FC = () => {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      borderRadius: '10px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2>🗺️ Mapa de Pasto</h2>
        <p>Centro: 1.208, -77.277</p>
        <p>¡Mapa interactivo funcionando pronto!</p>
      </div>
    </div>
  );
};

export default PastoMap;