import Dialog from "./components/Dialog";
import StarRating from "./components/StarRating";
import { useState } from "react";

function App() {
  const [stars, setStars] = useState(0);
  const [show, setDg] = useState(false);

  const dial = () => {
    setDg(true)
  }
  const undial = () => {
    setDg(false)
  }

  const remark =[
            "",
            "Rubbish",
            "Bad",
            "Okay",
            "Great",
            "Excellent"
        ]

  return (
    <div className="main">
      <StarRating stars={stars} setStars={setStars} remark={remark}/>
      <Dialog show={show} dial={dial} stars={stars} remark={remark} undial={undial}/>
    </div>
  );
}

export default App;
