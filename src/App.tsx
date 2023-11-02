import './App.css';
import { HomePage } from './app/home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProjectPage } from './app/project/ProjectPage';
import { InfoPage } from './app/info/InfoPage';
import { PdfPage } from './app/pdf/PdfPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/projects/:projectId" element={<ProjectPage />} />
        <Route path="/sections/:sectionId" element={<InfoPage />} />
        <Route path="/pdfs/:sectionId" element={<PdfPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
