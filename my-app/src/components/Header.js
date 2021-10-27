import React from "react";

import Paper from "@material-ui/core/Paper";

function Header(){
    return(
        <Paper square elevation={3}>
            <img className="logo" src="https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124" alt="logo"/>
            <h2 className="web-name">React App</h2>

        </Paper>
    )
}
export default Header;