import React from 'react'
import { LoopCircleLoading } from 'react-loadingg';

export default function loadingMessage(props) {
    return (<div style={{
        margin: "67px",
        paddingTop: "25%"
    }}>
        <div style={{
            marginLeft: "auto",
            width: "48px",
            marginRight: "auto",
            height: "48px",
            marginBottom: "36px"
        }}>

            <LoopCircleLoading />
        </div>
        <center style={{ /*margin: "auto", position: "absolute", left: "0px", right: "0px", top: "60%", bottom: "0px"*/ }}>
            <h1 style={{ top: "60%", fontSize: "30px" }}>{props.loadingMessage}</h1>
            <h1 style={{ fontSize: "15px" }}>
                {props.subtitle}
            </h1>
        </center>
    </div>)
}