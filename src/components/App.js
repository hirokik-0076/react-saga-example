import React from 'react';
import Butoon from '../containers/Button';
import NewsItem from '../containers/NewsItem';
import Loading from '../containers/Loading';

let App = () => (
  <div>
    <Butoon />
    <Loading />
    <NewsItem />
  </div>
);

export default App;
