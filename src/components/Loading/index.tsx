import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import * as C from './styles';

function Loading() {
  return (
    <C.Container>
      <CircularProgress />
      <p>Parece que tivemos problemas com as suas questões.</p>
      <Link to="/">Tente acessar novamente</Link>
    </C.Container>
  );
}

export default Loading;
