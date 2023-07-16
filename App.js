import React from "react";
import ReactDOM from "react-dom/client";

//JSX [JavaScript XML ]Super Power - 2 
//cross side scripting explained - 

/* What is cross side scripting ? */
/* 
Basically whenever a attacker tries to inject  some sort of scripts in user 
appplication through a click button or any event and then can control the user application then it is known as 
a security vulnerability as cross side scripting.

so even ewhe through an api a mailicious data is coming then also 
JSX  has a super power it does not directly assigns the data from the api 
First it checks and sanitize the data from the api then assigns it to JSX .
*/

//For eg :

const fetchApi = api.getData(); //getting malacious data through getData();

const heading = () =>
(
    <div>
    <h1>HI THERE CAN JSX PRINT MALICIOUS DATA ?</h1>
     <p>{ fetchApi }</p>
    <h2>NO , it can't  JSX has a super power it will sanitize
         the data and then assign it . Wohooooo !!!</h2>
    </div>
)