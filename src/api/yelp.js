import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer Ek-uAVBX6fd5R4MreGYMfhuIfosHontpr7H-bnwl0luVQ7ucGFhA9asJlyjm8BI8yfz14hzEqfPOVCZEhVddkdmhw0Vf7_R9d-IsIWc04KGGEZNoeattkPqCUqqKXHYx',
  },
});
