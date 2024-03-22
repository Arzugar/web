import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from '../components/header';
const ConstructionPage = () => {
    return (
        <div>
            <Header />
            <Container fluid>
                <h1>Site en construction</h1>
                <img src="chemin_vers_votre_image" alt="Image de construction" />
            </Container>
        </div >
    );
};

export default ConstructionPage;