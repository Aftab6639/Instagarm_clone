import React, { Component } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import download from "../../images/download.jfif";
class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="post__container">
                
                <div className="post__container">
                    <Avatar className="post__image" src="" />
                    <div className="username">UserName</div>
                </div>
                <div>
                    <img src={download} width="610px"/>
                </div>
                <div>

                </div>
                <div></div>
            </div>
        );
    }
}
export default Post;