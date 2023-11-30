// Navbar.js
import React, { useState } from "react";
import logo from "../../assests/logo.png";
import prologo from "../../assests/pro-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import "./Navbar.css";
import NavbarMenu from "./NavbarMenu";
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';

const Navbar = ({ handleSearch }) => {
  const [open, setOpen] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchQuery);
    }
  };

  const handleSearchClick = () => {
    if(searchQuery.length <= 0) {
      alert('Please enter a valid search query');
      return;
    }
    handleSearch(searchQuery);
  };

  return (
    <div className="header">
      <div className="navbar">
        <Link to={"/"}>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <div className="menu" onClick={handleClick}>
          <MenuIcon sx={{ color: "white" }} />
          <span>Menu</span>
        </div>
        <NavbarMenu open={open} handleClose={handleClose} />
        <div className="searchbar-container">
          <input type="text" placeholder="Search IMDb" value={searchQuery} onChange={handleInputChange} onKeyPress={handleKeyPress} />
          <Link to={'/search'} style={{ textDecoration: 'none' }}>
            <button onClick={handleSearchClick}>
              <SearchIcon />
            </button>
          </Link>
        </div>
        <div className="pro-logo">
          <img src={prologo} alt="" />
        </div>
        <div className="line"></div>
        <div className="watchlist">
          <BookmarkAddIcon sx={{ color: "white" }} />
          <span>Watchlist</span>
        </div>
        <Link to={'/signin'} style={{ textDecoration: 'none' }}>
          <span className="signin">Sign In</span>
         
        </Link>
        <Link to={'/signin'} style={{ textDecoration: 'none' }}>
        <LoginIcon sx={{ color: "white" }} className="login" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
