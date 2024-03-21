import React, { useState, useEffect } from 'react';
import "./serie.css";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import ReactDOM from 'react-dom';

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
    return (
        <Card className="bg-dark text-white mycard">
            <Card.Img src={data.image} alt="Image de la card" />
            <Card.ImgOverlay>
                <Card.Title >{data.Title}</Card.Title>
                <Card.Text>
                    {data.content}
                </Card.Text>
            </Card.ImgOverlay>
        </Card>);
}

export default Serie;