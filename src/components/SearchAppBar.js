import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import LoginIcon from "@mui/icons-material/Login";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import MoreIcon from "@mui/icons-material/MoreVert";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useSearch } from "../contexts/SearchContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function PrimarySearchAppBar() {
  let search = useSearch();
  let [inputValue, setInputValue] = useState();

  let navigate = useNavigate();

  //---------
  let location = useLocation();
  let auth = useAuth();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        {!auth.user ? (
          <Button
            component={Link}
            to="/form"
            state={{ backgroundLocation: location }}
            color="inherit"
          >
            <LoginIcon color="secondary" />
            Login
          </Button>
        ) : (
          <Button>{auth.user}</Button>
        )}
      </MenuItem>
    </Menu>
  );
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted job", inputValue);
    if (inputValue) {
      search.setSearchParams({ q: inputValue });
    } else {
      search.setSearchParams({});
    }
    navigate(`/search?q=${inputValue}`);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <Search>
            <form onSubmit={(e) => handleSubmit(e)}>
              {/* <form> */}
              <SearchIconWrapper>
                <SearchIcon type="submit" color="secondary" />
              </SearchIconWrapper>

              <StyledInputBase
                value={search.searchParams.get("job")}
                // onChange={(e) => {
                //   jobsearch = e.target.value;
                //   // let job = e.target.value;
                //   // if (job) {
                //   //   search.setSearchParams({ job });
                //   // } else {
                //   //   search.setSearchParams({});
                //   // }
                // }}--> this is for front-end search
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </form>
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <MenuItem
              component={Box}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {!auth.user ? (
                <Button
                  component={Link}
                  to="/form"
                  state={{ backgroundLocation: location }}
                  color="inherit"
                >
                  <LoginIcon color="secondary" />
                  Login
                </Button>
              ) : (
                <>
                  <Button>{auth.user}</Button>
                  <Button onClick={auth.signout}>Logout</Button>
                </>
              )}
            </MenuItem>

            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="secondary"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </Box>
  );
}
