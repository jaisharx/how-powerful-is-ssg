import Header from 'components/Header';
import NextHead from 'components/NextHead';
import APIURl from 'lib/URL';
import React from 'react';
import { Container } from 'react-bootstrap';

export default function Posts({ photos }) {
    return (
        <>
            <NextHead title="Photos" />

            <Header info="Below are all the photos." />
            <Container>
                <ol>
                    {photos.map((photo) => (
                        <li key={photo.id} className="center-list">
                            <a href={`/photos/${photo.id}`}>{photo.title}</a>
                        </li>
                    ))}
                </ol>
            </Container>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch(`${APIURl}/photos`);
    const photos = await res.json();

    const subSet = photos.slice(0, 1000);
    return {
        props: {
            photos: subSet,
        },
    };
}
