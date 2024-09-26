import React, { useEffect, useState } from 'react';

const Liderazgo = () => {
  const [data, setData] = useState([]);

  const sheetName = process.env.REACT_APP_SHEET_NAME;
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetName}/values/Liderazgo?key=${apiKey}`);
        const result = await response.json();
        setData(result.values || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [sheetName, apiKey]);

  return (
    <div className="liderazgo-container">
      <h1>Liderazgo</h1>
      <table className="styled-table">
        <thead>
          <tr>
            {data.length > 0 ? (
              data[0].map((header, index) => (
                <th key={index}>{header}</th>
              ))
            ) : (
              <>
                <th>Nombre del participante</th>
                <th>Puntos Totales</th>
                <th>Nombre del Participante Completo</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {data.length > 1 ? (
            data.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Liderazgo;