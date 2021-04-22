import React, { Component } from "react";
import { withFirebase } from "../Firebase";

const Contact = () => {
  return (
    <>
      <h1>Contacts add</h1>
      <ContactForm />
      <ContactsList />
    </>
  );
};

const INITIAL_STATE = {
  name: "",
  usn: "",
  phone: "",
  contacts: [],
};

class ContactsListBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      contacts: [],
    };
  }

  componentDidMount() {
    this.props.firebase.getcontacts().on("value", (snapshot) => {
      let contacts = snapshot.val();
      let contactsList = Object.keys(contacts).map((key) => ({
        ...contacts[key],
        uid: key,
      }));
      this.setState({
        loading: false,
        contacts: contactsList,
      });
    });
  }
  componentWillUnmount() {
    this.props.firebase.getcontacts().off();
  }

  render() {
    const { contacts } = this.state;
    const { loading } = this.state;
    return (
      <>
        {loading ? (
          <p>Loading</p>
        ) : (
          contacts.map((obj, vlaue) => {
            return this.contact(obj, vlaue);
          })
        )}
      </>
    );
  }

  contact(con, val) {
    return (
      <div key={val}>
        <p>
          UID: {con.uid}, USN: {con.usn}, Name: {con.name}, Phone: {con.phone}
        </p>
      </div>
    );
  }
}

const ContactsList = withFirebase(ContactsListBase);

class ContactFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onClick(e) {
    e.preventDefault();
    this.props.firebase.insertContact(this.state);
    this.setState({
      ...INITIAL_STATE,
    });
  }

  render() {
    const { name, usn, phone } = this.state;
    return (
      <>
        <form>
          <input
            type="text"
            onChange={this.onChange}
            value={name}
            name="name"
            placeholder="name"
          />
          <input
            type="text"
            onChange={this.onChange}
            value={usn}
            name="usn"
            placeholder="usn"
          />
          <input
            type="text"
            onChange={this.onChange}
            value={phone}
            name="phone"
            placeholder="phone"
          />
          <button type="submit" onClick={this.onClick}>
            Submit
          </button>
        </form>
      </>
    );
  }
}

const ContactForm = withFirebase(ContactFormBase);

export default Contact;
