import * as actionTypes from "../actions/actionTypes";
import {updateObject} from "../utility";

const initialState={
    image:null,
    loading:false
};


const onUploadImageStart=(state,action)=>{
   return updateObject(state,{
       loading:true
   });
}
const onUploadImageSuccess=(state,action)=>{
    return updateObject(state,{
        image:action.imageUrl,
        loading:false
    });
}
const onUploadImageFail=(state,action)=>{
    return updateObject(state,{
        loading:false
    });
}


const reducer = (state=initialState,action)=>{
    switch(action.type){
        //Upload image
        case actionTypes.ON_IMAGE_UPLOAD_START: return onUploadImageStart(state,action);
        case actionTypes.ON_IMAGE_UPLOAD_SUCCESS: return onUploadImageSuccess(state,action);
        case actionTypes.ON_IMAGE_UPLOAD_FAIL: return onUploadImageFail(state,action);   
        default: return state;
    }
};

export default reducer;