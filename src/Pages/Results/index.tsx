import { useEffect, useState } from 'react';
import { useQuestionsContext } from '../../contexts/questionsContext';
import * as C from './styles';

import { Question } from '../../components/Question';

type ResultsData = {
  rights: number;
  wrongs: number;
};

export function Results() {
  const { questions, selectedAnswers, playAgain } = useQuestionsContext();
  const [results, setResults] = useState<ResultsData>(
    JSON.parse(localStorage.getItem('results')) || { rights: 0, wrongs: 0 }
  );

  const verifyResults = () => {
    const rights = questions.filter(
      (question, index) =>
        question.correct_answer === selectedAnswers[index].answer
    );

    const wrongs = questions.filter(
      (question, index) =>
        question.correct_answer !== selectedAnswers[index].answer
    );

    setResults({ rights: rights.length, wrongs: wrongs.length });
  };

  useEffect(verifyResults, [questions, selectedAnswers]);

  useEffect(() => {
    localStorage.setItem('results', JSON.stringify(results));
  }, [results]);

  return (
    <C.Container>
      <C.Content>
        <C.Header>
          <h1>Resultados</h1>
          <p>
            Você acertou {results.rights} e errou {results.wrongs} questões.
          </p>
          <C.Divider />
        </C.Header>
        <C.Main>
          {questions.map((question, index) => (
            <Question
              key={question.question}
              question={question}
              selectedAnswer={selectedAnswers[index]}
              index={index}
            />
          ))}
          <C.Button onClick={playAgain}>Jogar novamente</C.Button>
        </C.Main>
      </C.Content>
    </C.Container>
  );
}
