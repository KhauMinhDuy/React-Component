import {data} from '../../SpeakerData'
import SpeakerList from './SpeakerList'
import SpeakerToolBar from './SpeakerToolBar'
import Header from './Header'

const Speakers = (props) => {
  return (
    <div className="container-fluid">
      <Header />
      <SpeakerToolBar />
      <SpeakerList data={data} />
    </div>
  )
}

export default Speakers;