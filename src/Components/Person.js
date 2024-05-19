import React from "react";

function Person({ person, keys }) {
  return (
    <div>
      <h1>
        i am {person.name}, i have experties in {person.skills}
      </h1>
    </div>
  );
}

export default Person;
