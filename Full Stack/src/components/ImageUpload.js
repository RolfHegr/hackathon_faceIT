import React, { useEffect, useRef, useState } from "react";
import { useStepperContext } from "../contexts/StepperContext";

// import Button from "./Button";
import "./ImageUpload.css";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);
  const { userData, setUserData } = useStepperContext();
  const filePickerRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };


    useEffect(() => {
        if (!file) {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPreviewUrl(fileReader.result)
        };
        fileReader.readAsDataURL(file);

    }, [file])

  const pickedHandler = (event) => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
      handleChange(event)
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    // props.onInput(props.id, pickedFile, fileIsValid);
  };
  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className="form-control">
      <input
        value={userData['image_file'||'']}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        name="image_file"
        accept=".jpg,.png,.jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
         {previewUrl && <img src={previewUrl} alt="Preview" /> }
         {!previewUrl && <p>Please pick an image.</p>}
        </div>
        <button style={{backgroundColor:'#161819',color:"white",padding:'5px'}} type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </button>
      </div>
      {/* {!isValid && <p>{props.errorText}</p>} */}
    </div>
  );
};

export default ImageUpload;