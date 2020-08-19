import React, { useEffect, useState } from 'react';

import RowCol from './RowCol';

import results from './sources';

function App() {
  const [credits, setCredits] = useState([]);
  const [sources, setSources] = useState([]);

  const loadAllAsync = async () => {
    const datas = await results();
    setCredits((state) => [...state, ...datas[0]]);
    setSources((state) => [...state, ...datas[1]]);
  };

  useEffect(() => {
    loadAllAsync();
  }, []);

  return (
    <div style={{ width: '95%', padding: 0, margin: '0 auto' }}>
      <div className="row row-cols-sm-2">
        <div className="col">
          <RowCol data={credits} name="title" />
        </div>
        <div className="col">
          <RowCol data={sources} name="description" />
        </div>
      </div>
    </div>
  );
}

export default App;
