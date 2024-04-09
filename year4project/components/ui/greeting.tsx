import React from "react";

const Greeting = () => {
  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return <div>{greeting}&nbsp;</div>;
};

export default Greeting;
