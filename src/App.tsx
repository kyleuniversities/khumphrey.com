import './App.css';
import { DynamicHomePage, StaticHomePage } from './app/home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProjectPage } from './app/project/ProjectPage';
import { InfoPage } from './app/info/InfoPage';
import { PdfPage } from './app/pdf/PdfPage';
import { ListPage } from './app/list/ListPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<DynamicHomePage />} />
        <Route path="/home" element={<StaticHomePage />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/sections/info/:id" element={<InfoPage />} />
        <Route path="/sections/lists/:sectionId" element={<ListPage />} />
        <Route path="/sections/pdfs/:sectionId" element={<PdfPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
