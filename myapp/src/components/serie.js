import React, { useState, useEffect } from 'react';
import "./serie.css";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PH from '../images/Infographie.png'
import PlayButton from "../images/play-button.png"

function CustomModal({ show, onClose, children, data }) {
    useEffect(() => {
        if (show) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [show]);

    if (!show) {
        return null;
    }


    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    return ReactDOM.createPortal(
        <div className="custom-modal" onClick={onClose}>
            <div className="custom-modal-content" onClick={stopPropagation}>
                <Button className='close-button' onClick={onClose}>x</Button>
                <div className='big-image-container'>
                    <img className='ZoomedImage' src={PH} alt="image de la série" />
                    <div className='serie-title text-primary'>
                        <h1>Pole infographie</h1>
                        <Button className='btn-light'>
                            <img className='PlayButtonImage' src={PlayButton} alt="Ne mêne à rien" />

                            Vers la vidéo ?
                        </Button>
                    </div>
                </div>
                <div className='descrContainer'>
                    <Container className='description text-primary'>
                        <div className="row">
                            <div className="col-8">
                                <span className='rating'>
                                    Recommandé à {data.rating}%
                                </span>
                                <span className='year'>
                                    {data.year}
                                </span>

                            </div>
                            <div className="col-4">
                                <span className='casting-title'>
                                    Casting :
                                </span>
                                <span >{data.casting}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <span className='synopsis'>
                                    {data.description}
                                </span>


                            </div>
                            <div className="col-4">
                                <span className='casting-title'>
                                    Genre :
                                </span>
                                <span >{data.genre}</span>

                            </div>
                        </div>
                    </Container>
                </div>
            </div>

        </div >,
        document.body
    );
}

function Serie({ id }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`/api/series/${id}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => {
                // Si jamais le serveur ne répond pas
                console.error("Error fetching data:", error);
                // Valeurs par défaut
                setData({
                    "Title": "Titre par défaut",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
                    "image": ''
                });
            });
    }, [id]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        // faire en sorte que l'image s'agrandisse quand on passe la souris dessus
        <>
            <Image src={PH} alt="image de la série" className="BaseImage" onClick={handleShow} />
            <CustomModal className='' show={show} onClose={handleClose} data={data}>


                {/* Ajoutez ici d'autres informations que vous voulez afficher dans la fenêtre contextuelle */}
            </CustomModal >
        </>
    );
}




export default Serie;