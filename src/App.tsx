import { Route, Routes } from "react-router-dom";

import { CreateMetaPage } from "./pages/create";
import { MetaPage } from "./pages/meta";
import { IndexPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<CreateMetaPage />} path="/create" />
      <Route element={<MetaPage />} path="/meta" />
    </Routes>
  );
}

export default App;
