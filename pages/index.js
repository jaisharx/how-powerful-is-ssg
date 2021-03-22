import Header from 'components/Header';
import NextHead from 'components/NextHead';
import APIResources from 'lib/APIResources';
import { Card, Container } from 'react-bootstrap';

export default function Home() {
    return (
        <>
            <NextHead tilte="How powerful is SSG??" />

            <Header info="Below is the list of all the endpoints available." />
            <Container className="main-grid">
                {APIResources.map((resource) => (
                    <Card href={resource} className="ml-1 mt-1">
                        <Card.Body>
                            <Card.Title as="a" href={resource}>
                                {resource}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </>
    );
}
