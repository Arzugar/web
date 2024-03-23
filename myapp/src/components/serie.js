import React, { useState, useEffect } from 'react';
import "./serie.css";
import Container from 'react-bootstrap/Container';
import ReactDOM from 'react-dom';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import PlayButton from "../images/play-button.png"
import { Link } from 'react-router-dom';

function CustomModal({ show, onClose, children, data }) {
    function unshow() {
        document.body.classList.remove('modal-open');
    }

    useEffect(() => {
        if (show) {
            document.body.classList.add('modal-open');
        } else {
            unshow();
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
                    <img className='ZoomedImage' src={data.image} alt="Bigpic" />
                    <div className='serie-title text-primary'>
                        <h1>data.title</h1>
                        <Button as={Link} to='/construction' className='btn-light' onClick={unshow}>
                            <img className='PlayButtonImage' src={PlayButton} alt="Ne mêne à rien" />

                            Mystère ...
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
                                <span className='info-title'>
                                    {data.info_2_title}
                                </span>
                                <span >{data.info_2}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <span className='synopsis'>
                                    {data.description}
                                </span>


                            </div>
                            <div className="col-4">
                                <span className='info-title'>
                                    {data.info_2_title}
                                </span>
                                <span >{data.info_2}</span>

                            </div>
                        </div>
                    </Container>
                </div>
            </div>

        </div >,
        document.body
    );
}

function Serie({ type, id }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`/${type}/${id}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => {
                // Si jamais le serveur ne répond pas
                console.error("Pas réussi à récup le data:", error);
                // Valeurs par défaut
                setData({
                    "Title": "Titre par défaut",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
                    "image": 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F149367133.v2.pressablecdn.com%2Fwp-content%2Fuploads%2F2021%2F02%2Frick-astley-never-gonna-give-you-up-4k.jpg&f=1&nofb=1&ipt=a23aa21be1e1262ce10d68d5ba6817f9c4390d6b3565a289d9e79c4f50a01ae4&ipo=images',
                    "rating": 100,
                    "year": 2021,
                    "info_1_title": "Info 1 titre",
                    "info_1": "Info 1",
                    "info_2_title": "Info 2 titre",
                    "info_2": "Info 2",

                });
            });
    }, [id]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Image src={data.image} alt="pic" className="BaseImage" onClick={handleShow} />
            <CustomModal className='' show={show} onClose={handleClose} data={data} />
        </>
    );
}




export default Serie;