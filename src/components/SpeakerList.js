// @ts-nocheck
import Speaker from './Speaker'
import { data } from '../../SpeakerData'
import { useState } from 'react';

const SpeakerList = (props) => {

  const [speakersData, setSpeakersData] = useState(data)
  const { showSessions } = props;

  function onFavoriteToggle(id) {
    const speakerRecPrevious = speakersData.find(rec => {
      return rec.id === id
    })
    const speakerRecUpdate = {
      ...speakerRecPrevious,
      favorite: !speakerRecPrevious.favorite
    }

    const speakerDataNew = speakersData.map(rec => {
      return rec.id === id ? speakerRecUpdate : rec
    })

    setSpeakersData(speakerDataNew)
  }

  return (
    <div className="container speakers-list">
      <div className="row">
        {speakersData.map(speaker => {
          return (
            <Speaker 
              key={speaker.id} 
              speaker={speaker} 
              showSessions={showSessions}
              onFavoriteToggle={() => {
                onFavoriteToggle(speaker.id)
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SpeakerList;