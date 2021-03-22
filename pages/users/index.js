import Header from 'components/Header';
import NextHead from 'components/NextHead';
import APIURl from 'lib/URL';
import React from 'react';
import { Container } from 'react-bootstrap';

export default function Posts({ users }) {
    return (
        <>
            <NextHead title="Users" />

            <Header info="Below are all the users." />
            <Container>
                <ol>
                    {users.map((user) => (
                        <li key={user.id} className="center-list">
                            <a href={`/users/${user.id}`}>{user.name}</a>
                        </li>
                    ))}
                </ol>
            </Container>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch(`${APIURl}/users`);
    const users = await res.json();

    return {
        props: {
            users,
        },
    };
}
