import React from 'react';
import Header from '../components/header'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Line from '../components/line';


function Home() {
    return (
        <>
            <Header />
            <Container className="mt-5">
                <div className="position-relative">
                    <img className="big-bg-img img-fluid" src="" alt="background_image" /><img />
                    <div id="text-over-bg" className="position-relative" >
                        <h1 className="text-white">Bienvenue sur le site de la meilleure liste</h1>
                        <h4 className="text-white">Et là c'est un sous-titre, genre une description un peu plus longue</h4>
                        <Button className='btn-light btn-sm' href='/presentations'>
                            Lire l'article
                        </Button>
                    </div>
                </div>
            </Container >
            <Line />
        </>
    );
}

export default Home;
