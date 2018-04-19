import * as actionTypes from "../actions/actionTypes";
import {updateObject} from "../utility";

const initialState={
    images:null,
    loading:false
};


const onGetImagesStart=(state,action)=>{
   return updateObject(state,{
       loading:true
   });
}
const onGetImagesSuccess=(state,action)=>{
    return updateObject(state,{
        images:action.images,
        loading:false
    });
}
const onGetImagesFail=(state,action)=>{
    return updateObject(state,{
        loading:false
    });
}


const reducer = (state=initialState,action)=>{
    switch(action.type){
        //Upload image
        case actionTypes.ON_GET_IMAGES_START: return onGetImagesStart(state,action);
        case actionTypes.ON_GET_IMAGES_SUCCESS: return onGetImagesSuccess(state,action);
        case actionTypes.ON_GET_IMAGES_FAIL: return onGetImagesFail(state,action);   
        default: return state;
    }
};

export default reducer;