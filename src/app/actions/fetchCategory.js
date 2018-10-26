import {GET_CATEGORIES} from './actionTypes';
import CategoriesApi from '../api/categoriesApi';


export const fetchCategoriesSuccess = (data)=> {
    return {
        type: GET_CATEGORIES,
        payload: data
    }
};


export const fetchCategories = (token, id = '', strSearch = "") => {
    return async dispatch => {
        try {
            let result = await CategoriesApi.getCategory(token,id,strSearch);

            dispatch(fetchCategoriesSuccess(result));
        } catch (e) {
            console.log(e);
        }
    }

};