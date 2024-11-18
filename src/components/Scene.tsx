// src/components/Scene.tsx
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { FC } from 'react'
import Model from './Model'

const Scene: FC = () => {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[0, 0, 1]} />
            <Model scale={2.4} />
            <OrbitControls
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
                target={[0, 0, 0]}
            />
        </Canvas>
    )
}

export default Scene