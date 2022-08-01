import Rating from './Components/Rating.js'
import Thanks from './Components/Thanks.js';
import { useState } from 'react';

function App() {

const [rating, setRating] = useState(0)
const [clicked, setClicked] = useState(false)
const [isSubmitted, setIsSubmitted] = useState(false)

const handleOne = () => {
    setRating(1)
    console.log({ rating })  
}

const handleTwo = () => {
    setClicked(true)
    setRating(2)
    console.log({ rating })  
}

const handleThree = () => {
    setClicked(true)
    setRating(3)
    console.log({ rating })  
}

const handleFour = () => {
    setClicked(true)
    setRating(4)
    console.log({ rating })  
}

const handleFive = () => {
    setClicked(true)
    setRating(5)
    console.log({ rating })  
}

const handleSubmit = () => {
  if(rating > 0){
  setIsSubmitted(true)
  } else {
    
  }
}

  
  return (
    <div className="bg-black">
      {!isSubmitted ? <Rating clickOne={handleOne} clickTwo={handleTwo} clickThree={handleThree} clickFour={handleFour} clickFive={handleFive} clickSubmit={handleSubmit} /> : <div></div>}
      {isSubmitted ? <Thanks rating={rating} /> : <div></div>}
    </div>
  );
}

export default App;

