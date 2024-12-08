import Layout from '@theme/Layout';
import React from 'react';
import PatronesComportamiento from '../components/HomepageFeatures/PatronesComportamiento'; 

export default function Home() {
  return (
    <Layout
      title="Patrones de Diseño"
      description="Página principal sobre patrones de diseño de software para mejorar la arquitectura y flexibilidad">
      
      {/* Contenedor principal */}
      <main style={{ padding: '40px', textAlign: 'center', background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)' }}>
        {/* Título principal */}
        <h1 style={{ fontSize: '3em', marginBottom: '30px', color: '#4a6fa5' }}>Patrones de Diseño de Comportamiento</h1>
        
        {/* Descripción introductoria */}
        <p style={{ fontSize: '1.5em', marginBottom: '50px', color: '#333' }}>
          Descubre cómo los patrones de diseño de comportamiento optimizan la interacción entre objetos y facilitan el mantenimiento de tu software.
        </p>
        
        {/* Componente de patrones de comportamiento */}
        <PatronesComportamiento />
      </main>
      
    </Layout>
  );
}
