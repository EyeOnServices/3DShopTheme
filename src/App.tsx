import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundController from './BackgroundController';
import ColorWheel from './ColorWheel';
import shoe1 from './Product_Buttons/APATITE.png'
import shoe2 from './Product_Buttons/CALCITE.png'
import shoe3 from './Product_Buttons/COPPER.png'
import shoe4 from './Product_Buttons/CALCITE.png'
import ProductView, { Product } from './3DProducts';
import ProductModel from './3DModels';
import USerModule from './UserModule/index';
import user from './assets/user.png'



const App = () => {


  const [ProductsLeft, setProductsL] = useState<Product[]>([
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
      <MainContainer>
        <BackgroundController>
        </BackgroundController>

        <HeaderContainer>
          <ProductView products={ProductsLeft} />
          <MidContainer>
            <USerModule username='Anish Hassan' email='anish@gmail.com' imageUrl={user} />
            <ColorWheel />
          </MidContainer>

          <ProductView products={ProductsLeft} />
        </HeaderContainer>

        <ModelContainer>
          <ProductModel />
        </ModelContainer>
      </MainContainer>
    </>

  );
};



export default App;

const MainContainer = styled.div`

`


const HeaderContainer = styled.div`
display : flex;
align-items : center;

`

const MidContainer = styled.div`
display : flex;
flex-direction : column;
align-items : center;


`

const ModelContainer = styled.div`
  width: 630px;
  height: 630px;
  display : flex;
  align-items : center;
  position : absolute;

  `
