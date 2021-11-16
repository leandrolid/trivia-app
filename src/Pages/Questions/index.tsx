import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Loading from '../../components/Loading';
import { useQuestionsContext } from '../../contexts/questionsContext';
import * as C from './styles';

type QuestionsData = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  shuffled?: string[];
};

export function Questions() {
  const { questions, setSelectedAnswers, selectedAnswers } =
    useQuestionsContext();

  const navigate = useNavigate();

  const [hasQuestions, setHasQuestions] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState<QuestionsData>(
    {} as QuestionsData
  );

  useEffect(() => {
    setSelectedAnswers([]);
  }, [setSelectedAnswers]);

  useEffect(() => {
    if (questions.length) {
      setHasQuestions(true);
      setCurrentQuestion(questions[currentIndex]);
    }
  }, [currentIndex, questions]);

  const nextQuestion = () => {
    if (currentIndex + 1 < questions.length)
      setCurrentIndex((prevIndex) => prevIndex + 1);
    else navigate('/results', { replace: true });
  };

  const selectQuestion = (currentAnswer: string, question: string) => {
    const alreadyExists = selectedAnswers.some(
      (answer) => answer.question === question
    );

    if (!alreadyExists)
      setSelectedAnswers([
        ...selectedAnswers,
        {
          answer: currentAnswer,
          question,
        },
      ]);

    nextQuestion();
  };

  return (
    <>
      {hasQuestions ? (
        <C.Container>
          <C.Header>
            <span>{currentIndex + 1}</span>
            <p>{currentQuestion.question}</p>
          </C.Header>
          <C.Main>
            {currentQuestion.shuffled.map((answer, index) => (
              <label htmlFor={answer} key={index}>
                <input
                  id={answer}
                  name="answer"
                  type="checkbox"
                  onChange={() =>
                    selectQuestion(answer, currentQuestion.question)
                  }
                />
                <span>{answer}</span>
              </label>
            ))}
          </C.Main>
        </C.Container>
      ) : (
        <Loading />
      )}
    </>
  );
}
