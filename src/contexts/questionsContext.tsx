import {
  ChangeEvent,
  createContext,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router';

type QuestionsData = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

type AnswersData = {
  answer: string;
  question: string;
};

type QuestionsContextData = {
  questionNumber: string;
  handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmitForm: (e: FormEvent<HTMLFormElement>) => void;
  questions: QuestionsData[];
  setQuestions: (q: QuestionsData[]) => void;
  selectedAnswers: AnswersData[];
  setSelectedAnswers: (a: AnswersData[]) => void;
  playAgain: () => void;
};

export const QuestionsContext = createContext({} as QuestionsContextData);

export function QuestionsProvider({ children }) {
  const navigate = useNavigate();
  const [questionNumber, setQuestionNumber] = useState('');
  const [questions, setQuestions] = useState(
    JSON.parse(localStorage.getItem('questions')) || []
  );
  const [selectedAnswers, setSelectedAnswers] = useState<AnswersData[]>(
    JSON.parse(localStorage.getItem('selectedAnswers')) || []
  );

  const handleChangeInput = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const cleaned = target.value.trim().replace('-', '').replace('.', '');
    setQuestionNumber(cleaned);
  };

  const handleSubmitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!!questionNumber && Number(questionNumber) !== 0) navigate('/options');
  };

  const saveInfoToLocalstorage = () => {
    localStorage.setItem('selectedAnswers', JSON.stringify(selectedAnswers));
    localStorage.setItem('questions', JSON.stringify(questions));
  };

  useEffect(saveInfoToLocalstorage, [questions, selectedAnswers]);

  const playAgain = () => {
    setQuestionNumber('');
    navigate('/');
  };

  return (
    <QuestionsContext.Provider
      value={{
        questionNumber,
        handleChangeInput,
        handleSubmitForm,
        questions,
        setQuestions,
        selectedAnswers,
        setSelectedAnswers,
        playAgain,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

export const useQuestionsContext = () => useContext(QuestionsContext);
