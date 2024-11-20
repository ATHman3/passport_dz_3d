import React from 'react';
import Scene from './Scene';

const CardScene: React.FC = () => {
    
    return (
        <div id='passport' className='w-[500px] h-[500px] bg-white shadow-2xl '>
          <Scene enableZoom={false} maxPolarAngle = {Math.PI / 2} minPolarAngle = {Math.PI / 2} target = {[0, 0, 0]}/>
        </div>
    );
};

export default CardScene;