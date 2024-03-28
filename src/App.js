import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Layout from "./Pages/Layout";
import PropertiesView from "./Pages/PropertiesView";
import Details from "./Pages/Details";
import SingleView from "./Pages/SingleView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="properties-view" element={<PropertiesView />} />
          <Route path="single-view" element={<SingleView />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
