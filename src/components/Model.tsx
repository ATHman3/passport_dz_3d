import { FC } from 'react'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Model: FC<GroupProps> = (props) => {
  const modelPath = `passport.glb`
  const { scene } = useGLTF(modelPath)
  
  return <primitive object={scene} {...props} />
}

// Preload the model
useGLTF.preload(`passport.glb`)

export default Model