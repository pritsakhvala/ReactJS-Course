import React from "react";
import Person from "./Person";
function NameList() {
  //   const names = ["prit", "nilkanth", "sahjanand"];
  //   const nameList = names.map((name) => <h1>{name}</h1>);
  //   return <div>{nameList}</div>;
  const Persons = [
    {
      id: 1,
      name: "prit",
      skills: "React,html,css",
    },
    {
      id: 2,
      name: "tirth",
      skills: "python",
    },
    {
      id: 3,
      name: "nil",
      skills: "dsa",
    },
  ];
  const personList = Persons.map((person) => <Person person={person} />);
  return <div>{personList}</div>;
}

export default NameList;