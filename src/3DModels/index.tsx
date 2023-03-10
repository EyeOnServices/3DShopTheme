import React, { useState } from 'react';
import styled from 'styled-components';
import shoe1 from '../Product_Buttons/APATITE.png'
import shoe2 from '../Product_Buttons/CALCITE.png'
import shoe3 from '../Product_Buttons/COPPER.png'
import shoe4 from '../Product_Buttons/CALCITE.png'
import { Product } from '../3DProducts';
import { Model } from './QUARTZ';


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
    const [products, setProducts] = useState<Product[]>([
        {
            id: 1,
            name: 'Shoe1',
            imageUrl: shoe1,
            // modelUrl: quartzModel
        },
        {
            id: 2,
            name: 'Shoe2',
            imageUrl: shoe2,
            // modelUrl: quartzModel
        },
        {
            id: 3,
            name: 'Shoe3',
            imageUrl: shoe3,
            // modelUrl: quartzModel
        },
        {
            id: 4,
            name: 'Shoe4',
            imageUrl: shoe4,
            // modelUrl: quartzModel
        }
    ])
    return (
        <>

            <Container>
                {/* <ProductModelView src={shoe1} /> */}
                <Canvas >
                    <ambientLight />
                    <pointLight position={[2, 2, 5]} />
                    <pointLight position={[-3, -3, 2]} />
                    <Controls />
                    <Float speed={1.2} rotationIntensity={1.3} floatIntensity={1.5}>
                        <Model />
                    </Float>
                    <ContactShadows position={[0, -0.3, 0]} blur={2.5} scale={10} far={1} />
                </Canvas>

            </Container>
        </>
    );
};

const ProductModelView = styled.img`
  width: 800px;
  height: 800px;
  
`;

const Container = styled.div`
position : absolute;
  margin-left : 32rem;
  margin-top : 32rem;
  width: 50rem;
  height: 55rem;
`;

export default ProductModel;
