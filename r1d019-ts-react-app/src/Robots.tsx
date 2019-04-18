import * as React from 'react';
import { IRobot } from './App';

const Robots = ({ robots }: {robots: Array<IRobot>}) => {
    console.log(robots)
    return (
        <div id="robot">
        <p>Hurray!</p>
        {robots.map((robot, i) => {
            return <p key={i}><span>{robot.id}: </span><span>{robot.name}</span></p>
        })}
        </div>
    )
}



export default Robots;
