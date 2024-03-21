import React from 'react';
import "./line.css";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import Serie from './serie';

function Line() {
    return (
        <Container className="line-container">
            <Stack direction='horizontal' gap={3} className='mystack'>

                <Serie id={1} />

            </Stack>
        </Container >
    );
}

export default Line;