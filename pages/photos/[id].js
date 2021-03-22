import NextHead from 'components/NextHead';
import APIURl from 'lib/URL';
import { Container, Card } from 'react-bootstrap';

export default function Post({ post }) {
    return (
        <>
            <NextHead />

            <Container className="flex-center">
                <Card>
                    <Card.Img variant="top" src={post.thumbnailUrl} />

                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.body}</Card.Text>
                        <Card.Text>{post.url}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export async function getStaticPaths() {
    const res = await fetch(`${APIURl}/photos`);
    const photos = await res.json();

    const paths = photos.map((photo) => {
        const idString = photo.id.toString();
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
    const res = await fetch(`${APIURl}/photos/${params.id}`);
    const post = await res.json();

    return {
        props: {
            post,
        },
    };
}
