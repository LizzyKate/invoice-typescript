import React from "react";

interface Props {
  mode: boolean;
}

const Invoices: React.FC<Props> = ({ mode }) => {
  return (
    <>
      {mode ? (
        <>
          <h1 style={{ color: "white" }}>Invoice</h1>
        </>
      ) : (
        <>
          <h1 style={{ color: "black" }}>Invoice</h1>
        </>
      )}
    </>
  );
};

export default Invoices;
