import React from 'react';
import Header from './components/Header';
import PeopleList from './components/PeopleList';

function App() {
  return (
    <>
      <Header title="yo" subTitle="foo" />
      {/* {Header({ title: "yo", subTitle: "foo" })} */}
      <PeopleList />
      {/* {PeopleList({ subTitle: "My people!" })} */}
    </>
  )
}

export default App;