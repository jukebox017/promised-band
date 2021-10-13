import { Circle, Play } from 'react-feather';
import './Playback.css';

function Playback() {
  return (
    <div className="playback">
      <div className="controls">
        <div className="control">
          <Play color={"green"} fill={"green"} size={30} />
        </div>

        <div className="control">
          <Circle color={"red"} fill={"red"} size={30} />
        </div>
      </div>

      <input className="seekbar" type="range" min="0" max="100"></input>
    </div>
  )
}

export default Playback;
