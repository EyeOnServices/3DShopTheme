import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setSelectedProduct } from '../store/appSlice';


// Define the data structure for product information
export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    modelUrl?: string;
    price?: number;
}

// Define the props for the component
interface Props {
    products: Product[];
}

// Define the styled components for the product buttons
const ProductButton = styled.img<{ isActive: boolean }>`
  width: 120px;
  height: 120px;
  opacity: ${(props) => (props.isActive ? 0.9 : 0.4)};
  transition: opacity 0.3s ease-in;
  cursor : pointer;
`;

const ProductPrice = styled.h4<{ isActive: boolean }>`
  opacity: ${(props) => (props.isActive ? 0.9 : 0)};
  transition: opacity 0.3s ease-in;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin-top : 4px;
  color : #fff;
`;


// Define the styled component for the 3D view container
const ThreeContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductView: React.FC<Props> = ({ products }) => {

    const [selectedProduct, setSelectedProduct1] = useState<Product | null>(null);
    const dispatch = useDispatch();
    const handleProductSelect = (product: Product) => {
        setSelectedProduct1(product);
        dispatch(setSelectedProduct(product));
    };
    // // Initialize the scene and camera on mount
    // useEffect(() => {
    //     if (products.length > 0) {
    //         dispatch(setSelectedProduct(products[0]));
    //     }
    // }, [dispatch, products]);

    return (
        <>
            <div className='products-pane'>
                {products.map((product) => (
                    <div className='product-set'>
                        <ProductButton
                            src={product.imageUrl}
                            key={product.id}
                            isActive={selectedProduct?.id === product.id || false}
                            onClick={() => handleProductSelect(product)}
                        />
                        <ProductPrice isActive={selectedProduct?.id === product.id || false}>
                            ${product?.price}.00
                        </ProductPrice>
                    </div>
                ))}
            </div>

        </>
    );
};

export default ProductView;

