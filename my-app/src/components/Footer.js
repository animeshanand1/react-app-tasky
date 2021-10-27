import React from "react";

function Footer(){
    return(
        <p style={{
            position:"absolute" ,
            bottom:0,
            textAlign:"center",
            width:"100%"
        }
     }>Copyright &copy;{new Date().getFullYear()}  Animesh</p>
    )
}

export default Footer;