import React from "react";
type Greetprops = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: Greetprops) => {
  return (
    <h2>
      {props.isLoggedIn
        ? `Hi ${props.name}! You have ${props.messageCount} unread messages`
        : `Welcome Guest`}
    </h2>
  );
};

export default Greet;
