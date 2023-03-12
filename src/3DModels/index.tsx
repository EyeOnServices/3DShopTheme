import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import shoe1 from '../Product_Buttons/APATITE.png'
import shoe2 from '../Product_Buttons/CALCITE.png'
import shoe3 from '../Product_Buttons/COPPER.png'
import shoe4 from '../Product_Buttons/CALCITE.png'
import { Product } from '../3DProducts';
import { Model } from './QUARTZ';
import * as THREE from 'three'
import { Canvas, useThree } from '@react-three/fiber';
import { ContactShadows, Float, OrbitControls } from '@react-three/drei';


function Controls() {
    const {
        camera,
        gl: { domElement },
    } = useThree();

    return <OrbitControls args={[camera, domElement]} />
}

const ProductModel = () => {

    return (
        <>



            {/* <ProductModelView src={shoe1} /> */}
            <Canvas style={{ width: '700px', height: '700px', marginTop: '20px', alignItems: 'center' }} >
                <ambientLight />
                <pointLight position={[2, 2, 5]} />
                <pointLight position={[-3, -3, 2]} />
                <Controls />
                <Model rotation={[0, Math.PI/2, 0]} />
                {/* <Float speed={1.2} rotationIntensity={1.3} floatIntensity={1.5} position={[0, 0, 0]}>
                       
                    </Float> */}
                {/* <ContactShadows position={[0, -0.3, 0]} blur={2.5} scale={10} far={1} /> */}
            </Canvas>


            {/* <Canvas dpr={[1, 2]} shadows style={{ width: '700px', height: '700px', marginTop: '20px', alignItems: 'center' }}>
                <fog attach="fog" args={['#101010', 0, 10]} />
                <Environment preset="city" />
                <group position={[0, -0.5, 0]}>
                    <Model scale={40} position={[0, 0, 0]} />
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                        <planeGeometry args={[10, 10]} />
                        <MeshReflectorMaterial
                            blur={[400, 100]}
                            resolution={1024}
                            mixBlur={1}
                            opacity={2}
                            depthScale={1.1}
                            minDepthThreshold={0.4}
                            maxDepthThreshold={1.25}
                            roughness={1}
                        />
                    </mesh>
                    <mesh receiveShadow rotation-x={-Math.PI / 2} position={[0, 0.001, 0]}>
                        <planeGeometry args={[10, 10]} />
                        <shadowMaterial transparent color="black" opacity={0.4} />
                    </mesh>
                </group>
                <OrbitControls
                    makeDefault
                    autoRotate
                    autoRotateSpeed={0.3}
                    maxPolarAngle={Math.PI / 2.3}
                    minPolarAngle={Math.PI / 2.3}
                    enableZoom={false}
                    enablePan={false}
                />
                <PerspectiveCamera makeDefault fov={65} position={[0, 0, 4]}>
                    <spotLight position={[10, 10, 5]} angle={0.15} penumbra={1} intensity={10} castShadow shadow-mapSize={[2048, 2048]} />
                </PerspectiveCamera>
            </Canvas> */}

        </>
    );
};


const ProductModelView = styled.img`
  width: 800px;
  height: 800px;
  
`;

const Container = styled.div`
  position : absolute;
  display: flex;

  margin-top : 200px;
`;

export default ProductModel;
