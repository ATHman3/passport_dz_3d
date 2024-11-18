import { FC } from 'react'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Model: FC<GroupProps> = (props) => {
  const modelPath = `${import.meta.env.BASE_URL}passport.glb`
  const { scene } = useGLTF(modelPath)
  
  return <primitive object={scene} {...props} />
}

// Preload the model
useGLTF.preload(`${import.meta.env.BASE_URL}passport.glb`)

export default Model