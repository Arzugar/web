import React, { useState, useEffect } from 'react';
import "./serie.css";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

function Serie({ id }) {
    let [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch(`/api/series/${id}`)
    //         .then(response => response.json())
    //         .then(data => setData(data));
    // }, [id]);

    useEffect(() => { }, [id]);


    data = {
        "Title": "Titre",
        "content": "Contenu",
        "image": "https://via.placeholder.com/150"
    }
    const renderOver = () => {
        //console.log("renderOver");
        return (

            <Tooltip className="machin" id="button-tooltip-2">Check out this avatar</Tooltip>

        );
    }
        ; // doit renvoyer l'overlay correspondant

    return (
        <>
            <OverlayTrigger

                placement="top"
                overlay={renderOver}>

                {({ ref, ...triggerHandler }) => (
                    <Card {...triggerHandler} className="bg-dark text-white mycard">
                        <Card.Img src={data.image} alt="Image de la card" />
                        <Card.ImgOverlay>
                            <Card.Title ref={ref} > {data.Title}</Card.Title>
                            <Card.Text>
                                {data.content}
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                )}


            </OverlayTrigger>
        </>
    );
}

export default Serie;