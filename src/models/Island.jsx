/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Michał Solarek (https://sketchfab.com/misiek13)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/stylized-little-japanese-town-street-200fc33b8a2b4da98e71590feeb255a8
Title: Stylized Little Japanese Town Street
*/
// stylized_little_japanese_town_street
import { a } from '@react-spring/three';
import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import islandScene from '../assets/3d/city.glb';

const Island = ({ isRotating, setRotating, setCurrentStage, ...props }) => {
  const islandRef = useRef();
  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setRotating(true);

    const clientX = e.touches ? e.touches[0] : e.clientX;
    lastX.current = clientX;
  }

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setRotating(false);
  }

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0] : e.clientX;

      const delta = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    if (e.Key === 'ArrowLeft') {
      if (!isRotating) setRotating(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
      rotationSpeed.current = 0.0125;
    } else if (e.Key === 'ArrowRight') {
      if (!isRotating) setRotating(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.0125;
    }
  }

  const handleKeyUp = (e) => {
    if (e.Key === 'ArrowLeft' || e.Key === 'ArrowRight') {
      setRotating(false);
    }
  }

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;

      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  })

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group ref={islandRef} {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-20.22, 305.439, -19.554]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={2.54}
          >
            <group position={[-96.786, -52.619, -120.32]}>
              <mesh
                geometry={nodes.defaultMaterial_3.geometry}
                material={materials["13___Default"]}
              />
              <mesh
                geometry={nodes.defaultMaterial_4.geometry}
                material={materials["13___Default"]}
              />
            </group>
            <mesh
              geometry={nodes.defaultMaterial.geometry}
              material={materials["08___Default"]}
              position={[50.984, -213.906, -116.617]}
            />
            <mesh
              geometry={nodes.defaultMaterial_1.geometry}
              material={materials["09___Default"]}
              position={[90.99, -81.507, -120.251]}
            />
            <mesh
              geometry={nodes.defaultMaterial_2.geometry}
              material={materials["19___Default"]}
              position={[-70.374, 170.437, -120.251]}
            />
            <mesh
              geometry={nodes.defaultMaterial_5.geometry}
              material={materials["14___Default"]}
              position={[89.515, 123.647, -120.251]}
            />
            <mesh
              geometry={nodes.defaultMaterial_6.geometry}
              material={materials["15___Default"]}
              position={[81.404, 200.691, -120.251]}
            />
            <mesh
              geometry={nodes.defaultMaterial_7.geometry}
              material={materials["01___Default"]}
              position={[91.323, 184.667, -124.505]}
            />
            <mesh
              geometry={nodes.defaultMaterial_8.geometry}
              material={materials["20___Default"]}
              position={[-21.302, 15.657, -119.547]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.999}
            />
            <mesh
              geometry={nodes.defaultMaterial_9.geometry}
              material={materials["07___Default"]}
              position={[-75.078, -189.472, -120.251]}
            />
          </group>
        </group>
      </group>
    </a.group>
  );
}

export default Island;