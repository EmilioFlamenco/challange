import axios from 'axios';

const URL_BASE = 'https://petstore.swagger.io/v2';
const instance = axios.create({
  baseURL: URL_BASE
});

export const createUser = async (body) => {
  try {
    await instance.post('user/', body);
  } catch (error) {
    console.error('Error al crear el usuario:', error.message);
  }
};

export const getUser = async (userName) => {
  try {
      const getUserResponse = await instance.get(`user/${userName}`);
      return getUserResponse;
  } catch (error) {
    console.error('Error al crear el usuario:', error.message);
  }
};

export const getPetByStatus = async (statusValue) => {
  try {
      const getPetByStatusResponse = await instance.get('/pet/findByStatus', {
        params: {
          status: statusValue
        }
      });
      return getPetByStatusResponse;
  } catch (error) {
    console.error('Error al crear el usuario:', error.message);
  }
};
