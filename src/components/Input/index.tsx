import Paper from '@mui/material/Paper';
import { InputBase } from '@mui/material';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { useQuestionsContext } from '../../contexts/questionsContext';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export function Input() {
  const { questionNumber, handleChangeInput, handleSubmitForm } =
    useQuestionsContext();

  return (
    <Paper
      component="form"
      sx={{
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        background: 'var(--background)',
        border: 'none',
        boxShadow: '0 1px 0 0.5 black',
      }}
      onSubmit={handleSubmitForm}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Quantas questões?"
        type="number"
        style={{
          color: 'white',
          background: 'inherit',
          fontSize: '2rem',
          textAlign: 'inherit',
          padding: '0 1rem',
        }}
        value={questionNumber}
        onChange={handleChangeInput}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="start">
        <KeyboardArrowRightIcon />
      </IconButton>
    </Paper>
  );
}
