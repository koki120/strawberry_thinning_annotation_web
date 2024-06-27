import { useNavigate } from "react-router-dom";
import { appUrl } from "../router/url";

export const CaptureSave = () => {
  const navigate = useNavigate();
  const handleOnSavePicutre = () => {
    savePicureInLocal(history.state?.usr?.dataUri);
    navigate(appUrl.home);
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
          onClick={handleOnSavePicutre}
        >
          保存する
        </button>
      </div>
    </div>
  );
};

const savePicureInLocal = (imageStr: string) => {
  const stockId = localStorage.getItem("stockId");
  const preImageId = localStorage.getItem("preImageId");
  const postImageId = localStorage.getItem("postImageId");
  const isPreImage = localStorage.getItem("isPreImage") == "true";

  const link = document.createElement("a");
  link.href = imageStr;
  const now = new Date();
  link.download = `${now.getFullYear()}_${
    now.getMonth() + 1
  }_${now.getDate()}_${now.getDate()}_${stockId}_${
    isPreImage ? preImageId : postImageId
  }_${isPreImage ? "before" : "after"}.png`;
  link.click();
};
