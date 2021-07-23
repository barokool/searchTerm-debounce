import './App.css';
import React, { useState, useEffect } from 'react';
import PostList from './components/fetchData/index';
import Pagination from './components/fetchData/pagination';
import queryString from 'query-string'
import SearchTerm from '../src/components/searchterm'

function App() {
  const [userData, setUserData] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  })
  const [filters, setFilters] = useState({
    _litmit: 10,
    _page: 1,

  })
  useEffect(() => {
    async function fetchData() {
      const paramsString = queryString.stringify(filters)
      const requesturl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
      const response = await fetch(requesturl);
      const responseJSON = await response.json();
      console.log({ responseJSON });
      const { data, pagination } = responseJSON;
      setUserData(data);
      setPagination(pagination);
    }
    fetchData();
  }, [filters]);

  function handlePageChange(page) {
    console.log(page);
    setFilters({ ...filters, _page: page });
  }
  function handleFilterChange(newFilter) {
    console.log(newFilter)
    setFilters({ ...filters, _page: 1, title_like: newFilter.searchTerm })
  }

  return (
    <div className="App">
      <SearchTerm onSubmit={handleFilterChange} />
      <PostList posts={userData} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div >
  );
}

export default App;
