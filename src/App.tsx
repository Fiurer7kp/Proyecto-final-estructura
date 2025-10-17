import PastoMap from './components/PastoMap';
import AlertForm from './components/AlertForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header style={{
        background: '#2c3e50',
        color: 'white',
        padding: '1rem',
        textAlign: 'center'
      }}>
        <h1>🚨 SafePasto - Alertas Comunitarias</h1>
        <p>Sistema de seguridad colaborativo para Pasto, Nariño</p>
      </header>

      <div style={{ display: 'flex', height: 'calc(100vh - 120px)' }}>
        <div style={{ width: '300px', background: '#f8f9fa' }}>
          <AlertForm />
        </div>
        <div style={{ flex: 1 }}>
          <PastoMap />
        </div>
      </div>
    </div>
  );
}

export default App;