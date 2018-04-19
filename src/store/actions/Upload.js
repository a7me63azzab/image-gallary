import * as actionsTypes from './actionTypes'
import axios from 'axios'

const IMAGE_UPLOAD_API = 'http://localhost:3000/file/upload';

const onUploadImageStart=()=>{
    return{
        type:actionsTypes.ON_IMAGE_UPLOAD_START
    }
}
const onUploadImageSuccess=(imageUrl)=>{
    return{
        type:actionsTypes.ON_IMAGE_UPLOAD_SUCCESS,
        imageUrl:imageUrl
    }
}
const onUploadImageFail=()=>{
    return{
        type:actionsTypes.ON_IMAGE_UPLOAD_FAIL
    }
}

export const onUploadImage  =(image)=>{
    return dispatch =>{
        dispatch(onUploadImageStart());
        axios.post(IMAGE_UPLOAD_API,image).then(res=>{
            let imageUrl = res.data.url;
            console.log('imageUrl',imageUrl);
            dispatch(onUploadImageSuccess(imageUrl));
        }).catch(err=>{
            dispatch(onUploadImageFail());
        });
    }
}