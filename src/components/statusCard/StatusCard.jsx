import React, {useState} from "react";
import Card from "@mui/material/Card"
import { CardContent, CardHeader } from "@mui/material";

const styles = {
    card: { maxWidth: 400 },
    content: { maxWidth: 400}, 
    media: { height: 300 },
    avatar: {
      backgroundColor: "rgb(255, 0, 0)",
    },
  };

export default function StatusCard( props ){
    console.log("Status Card", props)
    if (props.status.status != null){
    return (
        <>
            <Card sx = {styles.card}>
                <CardHeader sx= {styles.header} title="Status"/>
                <CardContent>
                Detail Cost: {props.status.message}<br/>
                Total Cost: {props.status.extra}<br/>
                Elapsed Time: {props.status.elapsedTime}<br/>
                </CardContent> 
            </Card>
        </>
    )} else{
        return(<></>)
    }
}