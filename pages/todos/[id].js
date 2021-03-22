import NextHead from 'components/NextHead';
import APIURl from 'lib/URL';
import { Container, Card } from 'react-bootstrap';

export default function Post({ post }) {
    return (
        <>
            <NextHead />

            <Container className="flex-center">
                <Card>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.completed.toString()}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export async function getStaticPaths() {
    const res = await fetch(`${APIURl}/todos`);
    const posts = await res.json();

    const paths = posts.map((post) => {
        const idString = post.id.toString();
        return {
            params: {
                id: idString,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`${APIURl}/todos/${params.id}`);
    const post = await res.json();

    return {
        props: {
            post,
        },
    };
}
