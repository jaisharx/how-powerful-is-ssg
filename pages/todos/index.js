import Header from 'components/Header';
import NextHead from 'components/NextHead';
import APIURl from 'lib/URL';
import React from 'react';
import { Container } from 'react-bootstrap';

export default function Posts({ todos }) {
    return (
        <>
            <NextHead title="Todos" />

            <Header info="Below are all the todos." />
            <Container>
                <ol>
                    {todos.map((todo) => (
                        <li key={todo.id} className="center-list">
                            <a href={`/todos/${todo.id}`}>{todo.title}</a>
                        </li>
                    ))}
                </ol>
            </Container>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch(`${APIURl}/todos`);
    const todos = await res.json();

    return {
        props: {
            todos,
        },
    };
}
