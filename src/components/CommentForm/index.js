import React, { Component } from "react";

class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    number: "",
    events: "",
    notes: "",
    error: {},
  };

  changeHandler = (e) => {
    const error = this.state.error;
    error[e.target.name] = "";

    this.setState({
      [e.target.name]: e.target.value,
      error,
    });
  };

  subimtHandler = (e) => {
    e.preventDefault();

    const { name, email, number, events, notes, error } = this.state;

    if (name === "") {
      error.name = "Please enter your name";
    }
    // if (email === "") {
    //   error.email = "Please enter your email";
    // }
    if (number === "") {
      error.number = "Select your phone number";
    }
    if (events === "") {
      error.events = "Select your event list";
    }
    if (notes === "") {
      error.notes = "Please enter your note";
    }

    if (error) {
      this.setState({
        error,
      });
    }
    if (
      error.name === "" &&
      error.email === "" &&
      error.number === "" &&
      error.events === "" &&
      error.notes === ""
    ) {
      var url = "http://localhost/DigitalLawWebsite/ContactForm.php";
      var headers = {
        "Content-Type": "application/json",
      };

      var Data = {
        name: name,
        number: number,
        email: email,
        events: events,
        notes: notes,
      };

      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      });
      this.setState({
        name: "",
        email: "",
        number: "",
        events: "",
        notes: "",
        error: {},
      });
    }
  };

  render() {
    const { name, email, number, events, notes, error } = this.state;

    return (
      <form onSubmit={this.subimtHandler}>
        <div className="contact-form form-style row">
          <div className="col-12 col-lg-6">
            <input
              type="text"
              value={name}
              onChange={this.changeHandler}
              placeholder="Your Name*"
              id="fname"
              name="name"
            />
            <p>{error.name ? error.name : ""}</p>
          </div>
          <div className="col col-lg-6">
            <input
              type="text"
              placeholder="Phone"
              onChange={this.changeHandler}
              value={number}
              id="number"
              name="number"
            />
            <p>{error.number ? error.number : ""}</p>
          </div>
          <div className="col-12  col-lg-6">
            <input
              type="email"
              placeholder="Your Email"
              onChange={this.changeHandler}
              value={email}
              id="email"
              name="email"
            />
            <p>{error.email ? error.email : ""}</p>
          </div>
          <div className="col col-lg-6">
            <select
              className="form-control"
              onChange={this.changeHandler}
              value={events}
              name="events"
            >
              <option value="Family Law">Family Law</option>
              <option value="Criminal Law">Criminal Law</option>
              <option value="Business Law">Business Law</option>
              <option value="Personal Injury">Personal Injury</option>
              <option value="Education Law">Education Law</option>
              <option value="Real Estate Law">Real Estate Law</option>
            </select>
            <p>{error.events ? error.events : ""}</p>
          </div>
          <div className="col-12 col-sm-12">
            <textarea
              className="contact-textarea"
              value={notes}
              onChange={this.changeHandler}
              placeholder="Message"
              name="notes"
            ></textarea>
            <p>{error.notes ? error.notes : ""}</p>
          </div>
          <div className="col-12">
            <button type="submit" className="theme-btn">
              Appointment
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ContactForm;
