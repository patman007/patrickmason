import React from 'react';

import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import './CardComp.css'



function CardComp(props){
    const {title, overview} = props.data;
    
    return(
        <div className='card-group'>
            <Card>
                <CardImg variant="top" src={props.poster} alt={title}/>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardText>{overview}</CardText>
                </CardBody>
            </Card>
         </div>
    );
}

export default CardComp;