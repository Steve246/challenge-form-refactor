import { useState } from "react";

const useAsync = () => {
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  const [data, setData] = useState({ id: "", productName: "" });

  const execute = async (asyncFn) => {
    setisLoading(true);
    setError(null);

    try {
      const result = await asyncFn();
      if (result) alert(result);
      setData;
      setisLoading(result);
      setError(e);
    } catch (e) {
      setError(e.message);
      setisLoading("failed");
    }
  };
  return { execute, isLoading, data, error };
};

export default useAsync;

// dibawah direfator jadi atas
// handleSaveProduct = async () => {
//   this.setState({
//     isLoading: true,
//     error: null,
//   });

//   try {
//     const result = await this.productService.addProduct({
//       id: this.state.data.id,
//       productName: this.state.data.productName,
//     });
//     if (result) alert(result);
//     this.setState({
//       isLoading: false,
//       error: null,
//       data: { id: "", productName: "" },
//     });
//   } catch (e) {
//     this.setState({
//       isLoading: false,
//       error: e,
//       data: { id: "", productName: "" },
//     });
//   }

// };
