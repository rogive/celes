import React, { ReactElement } from "react";
import { Routes, Route } from 'react-router-dom';

import Dashboard from "./pages/Dashboard";

const App = (): ReactElement => {
  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </main>
  );
};

export default App;
