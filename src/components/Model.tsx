import { FC } from 'react'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Model: FC<GroupProps> = (props) => {
  // Remplacez le chemin par l'emplacement de votre fichier GLB
  const { scene } = useGLTF('/cube.glb')
  
  return <primitive object={scene} {...props} />
}

export default Model