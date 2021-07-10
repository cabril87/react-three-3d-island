import { Canvas } from '@react-three/fiber';
import './App.css';

import { OrbitControls, Stars } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Suspense } from 'react';
import Model from './Scene';





function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 50, 50], near: 1, far: 100000 }}>
        <gridHelper args={[100, 100, `white`, `gray`]} divisions={10} />
        <OrbitControls />
        <ambientLight />
        <Stars radius={5000} count={50900} factor={4} />
        <Physics>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
        </Physics>



      </Canvas>

    </>
  );
}

export default App;
