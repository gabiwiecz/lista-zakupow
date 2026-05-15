import React from "react";
import "./Box.css";

const Box = ({borderColor}) => {
    return(
        <div className="tytul" style={{borderColor}}>
             <br /> Zakupy w różnych sklepach 
        </div>
    );
};

export default Box;