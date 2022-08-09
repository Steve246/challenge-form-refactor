import React, { Component } from "react";

const FormHooks = (props) => {
  const { result, status, data } = LogicHooks();
  const ButtonGroup = () => (
    <>
      <button disabled={this.state.isLoading} onClick={this.handleSaveProduct}>
        Save
      </button>
    </>
  );

  const InputGroup = () => {
    <>
      <label> ID </label>
      <input
        name="id"
        type="text"
        value={data.id}
        onChange={this.handleOnInput}
      />

      <label> Product Name </label>
      <input
        name="productName"
        type="text"
        value={data.productName}
        onChange={this.handleOnInput}
      />
    </>;
  };
  return (
    <div>
      <InputGroup />
      <ButtonGroup />
      {{ error } && <div> Oops... </div>}
    </div>
  );
};

export default FormHooks;
