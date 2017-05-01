import React, {Component} from 'react';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';
import Well from 'react-bootstrap/lib/Well';
import Collapse from 'react-bootstrap/lib/Collapse';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Grid from 'react-bootstrap/lib/Grid';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';
import Panel from 'react-bootstrap/lib/Panel';
import AutoForm from 'react-auto-form'
import Rebase from 're-base';

import './css/common.css';

var base = Rebase.createClass({
      apiKey: "AIzaSyBvNUuL3R89gOQIvilSJzjP-3dhOo3vxq0",
      authDomain: "glazer-exploreit.firebaseapp.com",
      databaseURL: "https://glazer-exploreit.firebaseio.com",
      storageBucket: "glazer-exploreit.appspot.com",
      messagingSenderId: "511948691806"
}, 'myApp');


class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iAgree: false,
      childName: '',
      childAge: '',
      favFood: '',
      favColor: '',
      parentName: '',
      email: ''
    }

    this.nextPage = this.nextPage.bind(this);
    this.enableSubmit = this.enableSubmit.bind(this);
    this.returnTermsAndConditions = this.returnTermsAndConditions.bind(this);
    this.addtoFirebase = this.addtoFirebase.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  addtoFirebase(){
    var immediatelyAvailableReference = base.push('my_profile', {
      data: {child_age: this.state.childAge, child_name: this.state.childName, parent_email: this.state.email, parent_name: this.state.parentName}
    }).then(newLocation => {
      var generatedKey = newLocation.key;
    }).catch(err => {
      //handle error
      console.log(err);
    });
    //available immediately, you don't have to wait for the Promise to resolve
    var generatedKey = immediatelyAvailableReference.key;
  }

  nextPage() {
    if (this.props.page === "MyProfile" || this.state.iAgree === true) {
      this.addtoFirebase();
      this.props.changePage('SelectActivity');
    } else {
      this.props.ReactGA.event({category: 'TermsAndConditions', action: 'ForgotToAgree'});
      alert("Please agree to the terms and conditions");
    }
  }

  enableSubmit(e) {
    this.setState({iAgree: e.target.checked});
  }

  returnTermsAndConditions(currentPage, enableSubmit) {
    if (currentPage === "Intro") {
      return (
        <div>
          <Disclaimer header="Terms & Conditions" open={false} body={this.props.disclaimer}/>
          <Checkbox onChange={e => this.enableSubmit(e)} ref="check_me" id="iAgree">
            By selecting, you agree to the terms and conditions.
          </Checkbox>
        </div>
      );
    }

    return null;
  }

  onChange(event, name, data, change) {
    // ...
    var stateObject = function() {
        var returnObj = {};
        returnObj[name] = data;
        return returnObj;
    };

    this.setState(stateObject);
  }

  render() {
    return (
      <div>
        <Grid>
          <AutoForm onChange={this.onChange}>
            <ChildInfo bsStyle="success" className="explore-purple-panel"/>
            <hr className="explore-small-hr"/>
            <ParentInfo bsStyle="success" className="explore-blue-panel"/>
            <hr className="explore-small-hr"/> {this.returnTermsAndConditions(this.props.page, this.enableSubmit)}
            <Button className="explore-light-blue-button" bsStyle="info" bsSize="large" onClick={this.nextPage}>Done!</Button>
          </AutoForm>
        </Grid>
      </div>
    );
  }
}

function FieldGroup({
    id,
    label,
    ...props
}) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props}/>
      </FormGroup>
    );
}

class Disclaimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }

        this.getIcon = this.getIcon.bind(this);
    }

    componentDidMount() {
        if (this.props.open) {
            this.setState({open: true})
        }
    }

    getIcon() {
        if (this.state.open) {
            return (<Glyphicon className="pull-right" glyph="chevron-up"/>);
        }
        return (<Glyphicon className="pull-right" glyph="chevron-down"/>);
    }

    render() {
        return (
            <div>
                <Button bsStyle={this.props.bsStyle} block onClick={() => this.setState({
                    open: !this.state.open
                })}>
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

class ChildInfo extends Component {
    render() {
        return (
            <div>
                <Panel header="Child's Information" className={this.props.className}>
                    <FieldGroup id="childName" name="childName" type="text" label="Child's First Name" placeholder="Enter name"/>
                    <FieldGroup id="childAge" name="childAge" type="number" label="Child's Age:" placeholder="Enter age"/>
                    <FieldGroup id="favFood" name="favFood" type="text" label="Favorite Food:" placeholder="Enter food"/>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Favorite Color</ControlLabel>
                        <FormControl componentClass="select" placeholder="select" name="favColor">
                            <option value="selectOne">Please select a color</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="red">Red</option>
                            <option value="purple">Purple</option>
                            <option value="pink">Pink</option>
                            <option value="yellow">Yellow</option>
                        </FormControl>
                    </FormGroup>
                </Panel>
            </div>
        );
    }
}

class ParentInfo extends Component {
    render() {
        return (
            <div>
                <Panel header="Parent's Information" className={this.props.className}>
                    <FieldGroup id="parentName" name="parentName" type="text" label="Parent's Name" placeholder="Enter name"/>
                    <FieldGroup id="email" name="email" type="email" label="Parent's Email address" placeholder="Enter email"/>
                    <HelpBlock>We may contact you at a future time to inquire about your experience with ExploreIT</HelpBlock>
                </Panel>
            </div>
        );
    }
}

export default MyProfile;
