// src/components/Scene.tsx
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls,OrbitControlsProps } from '@react-three/drei'
import { FC } from 'react'
import Passport from './Passport'

const Scene: FC<OrbitControlsProps> = (props) => {
    return (
        <Canvas>
            <ambientLight />
            
            <Passport scale={2.4} />
            <OrbitControls {...props}/>
            <Environment preset="lobby" />
        </Canvas>
    )
}

export default Scene