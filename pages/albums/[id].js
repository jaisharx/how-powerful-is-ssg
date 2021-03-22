import NextHead from 'components/NextHead';
import APIURl from 'lib/URL';
import { Container, Card } from 'react-bootstrap';

export default function Post({ album }) {
    console.log(album);
    return (
        <>
            <NextHead />

            <Container className="flex-center">
                <Card>
                    <Card.Body>
                        <Card.Title>{album.title}</Card.Title>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export async function getStaticPaths() {
    const res = await fetch(`${APIURl}/albums`);
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
    const res = await fetch(`${APIURl}/albums/${params.id}`);
    const album = await res.json();

    return {
        props: {
            album,
        },
    };
}
