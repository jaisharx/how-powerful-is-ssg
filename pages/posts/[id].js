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
                        <Card.Text>{post.body}</Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export async function getStaticPaths() {
    const res = await fetch(`${APIURl}/posts`);
    const posts = await res.json();

    const paths = posts.map((post) => {
        const idString = post.id.toString();
        return {
            params: {
                id: idString,
            },
        };
    });

    console.log(paths);

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const res = await fetch(`${APIURl}/posts/${params.id}`);
    const post = await res.json();

    console.log(post);

    return {
        props: {
            post,
        },
    };
}
