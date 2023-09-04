

import { toast } from 'react-toastify';

const addProduct = async (formData, token) => {
  try {
    const response = await fetch('http://localhost:8000/api/addproduct', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();

    if (response.status >= 400 || !data) {
      toast.error('Error adding the product');
    } else {
      toast.success('Product added successfully');
      return true;
    }
  } catch (error) {
    console.error('Error occurred while adding the product', error);
    toast.error('An error occurred while adding the product');
    return false;
  }
};

export default addProduct;








