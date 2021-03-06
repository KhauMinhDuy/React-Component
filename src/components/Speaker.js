import React, { useContext, useState } from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";

const Session = ({ title, room }) => {
  return (
    <div>
      <div className="sessionBox card h-250">
        <span className="session w-100">
          {title} <strong>Room: {room}</strong>
        </span>
      </div>
    </div>
  );
};

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
  );
};

const SpeakerFavorite = ({ favorite, onFavoriteToggle }) => {
  const [inTransition, setInTransition] = useState(false);

  const doneCallback = () => {
    setInTransition(false);
    console.log(
      `In SpeakerFavorite:doneCallback ${new Date().getMilliseconds()}`
    );
  };

  return (
    <div className="active padB1">
      <span
        onClick={() => {
          setInTransition(true);
          return onFavoriteToggle(doneCallback);
        }}
      >
        <em
          className={
            favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
          }
        />{" "}
        Favorite{" "}
        {inTransition ? (
          <span className="fas fa-circle-notch fa-spin"></span>
        ) : null}
      </span>
    </div>
  );
};

const SpeakerGraphics = (props) => {
  const {
    first,
    last,
    bio,
    company,
    twitterHandle,
    favorite,
    onFavoriteToggle,
  } = props;
  return (
    <div className="speaker-info">
      <div className="d-flex justify-content-between mb-3">
        <h3 className="text-truncate w-200">
          {first} {last}
        </h3>
      </div>

      <SpeakerFavorite
        favorite={favorite}
        onFavoriteToggle={onFavoriteToggle}
      />

      <div>
        <p className="card-description">{bio}</p>
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
  );
};

const Speaker = ({ speaker, onFavoriteToggle }) => {
  const { id, first, last, sessions } = speaker;
  const { showSessions } = useContext(SpeakerFilterContext);
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <SpeakerImage key={id} id={id} first={first} last={last} />
        <SpeakerGraphics {...speaker} onFavoriteToggle={onFavoriteToggle} />
      </div>
      {showSessions === true ? (
        <Session title={sessions[0].title} room={sessions[0].room.name} />
      ) : null}
    </div>
  );
};

export default Speaker;
