import { MenuButton } from "../component/MenuButton"
import { CircleUserRound } from 'lucide-react';
import { Gamepad2 } from 'lucide-react';

import { createRoot } from 'react-dom/client'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { useRef, useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '@react-three/drei';
import { GridHelper } from 'three';
import { Text } from 'drei';





function ControlCenter() {
  return (
    <div className=' mb-5 w-full  flex items-center border-8 border-emerald-300 
      rounded-full bg-lime-200 shadow-md'>
      <div className='h-20 w-32 ' />
        <div className='h-20 w-full flex flex-col justify-center items-center'>
          <Gamepad2 size="50"/>
          <h4 className='font-bold text-white'>YuGiYo</h4>
        </div>
        <div className='flex flex-col justify-center items-center 
          h-20 w-32 bg-emerald-200 rounded-full px-5 hover:bg-red-300'>
          <CircleUserRound size="40" className="cursor-pointer" />
          <h4 className='font-bold text-white'>Dhsking</h4>
        </div> 
    </div>
  )
}

function OptionMenu() {
  return(
      <div className='flex flex-col justify-center items-center 
      py-10 w-full mx-20 '>
        <MenuButton goal="JOUER" />
        <MenuButton goal="RECOMMENCER" />
        <MenuButton goal="PARAMETRE" />
        <MenuButton goal="QUITTER" />
      </div>
  )
}

function RotatingMesh() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      // meshRef.current.rotation.x += 0.05;
      // meshRef.current.rotation.z += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} >
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );  
}

function Load3Danimation() {
  const monster = useLoader(GLTFLoader, 'src/assets/yu-gi-oh_slifer_the_sky_dragon_osiris.glb');
  const modelRef = useRef();

  useEffect(() => {
    if (modelRef.current) {
      const model = modelRef.current;
      model.rotateY(Math.PI / 2);
      model.scale.set(0.2, 0.2, 0.2);
      model.position.set(-55, 104, -15);
      model.traverse((node) => {
        if (node.isMesh) {
          node.castShadow = true;
          node.receiveShadow = true;
        }
      });
    }
  }, [monster]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <primitive object={monster.scene} ref={modelRef} />;
}

export const MainMenu = () => {

  return (
    <div id="main" className="w-screen h-screen flex flex-col justify-center">
      <div id="canvas-container" className="w-full h-full">
        <Canvas camera={{ position: [0, 150, 300], fov: 70, near: 0.1, far: 1000 }}
        className="bg-red-900" shadows={true}>
          <ambientLight color={0xffffff} intensity={7} />
          <directionalLight color={0xffffff} intensity={18}/>
          <Load3Danimation />
          <OrbitControls />
          <primitive object={new GridHelper(300, 10, 0xff0000, 0x00ff00)} />

          <Text color="black" fontSize={1} maxWidth={200} lineHeight={1} letterSpacing={0.02}
          textAlign={'center'} anchorX="center" anchorY="middle"> Votre texte ici </Text>

        </Canvas>
      </div>
    </div>
    
  )
}