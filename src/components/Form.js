import React, { Component } from "react";

const initialState = {
  size: "",
  sauce: "",
  topping: "",
  substitute: "",
  name: "",
  address: "",
  instruction: "",
  nameError: "",
};

class FormInputs extends Component {
  state = initialState;

  formSubmit = (e) => {
    console.log("form submitted");
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
    }
  };

  handleSizeChange = (e) => {
    this.setState({
      size: e.target.value,
    });
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleAddressChange = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  handleInstructionsChange = (e) => {
    this.setState({
      instruction: e.target.value,
    });
  };

  handleSauceChange = (e) => {
    this.setState({
      sauce: e.target.value,
    });
  };

  handleToppingChange = (e) => {
    this.setState({
      topping: e.target.value,
    });
  };

  handleSubstituteChange = (e) => {
    this.setState({
      substitute: e.target.value,
    });
  };
  validate = () => {
    let nameError = "";
    if (this.state.name < 2) {
      nameError = "Fullname must be at least 2 characters";
    }
    if (nameError) {
      this.setState({ nameError });
      return false;
    }
    return true;
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label htmlFor="Full Name">Full Name</label>
        <input
          placeholder="Full name"
          type="text"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        <div style={{ fontSize: 12, color: "red" }}>{this.state.nameError}</div>

        <label htmlFor="Full Address">Full Address</label>
        <input
          placeholder="Address"
          type="text"
          value={this.state.Address}
          onChange={this.handleAddressChange}
        />

        <label htmlFor="Choice of size">Choice of size</label>
        <select
          className="input-field col s12"
          value={this.state.size}
          onChange={this.handleSizeChange}
        >
          <option value="small pizza">Small Pizza</option>
          <option value="medium pizza">Medium Pizza</option>
          <option value="large pizza">Large Pizza</option>
          <option value="lambda special">Lambda Special</option>
        </select>

        <label htmlFor="Choice of sauce">Choice of sauce</label>
        <label>
          <input
            type="radio"
            name="name"
            value="orignal red"
            checked={this.state.sauce === "original red"}
            onChange={this.handleSauceChange}
          />
          <span>Original Red</span>
        </label>
        <label>
          <input
            type="radio"
            name="name"
            value="garlic ranch"
            checked={this.state.sauce === "garlic ranch"}
            onChange={this.handleSauceChange}
          />
          <span>Garlic Ranch</span>
        </label>
        <label>
          <input
            type="radio"
            name="name"
            value="bbq sauce"
            checked={this.state.sauce === "bbq sauce"}
            onChange={this.handleSauceChange}
          />
          <span>BBQ Sauce</span>
        </label>
        <label>
          <input
            type="radio"
            name="name"
            value="spinach alfredo"
            checked={this.state.sauce === "spinach alfredo"}
            onChange={this.handleSauceChange}
          />
          <span>Spinach Alfredo</span>
        </label>

        <label htmlFor="Choice of topping">Choice of topping</label>
        <label>
          <input
            type="checkbox"
            name="name"
            value="pepproni"
            onChange={this.handleToppingChange}
          />
          <span>Pepproni</span>
        </label>
        <label>
          <input
            name="name"
            type="checkbox"
            value="ham"
            onChange={this.handleToppingChange}
          />
          <span>Ham</span>
        </label>
        <label>
          <input
            name="name"
            type="checkbox"
            value="meatballs"
            onChange={this.handleToppingChange}
          />
          <span>Meatballs</span>
        </label>
        <label>
          <input
            name="name"
            type="checkbox"
            value="gravy"
            onChange={this.handleToppingChange}
          />
          <span>Gravy</span>
        </label>

        <div className="switch">
          <label>Choice of substitute</label>
          <label>
            <input
              type="checkbox"
              value="gluten free crust"
              onChange={this.handleSubstituteChange}
            />
            <span className="lever"></span>
            Gluten Free Crust
          </label>
        </div>

        <label>Special Instructions</label>
        <textarea
          id="textarea1"
          placeholder="Anything else you'd like to add"
          className="input-field col s12"
          value={this.state.instruction}
          onChange={this.handleInstructionsChange}
        ></textarea>

        <button className="btn waves-effect waves-light" type="submit">
          Order
        </button>
      </form>
    );
  }
}

export default FormInputs;
