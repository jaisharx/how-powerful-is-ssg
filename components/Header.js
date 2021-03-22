import { Container } from 'react-bootstrap';

export default function Header({ info }) {
    return (
        <Container>
            <h1 className="text-center mt-4">
                https://jsonplaceholder.typicode.com/
            </h1>
            <p className="text-center">{info}</p>
            <hr />
        </Container>
    );
}
