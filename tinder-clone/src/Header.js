import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/TinderLogo-2017.svg" alt="" className="header__logo" />

            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>

        </div>
    );
}

export default Header;
