import React, { useState } from 'react';
import styled from 'styled-components';


// Define the data structure for product information
export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    modelUrl?: string;
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
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const handleProductSelect = (product: Product) => {
        setSelectedProduct(product);

    };

    // Initialize the scene and camera on mount
    React.useEffect(() => {

        if (products.length > 0) {
            setSelectedProduct(products[0]);
            // addProductToScene(products[0]);
        }
    }, []);

    return (
        <>
            <div className='products-pane'>
                {products.map((product) => (
                    <ProductButton
                        src={product.imageUrl}
                        key={product.id}
                        isActive={selectedProduct?.id === product.id || false}
                        onClick={() => handleProductSelect(product)}
                    />

                ))}
            </div>

        </>
    );
};

export default ProductView;

