// import React from "react";

// export default class TESTEMAIL extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { feedback: "", name: "Name", email: "email@example.com" };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   render() {
//     return (
//       <form className="test-mailing">
//         <h1>Let's see if it works</h1>
//         <div>
//           <textarea
//             id="test-mailing"
//             name="test-mailing"
//             onChange={this.handleChange}
//             placeholder="Post some lorem ipsum here"
//             required
//             value={this.state.feedback}
//             style={{ width: "100%", height: "150px" }}
//           />
//         </div>
//         <input
//           type="button"
//           value="Submit"
//           className="btn btn--submit"
//           onClick={this.handleSubmit}
//         />
//       </form>
//     );
//   }
//   handleChange(event) {
//     this.setState({ feedback: event.target.value });
//   }
//   handleSubmit(event) {
//     const templateId = "template_id";
//     this.sendFeedback(templateId, {
//       message_html: this.state.feedback,
//       from_name: this.state.name,
//       reply_to: this.state.email,
//     });
//   }
//   sendFeedback(templateId, variables) {
//     window.emailjs
//       .send("gmail", templateId, variables)
//       .then((res) => {
//         console.log("Email successfully sent!");
//       })
//       // Handle errors here however you like, or use a React error boundary
//       .catch((err) =>
//         console.error(
//           "Oh well, you failed. Here some thoughts on the error that occured:",
//           err
//         )
//       );
//   }
// }

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const TESTEMAIL = () => {
  const [user, setUser] = useState({
    fullName: "Mai Tan Tai",
    roomNumber: "999",
  });

  const sendEmail = () => {
    emailjs
      .send("service_vmwvpht", "template_q0sji0n", user, "2-XjEt7WMje811dRp")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <React.Fragment>
      <div>
        {/* <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label> */}
        {/* <textarea name="message" /> */}
        <button onClick={() => sendEmail()}>SEND EMAIL</button>
      </div>
    </React.Fragment>
  );
};

export default TESTEMAIL;
