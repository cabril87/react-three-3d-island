import Model from './Scene';
import React, { Suspense } from 'react';
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
        
        
      camera={{position: [-5,4,4], near: 1 , far: 1500}}

      >
        
        <Stars />
        <OrbitControls />
        <Lights />
        <Suspense fallback={null}>
          <Model />
          
        </Suspense>


      </Canvas>
    </>
  );
}

export default App;
