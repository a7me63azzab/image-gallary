import React, {Component} from 'react'
import { Card, CardImg } from 'reactstrap';

class UploadImage extends Component {
  
  state={
    imgData:'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'
  }

  fileClickedHandler = (e) => {
    console.log(e.target.files[0]);
    var image = e.target.files[0];
    var reader = new FileReader();

    reader.addEventListener("load", () => {
      this.setState({imgData: reader.result});
      console.log('image:', this.state.imgData);
    }, false);

    if (image) {
      reader.readAsDataURL(image)
    }
  }

  render () {
    return (<div>
      <input type="file" name="file" style={{marginBottom:30}} onChange={this.fileClickedHandler}/>
      <Card>
        <CardImg top width="100%" src={this.state.imgData} alt="Card image cap" />
      </Card>
    </div>)
  }
}
export default UploadImage
