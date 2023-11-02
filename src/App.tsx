import './App.css';
import { HomePage } from './app/home/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProjectPage } from './app/project/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/:projectId" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
