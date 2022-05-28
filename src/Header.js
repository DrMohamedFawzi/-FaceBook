import React from "react";
import "./Header.css"
import { FileDownload } from "@mui/icons-material";

import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import FlagIcon from '@material-ui/icons/Flag'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'

function Header() {
    return(
        <div className = "header">
            <div className = "header__left">
                <img
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
                    alt = "FB-Logo"
                />
                <div className = "header__input">
                    <SearchIcon />
                    <input type = "text" placeholder = "search facebook" className = "header__input__text" />
                </div>
            </div>
            <div className = "header__middle">
                <div className = "header__options header__options--active">
                    <HomeIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <FlagIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <SubscriptionsOutlinedIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <StorefrontOutlinedIcon fontSize = "large" />
                </div>
                <div className = "header__options">
                    <SupervisedUserCircleIcon fontSize = "large" />
                </div>
            </div>
    <div className="header_reight">

    </div>


    </div>

    )

}
export default Header;