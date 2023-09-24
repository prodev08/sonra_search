import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App p-10 max-md:p-4">
        <header className="App-header">
          {/* Add your header content here */}
        </header>

        {/* Create a navigation menu or header as needed */}
        
        <main className="App-main">
          <Routes>
          </Routes>
        </main>
        
        {/* Add a footer or other content as needed */}
      </div>
    </Router>
  );
}

export default App;
