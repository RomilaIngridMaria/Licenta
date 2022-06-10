import React from 'react'
import { Button } from '../ButtonElement'
import { 
    ProductsContainer,
    ProductsHeading,
    ProductWrapper,
    ProductCard,
    ProductImg, 
    ProductDesc, 
    ProductInfo, 
    ProductTitle,
    ProductPrice
 } from './ProductsElements'

const Products = ({
    id,
    lightBg,
    lightText,
    lightTextDesc,
    heading,
    name1,
    desc1,
    price1,
    button1,
    img2,
    name2,
    desc2,
    price2,
    button2,
    img3,
    name3,
    desc3,
    price3,
    button3,
    img1,
    dark,
    primary,
    darkText,
    headingText
}) => {
  return (
    <ProductsContainer>
        <ProductsHeading>{heading}</ProductsHeading>
        <ProductWrapper>
            <ProductCard>
                <ProductImg src={img1} />
                <ProductInfo>
                    <ProductTitle>{name1}</ProductTitle>
                    <ProductDesc>{desc1}</ProductDesc>
                    <ProductPrice>{price1}</ProductPrice>
                    <Button>{button1}</Button>
                </ProductInfo>
            </ProductCard>
            <ProductCard>
                <ProductImg src={img2} />
                <ProductInfo>
                    <ProductTitle>{name2}</ProductTitle>
                    <ProductDesc>{desc2}</ProductDesc>
                    <ProductPrice>{price2}</ProductPrice>
                    <Button>{button2}</Button>
                </ProductInfo>
            </ProductCard>
            <ProductCard>
                <ProductImg src={img3} />
                <ProductInfo>
                    <ProductTitle>{name3}</ProductTitle>
                    <ProductDesc>{desc3}</ProductDesc>
                    <ProductPrice>{price3}</ProductPrice>
                    <Button>{button3}</Button>
                </ProductInfo>
            </ProductCard>
        </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products