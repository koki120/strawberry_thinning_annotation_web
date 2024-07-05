import { useRef } from "react";
import { Camera } from "react-camera-pro";
import { useLocation, useNavigate } from "react-router-dom";
import { appUrl } from "../router/url";

interface Camera {
  takePhoto: () => string;
}
export const Capture = () => {
  const camera = useRef<Camera | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleTakePhoto = () => {
    if (camera.current) {
      const dataUri = camera.current.takePhoto();
      navigate(appUrl.captureSave, {
        state: {
          channel: location.state?.channel,
          row: location.state?.row,
          fruitBunch: location.state?.fruitBunch,
          isPreImage: location.state?.isPreImage,
          dataUri,
        },
      });
    } else {
      console.error("Camera reference is null");
    }
  };

  return (
    <>
      <Camera
        ref={camera}
        facingMode="environment"
        errorMessages={{
          noCameraAccessible: undefined,
          permissionDenied: undefined,
          switchCamera: undefined,
          canvas: undefined,
        }}
      />
      <button
        className="absolute z-50 bottom-10 left-1/2 transform -translate-x-1/2 rounded-full w-20 h-20 bg-slate-400 opacity-80"
        onClick={handleTakePhoto}
      />
    </>
  );
};
