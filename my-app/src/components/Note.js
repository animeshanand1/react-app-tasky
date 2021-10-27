import { Button, Paper } from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note({title ,content,id,delNote}){
    function clickHandler(){
        delNote(id);
    }
    return(
        <Paper style={{
            minHeight:"100px",
            minWidth:"200px",
            margin:"20px",
            padding:"15px",
            display:"inline-flex"
        }}>
            <div>
            <h2>{title}</h2>
            <p>{content}</p>
            </div>
            <Button onClick={clickHandler} style={{marginLeft:"120px"}}>
                <DeleteIcon style={{color:"red"}}/>
                </Button>

        </Paper>

    )
}

export default Note;