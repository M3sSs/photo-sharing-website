import React, { useContext, useState, useEffect } from 'react';
import './NavbarStyle.css';
import { noteContext } from './NoteState';

const Navbar = () => {
  const {  query, updateContextState } = useContext(noteContext);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  // console.log(searchEnable,query)
  const handleCheckboxChange = () => {
    setIsCheckboxChecked(prevState => !prevState);
  };     

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuery = document.querySelector('#query').value;
    document.querySelector('#query').value = '';
    // console.log(updateContextState)
    updateContextState({ query: newQuery });
    
  };
  useEffect(() => {
    console.log( query);
    // updateContextState({ searchEnable: false, query: null });
  }, [ query]);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="header">
          <a href="/" className="navbar-logo">PicsArt</a>
          <div className="checkbox">
            <input
              type="checkbox"
              id="myCheckbox"
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="myCheckbox" className="checkbox-label">
              <img src="Images/menu-bar.png" alt="Image Over Checkbox" />
            </label>
          </div>
        </div>
        <ul className={`navbar-links ${isCheckboxChecked ? 'active' : ''}`}>
          <li><a href="#">You</a></li>
          <li><a href="/explore">Explore</a></li>
          <li><a href="#">Prints</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Get Pro</a></li>
          <li>
            <form className="search-form" type='submit' onSubmit={handleSubmit}>
              <input type="text" placeholder="Photos, people, or groups" id='query' />
              <a href='/search'><button type='submit' id='click'>click</button></a>
            </form>
          </li>
          <li><a href="#">More</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
