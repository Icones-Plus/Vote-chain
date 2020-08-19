import React from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import decode from 'jwt-decode'
// import { Button, Modal } from 'react-bootstrap';
import './style.css'




const WebcamCap = () => {
    const imageURL2 = decode(document.cookie).img_url;
    console.log("Second image", imageURL2)
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
        </>
    );
};

// export default WebcamCapture;












// const WebcamModal = props => {
//     const imageURL2 = decode(document.cookie).img_url;
//     const webcamRef = React.useRef(null);
//     const [imgSrc, setImgSrc] = React.useState(null);
//     const capture = React.useCallback(() => {
//         const imageSrc = webcamRef.current.getScreenshot();
//         setImgSrc(imageSrc);
//         axios.post("/webcam", {
//             image_base64_1: imageSrc.toString(),
//             image_url2: imageURL2
//         }).then(success => {
//             console.log("Success : Request sent to local server", success)
//         }).catch(err => {
//             console.log("Error in sending request to local server", err)
//         });
//     }, [webcamRef, setImgSrc]);



//     return (

//         <div>

//             <Modal
//                 {...props}
//                 size="lg"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title id="contained-modal-title-vcenter">
//                         Face Verification
//                     </Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <h4>Please verify it's you</h4>

//                     <>
//                         <h2>Hi cam</h2>
//                         <Webcam style={{
//                             width: "500px",
//                             height: "375px",
//                             border: "3px rgb(0, 0, 0) solid",
//                         }}
//                             audio={false}
//                             ref={webcamRef}
//                             screenshotFormat="image/jpeg"
//                             imageSmoothing="true"
//                         /><br /><br />
//                         <button className="button" onClick={capture}>Capture photo</button>
//                         <br /><br />
//                         {imgSrc && (
//                             <img
//                                 src={imgSrc}
//                             />
//                         )}
//                     </>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button onClick={props.onHide}>Close</Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>

//     );
// }

// function WebcamCapture() {
//     // const [modalShow, setModalShow] = React.useState(false);
//     state = {
//         showModal: false
//     }

//     return (
//         <>
//             <button variant="primary" >
//                 Hi
//             </button>
//             <div id="myModal" class="modal" style={{ display: this.state.showStore ? 'block' : 'none' }}>

//                 <div class="modal-content">
//                     <div class="modal-header">
//                         <span class="close" onClick={this.state.showModal = false}>&times;</span>
//                         <h2>Modal Header</h2>
//                     </div>
//                     <div class="modal-body">
//                         <WebcamCap/>
//                     </div>
//                     <div class="modal-footer">
//                         <h3>Modal Footer</h3>
//                     </div>
//                 </div>

//             </div>
//         </>
//     );
// }



export default WebcamCapture;