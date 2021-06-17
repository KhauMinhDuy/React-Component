import { useState } from "react";
import SpeakerList from "./SpeakerList";
import SpeakerToolBar from "./SpeakerToolBar";

const Speakers = (props) => {

  const [showSessions, setShowSessions] = useState(true);
  const {data, theme, setTheme} = props
  return (
    <>
      <SpeakerToolBar
        theme={theme} setTheme={setTheme}
        showSessions={showSessions} setShowSessions={setShowSessions} />
      <SpeakerList data={data} showSessions={showSessions}/>
    </>
  )
}

export default Speakers;
