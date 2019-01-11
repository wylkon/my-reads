import React from 'react';
import Library from '../components/Library';
import AddNewBook from '../components/AddNewBook';

const Home = state => (
  <div>
    <Library {...state} />
    <AddNewBook />
  </div>
);

export default Home;
