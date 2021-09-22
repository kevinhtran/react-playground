import React from 'react';

const people = [
  {
    id: 1,
    name: "Kevin Tran",
    age: 31
  },
  {
    id: 2,
    name: "Khalil Tran",
    age: 29
  },
  {
    id: 3,
    name: "Morris Tran",
    age: 61
  }
];

function PeopleList() {
  return people.map((person, index) => <div key={index}>{person.name}</div>);
}


export default PeopleList;