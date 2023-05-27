import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import Layout from "./Layout";
import Characters from "../pages/Characters/Characters";
import Character from "../components/CharacterDetails/Details";
import Comics from "../pages/Comics/Comics";
import Creators from "../pages/Creators/Creators";
import Events from "../pages/Events";
import Series from "../pages/Series";
import Stories from "../pages/Stories";
import Comic from "../components/ComicsDetails/Details";

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Comics />} />
          <Route path="/comics/:id" element={<Comic />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<Character />} />
          <Route path="/creators" element={<Creators />} />
          <Route path="/events" element={<Events />} />
          <Route path="/series" element={<Series />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
