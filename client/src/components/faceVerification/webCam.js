import React from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import decode from 'jwt-decode';
import Swal from 'sweetalert2';
import combine from './../candidate/index'




const WebcamCapture = (props) => {

    const imageURL2 = decode(document.cookie).img_url;
    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
        axios.post("/webcam", {
            image_base64_1: imageSrc.toString(),
            image_url2: imageURL2
        }).then(success => {
            console.log("Success : Request sent to local server", success)
            if (success.data >= 80) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Success',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    var id = props.name
                    props.handleClick(id);
                })
            } else if (success.data >= 70 && success.data < 80) {
                Swal.fire('Please take a clearer photo! \n Get close to camera if you are sitting far away')
            } else if (success.data < 70) {
                let name = decode(document.cookie).firstName;
                Swal.fire({
                    icon: 'error',
                    title: `Not ${name} !`
                })
            } else if (success.data === "Invalid image url") {
                Swal.fire('No face was detected!')
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!'
                })
            }
        }).catch(err => {
            console.log("Error in sending request to local server", err)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong with the server!',
            })
        });
    }, [webcamRef, setImgSrc]);



    return (
        <>
            <div>
                <h2>Face Verification</h2>
                <h4>Please take a moment to verify it's you</h4>
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
                <p style={{ color: "black" }}> Please enure that your face is uncovered, clear and close to the camera.</p>
            </div>

        </>
    );
};

export default WebcamCapture;




