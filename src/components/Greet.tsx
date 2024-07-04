import React from "react";
type Greetprops = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: Greetprops) => {
  const { messageCount = 10 } = props;
  return (
    <h2>
      {props.isLoggedIn
        ? `Hi ${props.name}! You have ${messageCount} unread messages`
        : `Welcome Guest`}
    </h2>
  );
};

export default Greet;
