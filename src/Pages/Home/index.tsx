import { Link } from 'react-router-dom';
import { Input } from '../../components/Input';
import { useQuestionsContext } from '../../contexts/questionsContext';

import * as C from './styles';

export function Home() {
  const { questions, selectedAnswers } = useQuestionsContext();

  return (
    <C.Container>
      <Input />
      {questions.length && selectedAnswers.length ? (
        <Link title="Resultados" to="/results">
          Resultado anterior
        </Link>
      ) : null}
    </C.Container>
  );
}
