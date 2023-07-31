import React, { Component } from "react";
import "./StatusBar.css";
import Avatar from '@mui/material/Avatar';
import download from "../../images/download.jfif";
class StatusBar extends Component{
    constructor(props){
        super(props)
        this.state ={ }
    }
    render() {
        return(
            <div>
                <div className="statusbar__container">
                    <div className="status">
                        <Avatar className="statusbar__status" src={download} />
                        <div className="statusbar__text">Zeeshan</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={download} />
                        <div className="statusbar__text">shakeel</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={download} />
                        <div className="statusbar__text">Ali Ahmad</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={download} />
                        <div className="statusbar__text">Nouman</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={download} />
                        <div className="statusbar__text">Aftab</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={download} />
                        <div className="statusbar__text">Zeshi</div>
                    </div>
                    <div className="status">
                        <Avatar className="statusbar__status" src={download} />
                        <div className="statusbar__text">Khuram</div>
                    </div>
                </div>
            </div>
   );
   }
}
export default StatusBar;