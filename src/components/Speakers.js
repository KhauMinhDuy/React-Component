import SpeakerList from "./SpeakerList";
import SpeakerToolBar from "./SpeakerToolBar";
import { SpeakerFilterProvider } from "../contexts/SpeakerFilterContext";

const Speakers = () => {
  return (
    <SpeakerFilterProvider startingShowSessions={false}>
      <SpeakerToolBar />
      <SpeakerList />
    </SpeakerFilterProvider>
  );
};

export default Speakers;
