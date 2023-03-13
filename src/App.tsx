import React, { useState } from 'react';
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
import ProductDesc from './PrductsDesc';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Sizes from './ShoeSizes';
import MusicPlayer from './MusicPlayer';
import Player from './AudioPlayer';


const jump = keyframes`
  0% {
    top: 0;
  }
  50% {
    top: -20px;
  }
  100% {
    top: 0;
  }
`;

const ActionContainer = styled.div`
bottom : 40px;
right : 60px;
position :absolute;
display : flex;
flex-direction: column;
align-items : center;
`

const Button = styled.button<{ color: String }>`
font-size: 1rem;
text-transform: uppercase;
font-family: 'Russo One', sans-serif;
text-align: center;
letter-spacing: .2rem;
color: ${(props) => (props.color ? props.color : '#fff')};
padding : 12px 14px;
cursor: pointer;
border : none;
border-radius : 8px;
align-items : center;
margin-top : 5px;


  &:hover {  
    span {
      position: relative;
      animation: jump 1.75s infinite;
    }
  
    span:nth-child(2) {
      animation-delay: 0.3s;
    }
  
    span:nth-child(3) {
      animation-delay: 0.5s;
    }
  
    span:nth-child(4) {
      animation-delay: 0.7s;
    }
  
    span:nth-child(5) {
      animation-delay: 0.9s;
    }
  
    @keyframes jump {
      0% {
        top: 0;
      }
      50% {
        top: -4px;
      }
      100% {
        top: 0;
      }
    }
  }

`


const App = () => {

  const selectedColor = useSelector((state: RootState) => state.app.selectedColor);


  const [ProductsLeft, setProductsL] = useState<Product[]>([
    {
      id: 1,
      name: 'ALVEA',
      imageUrl: shoe1,
      price: 650,
      // modelUrl: quartzModel
    },
    {
      id: 2,
      name: 'Adidas',
      imageUrl: shoe2,
      price: 750,
      // modelUrl: quartzModel
    },
    {
      id: 3,
      name: 'Shoe3',
      imageUrl: shoe3,
      price: 650,
      // modelUrl: quartzModel
    },
    {
      id: 4,
      name: 'Shoe4',
      imageUrl: shoe4,
      price: 750,
      // modelUrl: quartzModel
    }
  ])

  const onSizeSelected = (size: number) => {
    console.log(size, '>>> Selected Size')
  }


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

        <ProductDesc />

        <ActionContainer>
          <Sizes onSizeSelected={onSizeSelected} />
          <Button color={selectedColor.hex}>
            <span>P</span><span>R</span><span>E</span><span>O</span><span>R</span><span>D</span><span>E</span><span>R</span> <span>N</span><span>O</span><span>W</span>
          </Button>
        </ActionContainer>
        <AudioContainer>
          <Player />
        </AudioContainer>


        <ModelContainer>
          <ProductModel />
        </ModelContainer>





      </MainContainer>
    </>

  );
};



export default App;

const MainContainer = styled.div`
position : relative;
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
display : flex;
flex-direction : column;
align-items : center;
 
  `
const AudioContainer = styled.div`
position : absolute;
bottom : 40px;
left : 40px;
width : 28rem;
$rhap_theme-color: #fff !important; 

.rhap_container{
  background-color : transparent !important;
}

`