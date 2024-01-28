import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';
import Dragon from '../models/Dragon';
import HomeInfo from '../components/HomeInfo';
import breath from '../assets/sound/breath.mp3';
import soundon from '../assets/icons/soundon.png';
import soundoff from '../assets/icons/soundoff.png';

const Home = () => {
  const audioRef = useRef(new Audio(breath));
  audioRef.current.volume = 0.2;
  audioRef.current.loop = true;
  const [isRotating, setRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setisPlayingMusic] = useState(false);

  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.03, 0.03, 0.03];
    } else {
      screenScale = [0.04, 0.04, 0.04];
    }

    return [screenScale, screenPosition, rotation];
  }

  const adjustDragonForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4]
    }

    return [screenScale, screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  const [dragonScale, dragonPosition] = adjustDragonForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={0} />
          <ambientLight intensity={0.5} />
          <pointLight />
          <spotLight />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000" intensity={4} />
          <Dragon
            isRotating={isRotating}
            dragonScale={dragonScale}
            dragonPosition={dragonPosition}
            rotation={[0, 20, 0]}
          />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setRotating={setRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-28 left-0 right-0 z-0 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => setisPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home