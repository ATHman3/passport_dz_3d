// src/components/Scene.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls,OrbitControlsProps } from '@react-three/drei'
import { FC } from 'react'
import Passport from './Passport'

const Scene: FC<OrbitControlsProps> = (props) => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[0, 0, 1]} />
            <Passport scale={2.4} />
            <OrbitControls {...props}/>
        </Canvas>
    )
}

export default Scene