import React, { useState } from 'react';

function App() {
  const [dato, setDato] = useState('');
  const [lista, setLista] = useState([]);

  const agregar = () => {
    if (dato) setLista([...lista, dato]);
    setDato('');
  };

  const eliminar = (index) => {
    setLista(lista.filter((_, i) => i !== index));
  };

  const modificar = (index) => {
    const nuevoDato = prompt('Ingresa el nuevo dato:', lista[index]);
    if (nuevoDato) {
      const nuevaLista = [...lista];
      nuevaLista[index] = nuevoDato;
      setLista(nuevaLista);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>ABM de Datos</h1>
      <input
        type="text"
        value={dato}
        onChange={(e) => setDato(e.target.value)}
        placeholder="Ingresa un dato"
      />
      <button onClick={agregar}>Agregar</button>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => modificar(index)}>Modificar</button>
            <button onClick={() => eliminar(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;