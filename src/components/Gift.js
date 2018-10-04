import React, { PureComponent } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";

class Gift extends PureComponent {
  state = {
    person: "",
    present: ""
  };

  onChangeText = stateName => e => {
    this.setState({
      [stateName]: e.target.value
    });
  };

  onRemoveGift = () => {
    this.props.onRemoveGift(this.props.gift.id);
  };

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl
              className="input-person"
              onChange={this.onChangeText("person")}
              value={this.state.person}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Present</ControlLabel>
            <FormControl
              className="input-present"
              onChange={this.onChangeText("present")}
              value={this.state.present}
            />
          </FormGroup>
          <FormGroup>
            <Button className="btn-remove-gift" onClick={this.onRemoveGift}>
              Delete
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Gift;
