import NextHead from 'components/NextHead';
import APIURl from 'lib/URL';
import { Container, Card } from 'react-bootstrap';

export default function Post({ comment }) {
    return (
        <>
            <NextHead />

            <Container className="flex-center">
                <Card>
                    <Card.Body>
                        <Card.Title>{comment.name}</Card.Title>
                        <Card.Link>{comment.email}</Card.Link>
                        <Card.Text>{comment.body}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export async function getStaticPaths() {
    const res = await fetch(`${APIURl}/comments`);
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
    const res = await fetch(`${APIURl}/comments/${params.id}`);
    const comment = await res.json();

    return {
        props: {
            comment,
        },
    };
}
