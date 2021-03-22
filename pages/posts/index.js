import Header from 'components/Header';
import NextHead from 'components/NextHead';
import APIURl from 'lib/URL';
import React from 'react';
import { Container } from 'react-bootstrap';

export default function Posts({ posts }) {
    return (
        <>
            <NextHead title="Posts" />

            <Header info="Below are all the posts." />
            <Container>
                <ol>
                    {posts.map((post) => (
                        <li key={post.id} className="center-list">
                            <a href={`/posts/${post.id}`}>{post.title}</a>
                        </li>
                    ))}
                </ol>
            </Container>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch(`${APIURl}/posts`);
    const posts = await res.json();

    return {
        props: {
            posts,
        },
    };
}
