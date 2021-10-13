import { Circle, Play } from 'react-feather';
import './Playback.css';

function Playback() {
  async function beginRecording() {
    console.log('begin recording!');

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start();

    const audioChunks: any[] = [];

    mediaRecorder.addEventListener('dataavailable', event => {
      audioChunks.push(event.data);
    });

    mediaRecorder.addEventListener('stop', () => {
      const audioBlob = new Blob(audioChunks);
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();
    });

    setTimeout(() => {
      mediaRecorder.stop();
    }, 6000);
  }

  return (
    <div className="playback">
      <div className="controls">
        <div className="control">
          <Play color={"green"} fill={"green"} size={30} />
        </div>

        <div className="control" onClick={() => beginRecording()}>
          <Circle color={"red"} fill={"red"} size={30} />
        </div>
      </div>

      <input className="seekbar" type="range" min="0" max="100"></input>
    </div>
  )
}

export default Playback;
