import { FC } from 'react'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const passport: FC<GroupProps> = (props) => {
  const modelPath = `passport_blank.glb`
  const { scene } = useGLTF(modelPath)
  
  return <primitive object={scene} {...props} />
}

// Preload the model
useGLTF.preload(`passport_blank.glb`)

export default passport