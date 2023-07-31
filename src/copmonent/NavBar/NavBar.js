import React, { Component } from "react";
import "./NavBar.css"
import { Grid } from "@mui/material";
import insta__logo from "../../images/logoinsta.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import react from "../../images/love.svg";
import Avatar from '@mui/material/Avatar';
import dp from "../../images/aftab.jpg"
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="navbar__barcontent">
                    <Grid container>
                        <Grid item xs={2}>

                        </Grid>
                        <Grid item xs={3}>
                            <img className="navbar__logo" src={insta__logo} width="105px" />
                        </Grid>
                        <Grid item xs={3}>
                            <input type="text" className="navbar__searchBar" placeholder="Search" />
                        </Grid>
                        <Grid item xs={3} style={{"display":"flex"}}>
                        <img className="navbar__img" src={home} width="25px"/>
                        <img className="navbar__img" src={message} width="25px"/>
                        <img className="navbar__img" src={find} width="25px"/>
                        <img className="navbar__img" src={react} width="25px"/>
                        <Avatar src={dp} className="navbar__img" style={{"maxHeight":"30px","maxWidth":"30px"}}/>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}
export default NavBar;