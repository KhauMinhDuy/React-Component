const Session = ({ title, room }) => {
  return (
    <div>
      <div className="sessionBox card h-250">
        <span className="session w-100">
          {title} <strong>Room: {room}</strong>
        </span>
      </div>
    </div>
  )
}

const SpeakerImage = ({ first, last, id }) => {
  return (
    <div className="speaker-img d-flex flex-row justify-content align-items-center h-300">
      <img
        src={`/images/speaker-${id}.jpg`}
        alt={`${first} ${last}`}
        width="300"
        className="contain-fit"
      />
    </div>
  )
}

const SpeakerGraphics = (props) => {
  const { first, last, bio, company, twitterHandle, favorite } = props;
  return (
      <div className="speaker-info">
        <div className="d-flex justify-content-between mb-3">
          <h3 className="text-truncate w-200">
            {first} {last}
          </h3>
        </div>
        <div>
          <p className="card-description">
            {bio}
          </p>
          <div className="social d-flex flex-row mt-4">
            <div className="company">
              <h5>Company</h5>
              <h6>{company}</h6>
            </div>
            <div className="twitter">
              <h5>Twitter</h5>
              <h6>{twitterHandle}</h6>
            </div>
          </div>
        </div>
      </div>
  )
}

const Speaker = ({ speaker }) => {
  const { id, first, last, sessions } = speaker;
  return (
    <>
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
        <div className="card card-height p-4 mt-4">
          <SpeakerImage key={id} id={id} first={first} last={last} />
          <SpeakerGraphics {...speaker} />
        </div>
        <Session title={sessions[0].title} room={sessions[0].room.name} />
      </div>
    </>
  )
}

export default Speaker;