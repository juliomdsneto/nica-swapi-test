import { Link } from 'react-router-dom';
import { Container } from './styles';

interface ICardProps {
  name: string;
  id: string;
  type: 'characters' | 'films' | 'starships' | 'vehicles' | 'planets';
}

export function Card({
  type,
  name,
  id,

}: ICardProps) {
  return (
    <Container>
      <div className="card-name">
        <Link to={`/${type}/${id}`}>
          <span>{name}</span>
        </Link>
      </div>
    </Container>
  );
}
