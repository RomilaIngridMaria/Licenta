import styled from 'styled-components'

export const ProductsContainer = styled.div`
    width: 100vw;
    // min-height: 100vh;
    height: 1000px;
    padding: 5rem calc((100vw-1300px)/2);
    background: ${({lightBg}) => (lightBg ? 'var(--white)' : 'var(--grey)')};
    color: var(--white);
`
export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    height: 860px;
`
export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
`
export const ProductImg = styled.img`
    height: 300px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px var(--pink);
`
export const ProductsHeading = styled.h1`
    font-size: 32px;
    position:abolute;
    color: #fff;
    z-index:3;
    text-align: center;
    line-height: 300px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    // color: ${({lightText}) => (lightText ? 'var(--white)' : 'var(--grey)')};
`
export const ProductTitle = styled.h2`
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({darkText}) => (darkText ? 'var(--grey)' : 'var(--white)')};
`
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
    
`
export const ProductDesc = styled.p`
    margin-bottom: 1rem;
    color: ${({darkText}) => (darkText ? 'var(--grey)' : 'var(--white)')};
`
export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
    color: ${({darkText}) => (darkText ? 'var(--grey)' : 'var(--white)')};
`
// export const ProductButton = styled.button`
//     font-size: 1rem;
//     padding: 1rem 4rem;
//     border: none;
//     background: var(--orange);
//     color: var(--white);
//     transition: 0.2 ease-out;

//     &:hover {
//     background: var(--yellow);
//     transition: 0.2s ease-out;
//     cursor: pointer;
//     }
// `