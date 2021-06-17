import Speaker from './Speaker'

const SpeakerList = (props) => {
  const {data, showSessions} = props;
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map(speaker => <Speaker key={speaker.id} speaker={speaker} showSessions={showSessions} /> )};
      </div>
    </div>
  )
}

export default SpeakerList;