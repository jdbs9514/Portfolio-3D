import { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import dragonScene from '../assets/3d/dragon.glb';

const Dragon = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(dragonScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if(isRotating) {
      actions['Take 001'].play();
    } else {
      actions['Take 001'].play();
    }
  }, [actions, isRotating])
  
  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.1 + 1  ;

    // Check if the bird reached a certain endpoint relative to the camera
    if (ref.current.position.x > camera.position.x + 5) {
      // Change direction to backward and rotate the bird 180 degrees on the y-axis
      ref.current.rotation.y = Math.PI;
    } else if (ref.current.position.x < camera.position.x - 5) {
      // Change direction to forward and reset the bird's rotation
      ref.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (ref.current.rotation.y === 0) {
      // Moving forward
      ref.current.position.x += 0.005;
      ref.current.position.z -= 0.005;
    } else {
      // Moving backward
      ref.current.position.x -= 0.002;
      ref.current.position.z += 0.002;
    }
  });

  return (
    <mesh {...props} ref={ref} position={[0, 1.5, 0]} scale={[0.4, 0.4, 0.4]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Dragon;
