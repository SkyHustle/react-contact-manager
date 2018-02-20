import React, { Component} from 'react';
import ContactForm from '../components/contact-form';

class ContactFormPage extends Component {
  submit = (values) => {
    console.log(values);
  }

  render() {
    return (
      <div>
        <ContactForm handleSubmit={this.submit} />
      </div>
    )
  }
}

export default ContactFormPage;