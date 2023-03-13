import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/store";

const ProductContainer = styled.div`
position : absolute;
margin-left : 16rem;
margin-top : 10rem; 
`

const ProductName = styled.div`
  font-family: 'Broadway Italic', sans-serif;
  font-size: 68px;
  font-weight: bold;
  color: #FFFFFF;
  text-shadow: 0px 0px 10px #FFFFFF;
`

const ProductColorName = styled.div`
font-family: Arial, sans-serif;
  font-size: 28px;
  font-weight: bold;
  color: #FFFFFF;
  margin-top: 5px;
  margin-left: 8rem;
`

const ProductDesc = () => {

    const selectedColor = useSelector((state: RootState) => state.app.selectedColor);
    const selectedProduct = useSelector((state: RootState) => state.app.selectedProduct);

    console.log(selectedColor, '<<< color desc')
    console.log(selectedProduct, '<<< color product')
    return (
        <ProductContainer>
            <ProductName>
                {selectedProduct.name}
            </ProductName>
            <ProductColorName>
                {selectedColor.name}
            </ProductColorName>

        </ProductContainer>
    )
}

export default ProductDesc;