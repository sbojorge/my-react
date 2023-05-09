import React from 'react';

function EventsFunctional() {
  function clickHandler(){
    console.log("It's a beautiful day")
  }
  
  return (
    <div>
      <button onClick={clickHandler}>clic me-functional component</button>
    </div>
  )
}

export default EventsFunctional;
