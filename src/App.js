import { useState } from "react";
import './App.css';
// import Typewriter from "typewriter-effect";
import Typewriter from "typewriter-effect";

function App() {

  const [showImg, setShowImg] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [showLast, setShowLast] = useState(false);

  const handleClick = () => {
    setShowImg(true);
  }

  const handleLst = () => {
    setShowLast(true);
  }

  return (
    <div className="App">

      <img className="imgHome" src={require("./images/bd.png")} alt="Main" />
      {
        (showImg && !showLast) &&
        <button onClick={handleLst}>
          <img className="mainImg" src={require("./images/main.jpeg")} alt="Home" />
        </button>}

      {!showImg && <>
        <div className="textClass">
          <h1 className="bdayText">Happiest <span className="gld">Golden</span> Birthday Dwarka's Badmoshhhh and little little Pookie</h1>

        </div>
        <button onClick={handleClick} className="btnhandle">Please click here, I will show you some badmoshi 🙂‍↔️</button>
      </>}

      {
        (showImg && !showMsg) &&
        <button onClick={() => setShowMsg(true)} className="btnhandle" style={{ margin: "17rem 28rem" }}>And now click here, for a beautiful message 🤌🏻</button>
      }

      {
        (showMsg && !showLast) &&
        <>

          <div className="textDiv">


            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString(
                  " <div className='btm'>To Mr. Abhishek Jaswal, </div>"
                ).pauseFor(1000

                ).pasteString(
                  "<br/> <br/>I hope you will achieve abundance of success, and will get everything you ever dreamt of.<br/><br/>"
                ).pauseFor(1000

                ).pasteString(
                  "I am so so so proud of you, I know ki kaise you have been evolved over the years, and trust me you are literally doing best. <br />"
                ).pauseFor(1000

                ).pasteString(
                  "I see how you take care of your family how much you love them, and this make me feel like you are such a gentleman although mujhe bhaut ulta bolta h tu badmosh.<br />  <br />"
                ).pauseFor(1000

                ).pasteString(
                  "But, as i said earlier as well you made me a better person. And, as you said fevicol ki trah chipak rakhi hai. Yes, I will stick by your side like I did. No matter how tough life becomes. <br />"
                ).pauseFor(1000

                ).pasteString(
                  "Baki badmoshi nhi rukni chhie Cheeteh 🐆.<br/>"
                ).pauseFor(1000

                ).pasteString(
                  "<p>Acha don't forget to look at your hands.... thodi badmoshi vali feeling di hai... </p>"
                ).pauseFor(1000

                ).pasteString(
                  " Best regards,"
                ).typeString(
                  " <div>Yours Chipku</div>"
                ).pasteString(
                  " <div>Wanna party???? Click on your photo badmoshh....</div>"
                ).start();
              }}
            />



          </div>


        </>

      }

      {
        showLast && <div>
          <img alt="last" className="imgHome" src={require("./images/last.gif")} />
        </div>
      }


    </div>

  );
}

export default App;
