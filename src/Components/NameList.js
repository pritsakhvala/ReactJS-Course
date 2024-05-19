import React from "react";
import Person from "./Person";
function NameList() {
  const names = ["prit", "nilkanth", "sahjanand"];
  const nameList = names.map((name, index) => (
    <h1 key={index}>
      {index}
      {name}
    </h1>
  ));
  return <div>{nameList}</div>;
  // const Persons = [
  //   {
  //     id: 1,
  //     name: "prit",
  //     skills: "React,html,css",
  //   },
  //   {
  //     id: 2,
  //     name: "tirth",
  //     skills: "python",
  //   },
  //   {
  //     id: 3,
  //     name: "nil",
  //     skills: "dsa",
  //   },
  // ];
  // const personList = Persons.map((person) => (
  //   <Person key={person.id} person={person} />
  // ));
  // return <div>{personList}</div>;
}

export default NameList;
