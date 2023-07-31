import React, { Component } from "react";
import Grid from '@mui/material/Grid';
import './loginpage.css';
import inst_img from '../../images/9364675fb26a.svg';
import insta_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';


class Loginpage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>

                    </Grid>
                    <Grid item xs={6}>
                        <div className="loginpage__main">
                            <div>
                                <img src={inst_img} width="450" />
                            </div>
                            <div>
                                <div className="loginpage_rightcomponent">

                                    <img className="loginpage__logo" src={insta_logo} />

                                    <div className="loginPage__signin">
                                        <input className="loginpage__text" type="text" placeholder="Phone number,username or email" />
                                        <input className="loginpage__text" type="password" placeholder="Password " />
                                        <button className="login__button">Log In</button>
                                    </div>
                                    <div>

                                        <div className="login__ordiv">
                                            <div className="login__dividor"></div>
                                            <div className="login__or">OR</div>
                                            <div className="login__dividor">
                                            </div>
                                        </div>
                                        <div>
                                            <div className="login__fb">
                                                <img src={fb} width="15px" />Log in with Facebook
                                            </div>

                                            <div className="login__forgot">Forgot Password?</div>
                                        </div>

                                    </div>

                                </div>
                                <div className="loginpage__signupoption">
                                    <div className="loginpage__signin">
                                        Don't have an account?<span style={{ color: 'blue' }}> Sign up</span>
                                    </div>
                                    <div className="loginpage__downloadsection">
                                        <div>
                                            Get the app
                                        </div>

                                        <div className="loginpage__optin">
                                            <img className="loginpage__dawing" src={appstore} width="136px" />
                                            <img className="loginpage__dawing" src={playstore} width="136px" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={3}>

                    </Grid>

                </Grid>
            </div>
        )
    }
}
export default Loginpage;