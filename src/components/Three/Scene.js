/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: ConradJustin (https://sketchfab.com/ConradJustin)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/peachy-balloon-gift-3c8b73ebbb3748d39994fc87bc945474
title: Peachy Balloon (gift)
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'







export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('ship/scene.gltf')
  const { actions} = useAnimations(animations, group)



useEffect(() => {
  actions.Scene.play()
}, [actions])

  
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0, 0]} rotation={[1.57, 0, -Math.PI / 2]} scale={[1, 1, 1]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <group position={[0, 0, 0]} rotation={[0, 0, -Math.PI / 2]} scale={100}>
            <primitive object={nodes._rootJoint} />
            <skinnedMesh
              geometry={nodes.Object_9.geometry}
              material={materials.airship}
              skeleton={nodes.Object_9.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_10.geometry}
              material={nodes.Object_10.material}
              skeleton={nodes.Object_10.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_11.geometry}
              material={nodes.Object_11.material}
              skeleton={nodes.Object_11.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
