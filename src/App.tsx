import "./App.css";
import {
  ClosedHomePage,
  DynamicHomePage,
  StaticHomePage,
} from "./app/home/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AlgorithmPage,
  InfoPage,
  ListPage,
  PdfPage,
  ProjectPage,
  TechnologyPage,
  TechnologyNotePage,
} from "./app/resource/ResourcePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ClosedHomePage />} />
        <Route path="/master" element={<DynamicHomePage />} />
        <Route path="/home" element={<StaticHomePage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/technologies/:id" element={<TechnologyPage />} />
        <Route path="/technology-notes/:id" element={<TechnologyNotePage />} />
        <Route path="/algorithms/:id" element={<AlgorithmPage />} />
        <Route path="/sections/info/:id" element={<InfoPage />} />
        <Route path="/sections/lists/:sectionId" element={<ListPage />} />
        <Route path="/sections/pdfs/:sectionId" element={<PdfPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
