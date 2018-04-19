import * as actionsTypes from './actionTypes'
import axios from 'axios'

const GET_ALL_IMAGES_API = 'http://localhost:3000/files';

const onGetImagesStart=()=>{
    return{
        type:actionsTypes.ON_GET_IMAGES_START
    }
}
const onGetImagesSuccess=(images)=>{
    return{
        type:actionsTypes.ON_GET_IMAGES_SUCCESS,
        images:images
    }
}
const onGetImagesFail=()=>{
    return{
        type:actionsTypes.ON_GET_IMAGES_FAIL
    }
}

export const onGetImages  =()=>{
    return dispatch =>{
        dispatch(onGetImagesStart());
        axios.get(GET_ALL_IMAGES_API).then(res=>{
            let imagesList = res.data;
           let images =  imagesList.map(image => {
               let imageUrl = image.url;
                return({
                    src:`${imageUrl}`,
                    thumbnail: `${imageUrl}`,
                    thumbnailWidth: 300,
                    thumbnailHeight: 150
                })
            });
            console.log('images',images);
            dispatch(onGetImagesSuccess(images));
        }).catch(err=>{
            dispatch(onGetImagesFail());
        });
    }
}