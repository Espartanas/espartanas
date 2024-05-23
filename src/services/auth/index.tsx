import {CustomAsyncStorage} from '../../utils/CustomAsyncStorage';

export const setToken = async (value: any) => {
  try {
    await CustomAsyncStorage.setItem('TokenEspartana', value);
  } catch (error) {}
};

export const logout = async () => {
  try {
    await CustomAsyncStorage.removeItem('TokenEspartana');
  } catch (error) {
    console.error(error);
  }
};

export const getToken = async () => {
  return await CustomAsyncStorage.getItem('TokenEspartana');
};
