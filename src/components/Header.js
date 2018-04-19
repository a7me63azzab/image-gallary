import React, {Component}from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actions/index'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardImg
} from 'reactstrap'

class Header extends Component {

  constructor (props) {
    super(props)
    this.state = {
      modal: false,
      imgData:'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180',
      image:null
    }
  }
  toggle = () => {
    this.setState({
      modal:!this.state.modal,
    })
  }

  fileClickedHandler = (e) => {
    console.log(e.target.files[0]);
    var image = e.target.files[0];

    this.setState({
      image:image
    });

    var reader = new FileReader();

    reader.addEventListener("load", () => {
      this.setState({imgData: reader.result});
      // console.log('image:', this.state.imgData);
    }, false);

    if (image) {
      reader.readAsDataURL(image)
    }
  }

  uploadImageClickedHandler=()=>{
    var fd = new FormData();
    
    fd.append('file', this.state.image);

    this.props.onUpload(fd);
    this.props.onGetImages();

    this.setState({
      imgData:null,
      modal:false
    });

  }

  render(){
    return(<div>
      <Navbar color='light' light='light' expand='md'>
        <NavbarBrand href='/'>Image Gallary</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse navbar='navbar'>
          <Nav className='ml-auto' navbar='navbar'>
            <NavItem>
              <NavLink to='' onClick={this.toggle}>Uplaod Image</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Upload Image</ModalHeader>
          <ModalBody>
              <div>
                <input type="file" name="file" style={{marginBottom:30}} onChange={this.fileClickedHandler}/>
                <Card>
                  <CardImg top width="100%" src={this.state.imgData} alt="Card image cap" />
                </Card>
              </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.uploadImageClickedHandler}>Upload</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
    </div>)
  } 
}

const mapStateToProps=state=>{
  return{
    imageUrl:state.uploadImage.image
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUpload: (image) => dispatch(actionCreators.onUploadImage(image)),
    onGetImages: () => dispatch(actionCreators.onGetImages())
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
