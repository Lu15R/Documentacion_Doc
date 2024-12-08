import React from 'react';
import Link from '@docusaurus/Link'; // Importamos Link para manejar rutas

// Componente de botón personalizado
const Boton = ({ to, children }) => (
  <Link
    to={to}
    style={{
      background: 'linear-gradient(to right, #6b46c1, #5a67d8)',
      color: 'white',
      padding: '16px 40px',
      borderRadius: '12px',
      fontSize: '22px',
      fontWeight: '700',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textDecoration: 'none',
      display: 'inline-block',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      textAlign: 'center',
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = 'scale(1.1)';
      e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'scale(1)';
      e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    }}
  >
    {children}
  </Link>
);

// Función principal del componente
function PatronesComportamiento() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #f7f7f7, #e1e1e1)',
        padding: '60px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
          transform: 'translateY(-60px)',
        }}
      >
        {/* Encabezado */}
        <header
          style={{
            backgroundColor: '#4a6fa5',
            padding: '24px 0',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              color: '#ffffff',
              fontSize: '32px',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            Arquitectura de Software
          </h1>
        </header>

        {/* Contenido principal */}
        <main
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            gap: '32px',
          }}
        >
          {/* Contenido de texto */}
          <div style={{ textAlign: 'center' }}>
            <h2
              style={{
                fontSize: '48px',
                fontWeight: '800',
                lineHeight: '1.3',
                color: '#4a6fa5',
              }}
            >
              Patrones de Diseño de
              <br />
              Comportamiento
            </h2>
            <p
              style={{
                color: '#555555',
                fontSize: '20px',
                lineHeight: '1.8',
                margin: '16px 0',
              }}
            >
              Los patrones de diseño de comportamiento se enfocan en la
              interacción eficiente entre objetos. Aprende cómo pueden
              mejorar la flexibilidad y escalabilidad de tu software.
            </p>
            {/* Botón centrado */}
            <div style={{ marginTop: '24px' }}>
              <Boton to="/docs/intro">Ver Documentación</Boton>
            </div>
          </div>

          {/* Imagen representativa */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="https://refactoring.guru/images/patterns/content/index/full/patterns-03.png?id=c16d3d331bd52a9401d3a0aa9739ef07"
              alt="Ilustración de patrones de diseño"
              style={{
                maxWidth: '100%',   
                width: '100%',        
                maxHeight: '450px',   
                objectFit: 'contain',  
                borderRadius: '18px',  
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

export default PatronesComportamiento;
