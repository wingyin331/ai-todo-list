import React, { useState } from "react";
import Button from "./atomic/Button";
import SelectButton from "./atomic/SelectButton";
import PopUp from "./PopUp";

export default function Nav() {

  const [popUpvisible, setPopUpvisible] = useState(false)

  const handlePopUpOpen = () => {
    setPopUpvisible(true)
  }

  return (
    <div className="flex justify-between px-5 py-3 border-b-2 border-coffeeDark">
      <Button
      clickHandler={handlePopUpOpen}
      margin={"0em"} title={"Add task"} />
      <SelectButton width={"155px"} />
      <PopUp visible={popUpvisible} trigger={setPopUpvisible}/>
    </div>
  );
}
