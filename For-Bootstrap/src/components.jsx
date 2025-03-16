import React from 'react'
import { Button } from 'react-bootstrap';
import { FaCheckCircle } from "react-icons/fa";
export function Body(){
    return(
        <div className="div">
            <h2>Set up Ready</h2>
            <h2>all ok <br />
            <Button variant="primary">Click me  </Button><FaCheckCircle className='todoICON'/></h2>
        </div>
    )
}
