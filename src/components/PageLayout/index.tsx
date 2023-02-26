import { Outlet } from 'react-router-dom';
import { Container } from './styles';

export function PageLayout() {
  return (
    <>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
