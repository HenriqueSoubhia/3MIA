import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';


function SpinA() {
  return (
    <>

      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Esperando vc parar de ser otario...
      </Button>
    </>
  );
}

export default SpinA;