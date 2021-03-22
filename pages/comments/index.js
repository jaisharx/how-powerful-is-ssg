import Header from 'components/Header';
import NextHead from 'components/NextHead';
import APIURl from 'lib/URL';
import React from 'react';
import { Container } from 'react-bootstrap';

export default function Posts({ posts }) {
    return (
        <>
            <NextHead title="Comments" />

            <Header info="Below are all the comments." />
            <Container>
                <ol>
                    {posts.map((post) => (
                        <li key={post.id} className="center-list">
                            <a href={`/comments/${post.id}`}>{post.name}</a>
                        </li>
                    ))}
                </ol>
            </Container>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch(`${APIURl}/comments`);
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    };
}
