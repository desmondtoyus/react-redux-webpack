import React from 'react';
import { Helmet } from 'react-helmet';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Contact </title>
          <meta name="description" content="Contact description" />
        </Helmet>
        <h1>CONTACT Page!</h1>

      </div>
    );
  }
}

export default Contact;
