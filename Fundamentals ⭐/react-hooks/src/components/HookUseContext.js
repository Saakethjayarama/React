import React, { useContext } from "react";
const bio = {
  name: "Saaketh",
  age: "500",
};

const bioContext = React.createContext(bio);

export default () => {
  const bio = useContext(bioContext);
  return (
    <div>
      Name: {bio.name}
      <br />
      age: {bio.age}
    </div>
  );
};
