import React, { ReactElement } from "react";
import { Routes, Route } from 'react-router-dom';

import DashboardContainer from "./modules/Dashboard/containers/DashboardContainer";

const App = (): ReactElement => {
  return (
    <main className="content">
      <Routes>
        <Route path="/" element={<DashboardContainer />} />
      </Routes>
    </main>
  );
};

export default App;
