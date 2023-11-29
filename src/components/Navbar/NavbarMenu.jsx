import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
const NavbarMenu = ({open , handleClose}) => {
  const openMenu = Boolean(open);
  return (
    <Menu
        id="basic-menu"
        anchorEl={open}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={'/category/popular'}style={{textDecoration:'none', color:'inherit'}}>
        <MenuItem onClick={handleClose}>Popular</MenuItem>
        </Link>
        <Link to={'/category/top_rated'}style={{textDecoration:'none', color:'inherit'}}>
        <MenuItem onClick={handleClose}>Top Rated</MenuItem>
        </Link>
        <Link to={'/category/now_playing'}style={{textDecoration:'none', color:'inherit'}}>
        <MenuItem onClick={handleClose}>Now Playing</MenuItem>
        </Link>
      </Menu>
  )
}

export default NavbarMenu
