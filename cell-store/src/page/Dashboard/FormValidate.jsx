import React from "react";




export function Validator(input){

    let err = {}


    if(input.username.length >= 25) {
        err.username = '*maximo 25 caracteres'
      
    } else if(input.username.length == 0) {
        err.username = '*nombre requerido'
      }

    if(input.email.length == 0 ) {
        err.email = '*email requerido'
   } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(input.email)) {
          err.email = '*email invalido'
      } 
    
    
          return err

}