import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QuestionsProvider } from './contexts/questionsContext';
import { Home } from './Pages/Home';
import { Options } from './Pages/Options';
import { Questions } from './Pages/Questions';
import { Results } from './Pages/Results';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <BrowserRouter>
      <QuestionsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/options" element={<Options />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/results" element={<Results />} />
        </Routes>
        <GlobalStyle />
      </QuestionsProvider>
    </BrowserRouter>
  );
}
