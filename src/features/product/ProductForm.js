import React, { Component } from "react";
import { ProductService } from "../../Service/ProductService";
import FormButton from "../../shared/Component/FormButton/FormButton";
import FormContainer from "../../shared/Component/FormContainer/FormContainer";
import FormInput from "../../shared/Component/FormInput/FormInput";

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

  handleInputChange = (key, value) => {
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
      <FormContainer errorMessage={this.state.error ? "OOps" : ""}>
        <FormInput
          id="id"
          label="ID"
          value={this.state.data.id}
          onChange={this.handleInputChange}
        />

        {/* <label> Product Name </label>
          <input
            name="productName"
            type="text"
            value={this.state.data.productName}
            onChange={this.handleOnInput}
          /> */}

        <FormInput
          id="productName"
          label="Product Name"
          value={this.state.data.productName}
          onChange={this.handleInputChange}
        />
        {/* <button
            disabled={this.state.isLoading}
            onClick={this.handleSaveProduct}
          >
            Save
          </button> */}

        <FormButton
          label="save"
          onClick={this.handleSaveProduct}
          disabled={this.state.isLoading}
        />
      </FormContainer>
    );
  }
}

export default ProductForm;
