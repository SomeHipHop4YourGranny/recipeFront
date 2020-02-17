import axios from './axios';
import URL from '../baseURL';

export default {
  getRecipes: (data) => axios.get(`${URL}api/recipe`, { params: data }),
  getRecipe: (id) => axios.get(`${URL}api/recipe/${id}`),
  addRecipe: (data) => axios.post(`${URL}api/recipe`, data),
  editRecipe: (id, data) => axios.put(`${URL}api/recipe/${id}`, data),
  deleteRecipe: (id) => axios.delete(`${URL}api/recipe/${id}`),
};
