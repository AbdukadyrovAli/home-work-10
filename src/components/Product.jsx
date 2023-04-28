import React from "react";
import styled from "styled-components";

export default function Product({ store, addProductHandler }) {
  return (
    <Container>
      <Ul>
        {store.map((item) => (
          <Li key={item.id}>
            <ImgContainer>
              <img src={item.url} alt="product fotos" />
            </ImgContainer>
            <DataProductContainer>
              <ProductText>
                {item.productName} - $ {item.staticPrice}
              </ProductText>
              {item.quantity < 1 ? (
                <Button
                  onClick={() => addProductHandler(item.id)}
                  disabled={item.quantity > 0}
                >
                  Add
                </Button>
              ) : null}
            </DataProductContainer>
          </Li>
        ))}
      </Ul>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Li = styled.li`
  list-style: none;
  width: 200px;
  height: 310px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const ImgContainer = styled.div`
  width: 199px;
  height: 170px;
  border-bottom: 1px solid #dcdcdc;

  img {
    width: 100%;
    height: 100%;
  }
`;

const DataProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
const ProductText = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
`;

const Button = styled.button`
  border-radius: 4px;
  border: none;
  font-size: 1.8rem;
  padding: 10px 30px;
  background-color: green;
  color: #fff;
`;
