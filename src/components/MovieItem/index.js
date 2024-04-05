import './index.css'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const Movieitem = props => {
  const {movie} = props
  return (
    <Popup
      model
      trigger={
        <button type="button">
          <img src={movie.thumbnailUrl} alt="thumbnail" />
        </button>
      }
      position="center"
    >
      {close => (
        <div className="popup-background">
          <button
            onClick={() => close()}
            data-testid="closeButton"
            type="button"
          >
            .<IoMdClose />
          </button>
          <ReactPlayer url={movie.videoUrl} />
        </div>
      )}
    </Popup>
  )
}

export default Movieitem
