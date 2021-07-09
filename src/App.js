// import Model from './components/Three/Scene';
import Player from "./Player"
import ModelHut from './Hut';
import React, { Suspense } from 'react';
import { Physics } from "@react-three/cannon"
import { Canvas, } from '@react-three/fiber';
import Lights from './components/Three/Lights';
import { OrbitControls, Stars } from '@react-three/drei';
import './App.css';

function App() {
  return (
    <>

      <Canvas
        colorManagement
        shadowMap
        shadows
        
        
      camera={{position: [0,0,4454], near: 1 , far: 51500}}

      >
        
        <Stars />
        <OrbitControls />
        <Lights />
          {/* <Model /> */}
          <Physics>
        <Suspense fallback={null}>

          <Player />
          <ModelHut />
        </Suspense>
          </Physics>


      </Canvas>
    </>
  );
}

export default App;
