import React from 'react';

const RowCol = ({ data, name }) => {
  return (
    <>
      {data.length === 0 && 'Carregando ...'}
      <ul>
        {data.length > 0 && data.map((c, i) => <li key={i}>{c[name]}</li>)}
      </ul>
    </>
  );
};

export default RowCol;
