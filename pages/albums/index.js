import Header from 'components/Header';
import NextHead from 'components/NextHead';
import APIURl from 'lib/URL';
import React from 'react';
import { Container } from 'react-bootstrap';

export default function Posts({ data }) {
    return (
        <>
            <NextHead title="Albums" />

            <Header info="Below are all the albums." />
            <Container>
                <ol>
                    {data.map((item) => (
                        <li key={item.id} className="center-list">
                            <a href={`/albums/${item.id}`}>{item.title}</a>
                        </li>
                    ))}
                </ol>
            </Container>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch(`${APIURl}/albums`);
    const data = await res.json();

    return {
        props: {
            data,
        },
    };
}
