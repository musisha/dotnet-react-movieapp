import * as React from 'react';
import './Actor.css';
import { IMAGE_BASE_URL } from '../../../config';


interface IProps{
    actor: any;
}

export const Actor: React.FC<IProps> = (props:IProps) => {
    const POSTER_SIZE = "w154";

    return (
    <div className="rmdb-actor">
        <img src={props.actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.actor.profile_path}` : './images/no_image.jpg'}
        alt="non"
        />
        <span className="rmdb-actor-name">{props.actor.name}</span>
        <span className="rmdb-actor-character">{props.actor.character}</span>    
    </div>
)
}