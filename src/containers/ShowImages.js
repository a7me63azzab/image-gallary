import React, {Component} from 'react'
import Gallery from 'react-grid-gallery'
import * as actionCreators from '../store/actions/index'
import {connect} from 'react-redux'
import {notify} from 'reapop';

class ShowImages extends Component{
    state={}
    
    componentWillMount(){
        this.props.onGetImages();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.imageUrl !== this.props.imageUrl){
            this.props.onGetImages()
        }
    }

   

    render(){ 
        return(
            <div style={{marginTop:30}}><Gallery images={this.props.images}/></div>
        )
    }
}

const mapStateToProps=state=>{
    console.log(state.showImages.images)
    return{
        images:state.showImages.images,
        imageUrl:state.uploadImage.image
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onGetImages: () => dispatch(actionCreators.onGetImages())
    };
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(ShowImages)
