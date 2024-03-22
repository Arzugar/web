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
function CustomModal({ show, onClose, children }) {
    if (!show) {
        return null;
    }
    const stopPropagation = (e) => {
        e.stopPropagation();
    }

    return ReactDOM.createPortal(
        <div className="custom-modal" onClick={onClose}>
            <div className="custom-modal-content" onClick={stopPropagation}>
                {children}
                <Button className='close-button' onClick={onClose}>x</Button>
            </div>
        </div>,
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
                    "description": "Description par défaut",
                    "image": "https://via.placeholder.com/150"
                });
            });
    }, [id]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Image src={data.image} alt="image de la série" className="BaseImage" onClick={handleShow} />

            <CustomModal show={show} onClose={handleClose}>
                <img src={data.image} alt="image de la série" />
                <p>{data.description}</p>
                {/* Ajoutez ici d'autres informations que vous voulez afficher dans la fenêtre contextuelle */}
            </CustomModal>
        </>
    );
}




export default Serie;