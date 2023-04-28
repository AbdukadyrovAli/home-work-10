import React from "react";
import styled from "styled-components";

export default function TableProduct({
  store,
  incrementProductHandler,
  decrementProductHandler,
  removeProductHandler,
}) {
  const totalPrice = store.map((item) => item.price);
  const redultTotal = totalPrice.reduce((a, b) => a + b, 0);

  return (
    <Container>
      <div>
        <Table>
          <Thead>
            <p className="id">#</p>
            <p style={{ marginBottom: "0px" }}>Product</p>
            <p>Product Nmae</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Remove</p>
          </Thead>
          {store.map((item, index) => {
            return (
              item.quantity !== 0 && (
                <div key={item.id}>
                  <p>{index + 1}</p>
                  <div>
                    <img
                      style={{ width: "300px", height: "200px" }}
                      src={item.url}
                    />
                  </div>
                  <div>{item.productName}</div>
                  <div>${item.price}</div>
                  <div>
                    <button onClick={() => decrementProductHandler(item.id)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementProductHandler(item.id)}>
                      +
                    </button>
                  </div>
                  <div>
                    <button onClick={() => removeProductHandler(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              )
            );
          })}
        </Table>
      </div>
      <div style={{ marginBottom: "40px" }}>
        <p style={{ fontSize: "3rem" }}>Total:{redultTotal}</p>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Table = styled.div`
  display: flex;
  flex-direction: column;
`;
const Thead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 1.6rem;
  font-weight: 600;

  border-top: 1px solid #dcdcdc;

  .id {
    width: 100px;
    display: flex;
    justify-content: center;
    margin-top: -10;
  }
  p {
    width: 200px;
    height: 20px;
    display: flex;
    justify-content: center;
  }
`;
