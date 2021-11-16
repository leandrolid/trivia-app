import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
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

type AnswersData = {
  answer: string;
  question: string;
};

type QuestionProps = {
  question: QuestionsData;
  selectedAnswer: AnswersData;
  index: number;
};

export function Question({ question, selectedAnswer, index }: QuestionProps) {
  return (
    <C.Container>
      <C.Question>
        <h3>
          {`${index + 1}. `} {question.question}
        </h3>
        <ul>
          {question.shuffled.map((answer) => (
            <li
              key={answer}
              className={answer === question.correct_answer && 'correct'}
            >
              <span>{answer}</span>
              <span>
                {answer === question.correct_answer && ' *resposta correta'}
              </span>
            </li>
          ))}
        </ul>

        <h4>Sua resposta foi: </h4>
        <p>
          {question.correct_answer === selectedAnswer.answer ? (
            <CheckCircleOutlineIcon style={{ color: '#4cd62b' }} />
          ) : (
            <CancelOutlinedIcon style={{ color: '#e83f5b' }} />
          )}
          {selectedAnswer.answer}
        </p>
      </C.Question>
    </C.Container>
  );
}
