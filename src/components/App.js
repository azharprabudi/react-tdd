import React, { PureComponent } from "react";
import { Button } from "react-bootstrap";
import { maxNumber } from "../helper/index";
import Gift from "./Gift";

class App extends PureComponent {
  state = {
    gifts: []
  };

  onAddGift = () => {
    this.setState({
      gifts: [...this.state.gifts, { id: maxNumber(this.state.gifts) + 1 }]
    });
  };

  onRemoveGift = giftId => {
    this.setState({
      gifts: this.state.gifts.filter(({ id }) => id !== giftId)
    });
  };

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {this.state.gifts.map(gift => (
            <Gift gift={gift} key={gift.id} onRemoveGift={this.onRemoveGift} />
          ))}
        </div>
        <Button className="btn-add" onClick={this.onAddGift}>
          Add Gift
        </Button>
      </div>
    );
  }
}

export default App;
