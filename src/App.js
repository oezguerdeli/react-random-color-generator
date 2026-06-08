import './App.css';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('#ffffff');

  function randomColor() {
    const tempColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    setColor(tempColor);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="App">
        <button
          style={{
            backgroundColor: 'white',
            color: 'black',
            marginTop: '100px',
            padding: '20px 20px 20px 20px',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderRadius: '8px',
          }}
          onClick={randomColor}
        >
          Generate Random Color
        </button>
      </div>

      <div
        style={{
          marginTop: '20px',
          width: '300px',
          height: '150px',
          backgroundColor: color,
          display: 'flex',
          color: 'white',
          fontSize: '24px',
          borderRadius: '10px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {color}
      </div>
    </div>
  );
}
