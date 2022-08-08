import React, { Component } from "react";
import { ProductService } from "../Service/ProductService";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      data: {
        id: "",
        productName: "",
      },
      error: null,
    };
    this.productService = ProductService();
  }

  handleOnInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    this.setState({
      data: {
        ...this.state.data,
        [key]: value,
      },
    });
  };

  handleSaveProduct = async () => {
    this.setState({
      isLoading: true,
      error: null,
    });

    try {
      const result = await this.productService.addProduct({
        id: this.state.data.id,
        productName: this.state.data.productName,
      });
      if (result) alert(result);
      this.setState({
        isLoading: false,
        error: null,
        data: { id: "", productName: "" },
      });
    } catch (e) {
      this.setState({
        isLoading: false,
        error: e,
        data: { id: "", productName: "" },
      });
    }
  };

  render() {
    return (
      <div>
        <label> ID </label>
        <input
          name="id"
          type="text"
          value={this.state.data.id}
          onChange={this.handleOnInput}
        />

        <label> Product Name </label>
        <input
          name="productName"
          type="text"
          value={this.state.data.productName}
          onChange={this.handleOnInput}
        />
        <button
          disabled={this.state.isLoading}
          onClick={this.handleSaveProduct}
        >
          Save
        </button>
        {this.state.error && <div> Oops... </div>}
      </div>
    );
  }
}

export default ProductForm;
