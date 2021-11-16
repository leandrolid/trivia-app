import { CircularProgress } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useQuestionsContext } from '../../contexts/questionsContext';
import { api } from '../../services/api';
import { removeSpecialCharacters } from '../../utils/removeSpecialCharacters';
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

export function Options() {
  const { questionNumber, setQuestions } = useQuestionsContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const cancelGame = () => navigate('/');

  const shuffleAnswers = (question: QuestionsData) => {
    const allAnswers = [...question.incorrect_answers, question.correct_answer];

    const shuffled = allAnswers.sort(() => Math.random() - 0.5);
    return {
      ...question,
      shuffled,
    };
  };

  const handleQuestions = (questions: QuestionsData[]) => {
    const questionsWithShuffled = questions.map((question) =>
      shuffleAnswers(question)
    );

    const questionsWithEscapedStrings = questionsWithShuffled.map(
      (question) => ({
        ...question,
        shuffled: question.shuffled.map((answer) =>
          removeSpecialCharacters(answer)
        ),
        question: removeSpecialCharacters(question.question),
      })
    );

    return questionsWithEscapedStrings;
  };

  const startGame = async () => {
    setIsLoading(true);
    const { data } = await api.get(`/api.php?amount=${questionNumber}`);

    const questionsWithShuffledAnswers: QuestionsData[] = handleQuestions(
      data.results
    );

    setQuestions(questionsWithShuffledAnswers);
    setIsLoading(false);
    navigate('/questions');
  };

  return (
    <C.Container>
      <C.Button onClick={startGame} disabled={isLoading}>
        {isLoading ? (
          <CircularProgress size={20} color="success" />
        ) : (
          <span>Start</span>
        )}
      </C.Button>
      <C.Button onClick={cancelGame}>Cancel</C.Button>
    </C.Container>
  );
}
