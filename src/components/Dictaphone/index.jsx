import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function Dictaphone() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div style={{border:"2px solid black",margin:"200px",width:"50%",padding:"50px",textAlign:"center",height:"500px",backgroundColor:"GrayText",marginLeft:"400px"}}>
      <p style={{fontSize:"2.5rem"}}>Microphone: {listening ? 'on' : 'off'}</p>
      <button style={{padding:"10px",backgroundColor:"black",color:"white",marginRight:"10px"}} onClick={SpeechRecognition.startListening}>Start</button>
      <button style={{padding:"10px",backgroundColor:"black",color:"white",marginRight:"10px"}} onClick={SpeechRecognition.stopListening}>Stop</button>
      <button style={{padding:"10px",backgroundColor:"black",color:"white",marginRight:"10px"}} onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  )
}
export default Dictaphone;