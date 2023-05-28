import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./Layout";
import Characters from "../pages/Characters/Characters";
import Character from "../pages/Characters/Details";
import Comics from "../pages/Comics/Comics";
import Creators from "../pages/Creators/Creators";
import Creator from "../pages/Creators/Details";
import Events from "../pages/Events/Events";
import Event from "../pages/Events/Details";
import Series from "../pages/Series/Series";
import Serie from "../pages/Series/Details";
import Comic from "../pages/Comics/Details";

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
          <Route path="/creators/:id" element={<Creator />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<Event />} />
          <Route path="/series" element={<Series />} />
          <Route path="/series/:id" element={<Serie />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
