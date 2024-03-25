import React from 'react';
import Header from '../components/header'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Line from '../components/line';
import Image from 'react-bootstrap/Image';
import "./home.css"
import banniere from "../images/banniere_3.png"
import PlayButton from "../images/play-button.png"
import Stack from 'react-bootstrap/esm/Stack';
function Home() {
    return (
        <div>
            <Header />
            {/* <div className='PageTop' >
                <Header />
                <div className='d-none d-md-block position-relative'>
                    <Image src={banniere} className='BackImage '></Image>

                    <div className='TextOverImage' >
                        <div>
                            <h2 className="text-white ">Bienvenue sur le site de Bedflix</h2>
                            <h4 className="text-white last-text">Retrouvez ici toutes nos informations et présentations</h4>
                        </div>

                        <Button className='btn-light'>
                            <img className='PlayButtonImage' src={PlayButton} alt="Lien vers les présentations" />

                            Vers la vidéo ?
                        </Button>


                    </div>

                </div>
            </div> */}

            <div className='LinesContainer'>
                <Stack direction='vertical' gap={3}>
                    <Line type="evenements" line_title="Events" />
                    {/* <Line type="membres" line_title="Vos listeux préférés" /> */}
                    <Line type="poles" line_title="Les Pôles" />
                </Stack>
            </div>


        </div>
    );
}

export default Home;
