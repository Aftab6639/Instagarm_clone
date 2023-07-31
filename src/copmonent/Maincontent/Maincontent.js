import React, {Component} from "react";
import "./Maincontent.css"
import Grid from '@mui/material/Grid';
import StatusBar from "../StatusBar/StatusBar";
import MainPage from "../MainPage/MainPage"
class Maincontent extends Component{
    constructor(props){
        super(props);
        this.state ={ }
    }
render() {
    return(
        <div>
               <Grid container>
              <Grid item xs ={2}></Grid>
              <Grid item xs ={6}className="maincontent__container" >
                <div>
                    <StatusBar/>
                    <MainPage/>
                </div>
              </Grid>
      <Grid>
      <Grid item xs ={2}></Grid>
      </Grid>
      <Grid>
      <Grid item ={2}></Grid>
      </Grid>
               </Grid>
        </div>
    );
}
}
export default Maincontent;