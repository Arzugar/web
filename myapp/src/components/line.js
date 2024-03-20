import React from 'react';
import "./line.css";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
function Line() {
    return (
        <Container className="line-container">
            <Stack direction='horizontal' gap={3} className='mystack'>
                <Card className="bg-dark text-white mycard">
                    <Card.Img src="https://via.placeholder.com/150" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Titre</Card.Title>
                        <Card.Text>
                            là du content peut-être
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white">
                    <Card.Img src="https://via.placeholder.com/150" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Titre</Card.Title>
                        <Card.Text>
                            là du content peut-être
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white ">
                    <Card.Img src="https://via.placeholder.com/150" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Titre</Card.Title>
                        <Card.Text>
                            là du content peut-être
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white ">
                    <Card.Img src="https://via.placeholder.com/150" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Titre</Card.Title>
                        <Card.Text>
                            là du content peut-être
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>

            </Stack>
        </Container >
    );
}

export default Line;