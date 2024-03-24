import React from 'react';
import "./line.css";
import Stack from 'react-bootstrap/Stack';
import Serie from './serie';
import { useRef, useState, useEffect } from 'react';

function sort_ids(ids, type) {
    if (type === 'evenements') {
        return ids.sort((a, b) => b - a);
    } else {
        return ids
    }
}

function Line({ type, line_title }) {
    const scrollContainer = useRef(null);
    const [scrolling, setScrolling] = useState({ direction: null });
    const [ids, setIds] = useState([]);

    const scrollLeft = () => {
        scrollContainer.current.scrollLeft -= 3;
    };

    const scrollRight = () => {
        scrollContainer.current.scrollLeft += 3;
    };

    useEffect(() => {
        fetch(`/${type}`).then(res => res.json()).then(data => {
            setIds(data.id);
            console.log("Ids set to " + data.id);
        }).catch(err => console.error(err));
        setIds([1]);


        const scrollInterval = setInterval(() => {
            if (scrolling.direction === 'left') {
                scrollLeft();
            } else if (scrolling.direction === 'right') {
                scrollRight();
            }
        }, 1);

        return () => clearInterval(scrollInterval);
    }, [scrolling, type]);

    return (
        <div>
            <h2 className="line-title text-primary">{line_title}</h2>
            <div className='StackContainer position-relative'>
                <button className='ScrollButton ScrollButtonLeft'
                    onClick={scrollLeft}
                    onMouseDown={() => setScrolling({ direction: 'left' })}
                    onMouseUp={() => setScrolling({ direction: null })}
                    onMouseLeave={() => setScrolling({ direction: null })}
                ></button>
                <div className='ScrollContainer' ref={scrollContainer}>
                    <Stack direction='horizontal' gap={3} className='mystack'>
                        {

                            sort_ids(ids, type).map(function (id) {
                                console.log("Creating serie with id " + id);
                                return <Serie id={id} type={type} />;
                            }
                            )}
                    </Stack>
                </div>
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