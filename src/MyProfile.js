import React, { Component } from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';
import Alert from 'react-bootstrap/lib/Alert';
import Well from 'react-bootstrap/lib/Well';
import Collapse from 'react-bootstrap/lib/Collapse';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Grid from 'react-bootstrap/lib/Grid';

// import './css/Activity.css';

var disclaimer = "I understand information entered is owned by the Glazer Children's Museum and will be stored."

class MyProfile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      iAgree: true
    }
    this.nextPage= this.nextPage.bind(this);
    this.enableSubmit= this.enableSubmit.bind(this);
    this.returnTermsAndConditions= this.returnTermsAndConditions.bind(this);

  }

  nextPage () {
    if (this.state.iAgree === true){
      this.props.changePage('SelectActivity');
    } else {
      alert("Please agree to the terms and conditions");
    }
  }

  enableSubmit(e){
    this.setState({iAgree:e.target.checked});
  }

  returnTermsAndConditions (currentPage, enableSubmit) {
    if(currentPage === "Intro"){
      return (
        <div>
          <Collapsible header="Terms & Conditions" open={false} body={disclaimer}/>
          <Checkbox onChange={e => this.enableSubmit(e)} ref="check_me" id="iAgree">
            By selecting, you agree to the terms and conditions.
          </Checkbox>
        </div>
      );
    }

    return null;
  }

  render(){
    return(
      <div>
        <Grid>
          <form >
            <Alert bsStyle="info">
              <h4>Parent's Information</h4>
              <FieldGroup
                id="parentName"
                type="text"
                label="Parent's Name"
                placeholder="Enter name"
                />
              <FieldGroup
                id="email"
                type="email"
                label="Parent's Email address"
                placeholder="Enter email"
                />
            </Alert>
            <hr/>
            <Alert bsStyle="success">
              <h4>Child's Information</h4>
              <FieldGroup
                id="childName"
                type="text"
                label="Child's Name"
                placeholder="Enter name"
                />
              <FieldGroup
                id="childAge"
                type="number"
                label="Child's Age:"
                placeholder="Enter age"
                />
              <FieldGroup
                id="favFood"
                type="text"
                label="Favorite Food:"
                placeholder="Enter food"
                />
              <FormGroup controlId="formControlsSelect">
                <ControlLabel>Favorite Color</ControlLabel>
                <FormControl componentClass="select" placeholder="select">
                  <option value="selectOne">Please select a color</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="red">Red</option>
                  <option value="purple">Purple</option>
                  <option value="pink">Pink</option>
                  <option value="yellow">Yellow</option>
                </FormControl>
              </FormGroup>
            </Alert>
            <hr/>
            {this.returnTermsAndConditions (this.props.page, this.enableSubmit)}
            <Button  id="intro-submit" bsStyle="info" bsSize="large" onClick={this.nextPage}>Get Started!</Button>
          </form>
        </Grid>
      </div>
    );
  }
}

function FieldGroup({ id, label, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }

    this.getIcon= this.getIcon.bind(this);
  }

  componentDidMount(){
    if(this.props.open){
      this.setState({open:true})
    }
  }

  getIcon (){
    if (this.state.open) {
      return (<Glyphicon className="pull-right" glyph="chevron-up" />);
    }
    return (<Glyphicon className="pull-right" glyph="chevron-down" />);
  }

  render() {
    return (
      <div>
        <Button bsStyle={this.props.bsStyle} block onClick={ ()=> this.setState({ open: !this.state.open })}>
          {this.props.header}
          {this.getIcon()}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well bsStyle={this.props.bsStyle} className="lang-container">
              {this.props.body}
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}



export default MyProfile;
