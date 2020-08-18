import React from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
// import cors from 'cors'
// import { response } from '../../../../server/server';
// This should already be declared in your API file



const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);


    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);



        console.log(imageSrc);









        axios.post("/webcam", {
            image_base64_1: imageSrc.toString(),
            image_url2: 'https://ca.slack-edge.com/TTW205AAU-U011K4W1CBY-c316cefdce24-512'
        }).then(success => {
            console.log("Success : Request sent to local server", success)
        }).catch(err => {
            console.log("Error in sending request to local server", err)
        });



    }, [webcamRef, setImgSrc]);







    return (
        <>
            <h2>Hi cam</h2>
            <Webcam style={{
                width: "500px",
                height: "375px",
                border: "3px rgb(0, 0, 0) solid"
            }}
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                imageSmoothing="true"
            /><br /><br />
            <button className="button" onClick={capture}>Capture photo</button>
            <br /><br />
            {imgSrc && (
                <img
                    src={imgSrc}
                />
            )}
            {/* {console.log(imgSrc)} */}
        </>
    );
};

export default WebcamCapture;







// curl - X POST "https://api-us.faceplusplus.com/facepp/v3/compare" \
// -F "api_key=nMjgy48bWF3WaVovNllv-EgWV2CsnFqP" \
// -F "api_secret=<api_secret>" \
// -F "image_url1=https://cdn.faceplusplus.com/mc-official/scripts/demoScript/images/demo-pic39.jpg" \
// -F "image_url2=https://cdn.faceplusplus.com/mc-official/scripts/demoScript/images/demo-pic33.jpg"