import { addCategoryError, addCategoryLoading, addCategorySuccess, getAllCategoryError, getAllCategoryLoading, getAllCategorySuccess, getCategoryError, getCategoryLoading, getCategorySuccess, getSliderError, getSliderLoading, getSliderSuccess, addSliderError, addSliderLoading, addSliderSuccess  } from './actions';
import api from '../api';
import { toast } from 'react-toastify';

const addCategoryAction = (postData) => {
  return async (dispatch) => {
    try {
      // Start the loading state
      dispatch(addCategoryLoading());

      // Perform the asynchronous operation (e.g., API call)
      const response = await api.post('category/add', postData, { includeAuthorization: false });
      const data = response.data;

      // Dispatch success action with the received data
      dispatch(addCategorySuccess(data));
      if (data?.status) {
        toast.success(data?.message);
      }
    } catch (error) {
      // Dispatch error action if an error occurs
      dispatch(addCategoryError(error.message));
      toast.error(error?.response?.data?.message);
    }
  };
};

const getAllCategoryAction = (postData) => {
  return async (dispatch) => {
    try {
      // Start the loading state
      dispatch(getAllCategoryLoading());

      // Perform the asynchronous operation (e.g., API call)
      const response = await api.post('category/get-all', postData, { includeAuthorization: false });
      const data = response.data;

      // Dispatch success action with the received data
      dispatch(getAllCategorySuccess(data));
      if (data?.status) {
        // toast.success(data?.message);
      }
    } catch (error) {
      // Dispatch error action if an error occurs
      dispatch(getAllCategoryError(error.message));
      toast.error(error?.response?.data?.message);
    }
  };
};

const getCategoryAction = (postData) => {
  return async (dispatch) => {
    try {
      // Start the loading state
      dispatch(getCategoryLoading());

      // Perform the asynchronous operation (e.g., API call)
      const response = await api.post('category/get', postData, { includeAuthorization: false });
      const data = response.data;

      // Dispatch success action with the received data
      dispatch(getCategorySuccess(data));
      if (data?.status) {
        // toast.success(data?.message);
      }
    } catch (error) {
      // Dispatch error action if an error occurs
      dispatch(getCategoryError(error.message));
      toast.error(error?.response?.data?.message);
    }
  };
};

const getSliderAction = () => {
  return async (dispatch) => {
    try {
      // Start the loading state
      dispatch(getSliderLoading());

      // Perform the asynchronous operation (e.g., API call)
      const response = await api.get('slider/get', null, { includeAuthorization: false });
      const data = response.data;

      // Dispatch success action with the received data
      dispatch(getSliderSuccess(data));
      if (data?.status) {
        // toast.success(data?.message);
      }
    } catch (error) {
      // Dispatch error action if an error occurs
      dispatch(getSliderError(error.message));
      toast.error(error?.response?.data?.message);
    }
  };
};

const createSliderAction = (postData) => {
  return async (dispatch) => {
    try {
      // Start the loading state
      dispatch(addSliderLoading());

      // Perform the asynchronous operation (e.g., API call)
      const response = await api.post('slider/add', postData, { includeAuthorization: false });
      const data = response.data;

      // Dispatch success action with the received data
      dispatch(addSliderSuccess(data));
      if (data?.status) {
        // toast.success(data?.message);
      }
    } catch (error) {
      // Dispatch error action if an error occurs
      dispatch(addSliderError(error.message));
      toast.error(error?.response?.data?.message);
    }
  };
};


// const userRegisterAction = (postData) => {
//   return async (dispatch) => {
//     try {
//       // Start the loading state
//       dispatch(userRegisterLoading());

//       // Perform the asynchronous operation (e.g., API call)
//       const response = await api.post('user/register', postData, { includeAuthorization: false });
//       const data = response.data;

//       // Dispatch success action with the received data
//       dispatch(userRegisterSuccess(data));
//       if (data?.status) {
//         toast.success(data?.message);
//       }
//     } catch (error) {
//       // Dispatch error action if an error occurs
//       dispatch(userRegisterError(error.message));
//       toast.error(error?.response?.data?.message);
//     }
//   };
// };



export {
  addCategoryAction,
  getAllCategoryAction,
  getCategoryAction,
  getSliderAction,
  createSliderAction
  // userRegisterAction,
};
