import React from 'react';
import "./line.css";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import Serie from './serie';
import { useRef, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function Line() {
    const scrollContainer = useRef(null);
    const [scrolling, setScrolling] = useState({ direction: null });

    const scrollLeft = () => {
        scrollContainer.current.scrollLeft -= 3; // Ajustez cette valeur en fonction de la vitesse de défilement souhaitée
    };

    const scrollRight = () => {
        scrollContainer.current.scrollLeft += 3; // Ajustez cette valeur en fonction de la vitesse de défilement souhaitée
    };

    useEffect(() => {
        const scrollInterval = setInterval(() => {
            if (scrolling.direction === 'left') {
                scrollLeft();
            } else if (scrolling.direction === 'right') {
                scrollRight();
            }
        }, 1); // Ajustez cette valeur en fonction de la fréquence de défilement souhaitée

        return () => clearInterval(scrollInterval); // Nettoie l'intervalle lorsque le composant est démonté
    }, [scrolling]);

    return (
        <div>
            <h2 className="line-title text-primary">Mon titre</h2>
            <div className='StackContainer position-relative'>
                <button className='ScrollButton ScrollButtonLeft'
                    onClick={scrollLeft}
                    onMouseDown={() => setScrolling({ direction: 'left' })}
                    onMouseUp={() => setScrolling({ direction: null })}
                    onMouseLeave={() => setScrolling({ direction: null })}
                ></button>
                <Stack direction='horizontal' className='mystackscroll' gap={3} ef={scrollContainer}>
                    <Stack direction='horizontal' gap={3} className='mystack' ref={scrollContainer}>
                        <Serie id={1} />
                        <Serie id={2} />
                        <Serie id={3} />
                        <Serie id={4} />
                        <Serie id={5} />
                        <Serie id={6} />
                        <Serie id={7} />
                    </Stack>
                </Stack>
                <button className='ScrollButton ScrollButtonRight'
                    onClick={scrollRight}
                    onMouseDown={() => setScrolling({ direction: 'right' })}
                    onMouseUp={() => setScrolling({ direction: null })}
                    onMouseLeave={() => setScrolling({ direction: null })}

                ></button>

            </div>
        </div>
    );
}

export default Line;