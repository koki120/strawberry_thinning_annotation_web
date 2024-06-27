import { useNavigate } from "react-router-dom";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { appUrl } from "../router/url";

export const Capture = () => {
  const navigate = useNavigate();

  const handleTakePhoto = (dataUri: string) => {
    navigate(appUrl.captureSave, { state: { dataUri } });
  };

  return (
    <Camera
      onTakePhoto={(dataUri) => {
        handleTakePhoto(dataUri);
      }}
    />
  );
};
