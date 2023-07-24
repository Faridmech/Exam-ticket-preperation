



import React from 'react';

//import { useFuad } from "Contex";



export const Pdf:React.FC = ()=>{
  //const {  questionArray } = useFuad();
  return (
    <div>
   
   <button
          onClick={() => {
            // Mind we are dynamically setting filename to be the
            // users movie input text, this can be anything you want.
            
            // All we want for this example are:
            // Title, Release Date, Description, Vote Average
            // This is important to the function we are building
            // because it sets the order in which we will display data
           

            // Here's the call for our pdf function
            // Because of the placeholder code in our pdf.js file,
            // clicking on this should render a save dialog
            // and downloading should render an empty pdf
            //pdf({data: headers})
          }}
        >
          Download PDF
        </button>
  </div>
  )
  
  
}