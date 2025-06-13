import { Route, Routes } from "react-router-dom";

import { CreateMetaPage } from "./pages/create";
import { MetaPage } from "./pages/meta";
import { IndexPage } from "./pages";
import { WeaponPage } from "./pages/weapons";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<CreateMetaPage />} path="/create" />
      <Route element={<MetaPage />} path="/meta" />
      <Route element={<WeaponPage />} path="/weapon" />
    </Routes>
  );
}

export default App;
