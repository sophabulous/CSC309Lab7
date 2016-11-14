import React, { Component } from 'react';

const styles = {
  input: {
    display: 'block',
    width: '100%',
    height: '34px',
    padding: '6px 12px',
    fontSize: '1rem',
    lineHeight: '1.42857143',
    color: '#555',
    backgroundColor: '#fff',
    backgroundImage: 'none',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
  },
};

class QuantitySelect extends Component {
  constructor(props) {
    super(props);

    this.handleQuantityChange = this.handleQuantityChange.bind(this);
  }

  handleQuantityChange(evt) {
    evt.preventDefault();
    // TODO: implement `handleQuantityChange` so the state in `App.js` will
    // be updated. Recall that 'evt.target' contains the properties of the
    // event (see the input component below for these properties). 
  }

  render() {
    return (
      <div
        style={this.props.style}
      >
        <input
          placeholder="Quantity"
          style={styles.input}
          type="number"
          value={this.props.quantity}
          min="0"
          onChange={this.handleQuantityChange}
        />
      </div>
    );
  }
}

export default QuantitySelect;
