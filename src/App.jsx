import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const MapPage = lazy(() => import("./pages/MapPage/MapPage"));
import { Loader } from "./components/Loader";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
