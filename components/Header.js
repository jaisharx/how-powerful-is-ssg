import APIURl from 'lib/URL';
import { Container } from 'react-bootstrap';

export default function Header({ info }) {
    return (
        <Container>
            <h1 className="text-center mt-4">{APIURl}</h1>
            <p className="text-center">{info}</p>
            <hr />
        </Container>
    );
}
