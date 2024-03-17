import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:8000/api/test/')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return <div>Check the console for the API response.</div>;
}

export default App;
