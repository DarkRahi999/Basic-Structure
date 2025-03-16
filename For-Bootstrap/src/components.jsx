import React from 'react'                                       // Y_---------{ React file  }----------//
import { Button } from 'react-bootstrap';                       // Y_---------{ Bootstrap cdn  }----------//
import { FaCheckCircle } from "react-icons/fa";                 // Y_---------{ FontAwesome cdn }----------//
export function Body(){
    return(
        <div className="div">
            <h2>Set up Ready</h2>
            <h2>all ok <br />
            <Button variant="primary">Click me  </Button><FaCheckCircle className='todoICON'/></h2>
        </div>
    )
}
