import { useLocation, useNavigate } from "react-router-dom";
import { appUrl } from "../router/url";

export const CaptureSave = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleOnSavePicture = () => {
    savePictureInLocal(
      location.state?.dataUri,
      location.state?.channel,
      location.state?.row,
      location.state?.fruitBunch,
      location.state?.isPreImage
    );
    navigate(appUrl.home, {
      state: {
        channel: location.state?.channel,
        row: location.state?.row,
        fruitBunch: location.state?.fruitBunch,
        isPreImage: location.state?.isPreImage,
      },
    });
  };
  return (
    <div className="grid content-around space-y-4 h-screen">
      <img
        className="mx-auto"
        src={history.state?.usr?.dataUri}
        alt="Captured"
      />
      <div className="flex justify-around">
        <button
          className="h-24 w-24 rounded-3xl bg-red-500"
          onClick={() => navigate(appUrl.home)}
        >
          設定画面へ
        </button>
        <button
          className="h-24 w-24 rounded-3xl bg-green-500"
          onClick={handleOnSavePicture}
        >
          保存する
        </button>
      </div>
    </div>
  );
};

const savePictureInLocal = (
  imageStr: string,
  channel: string,
  row: string,
  fruitBunch: string,
  isPreImage: boolean
) => {
  const link = document.createElement("a");
  link.href = imageStr;
  const now = new Date();
  const fileName = `${channel}_${row}_${fruitBunch}_${
    isPreImage ? "b" : "a"
  }_${now.getFullYear()}_${
    now.getMonth() + 1
  }_${now.getDate()}_${now.getHours()}_${now.getMinutes()}_${now.getSeconds()}`;
  link.download = `${fileName}.png`;
  link.click();
};
