import { Link, useNavigate } from "react-router-dom";
import { appUrl } from "../router/url";

export const CaptureSave = () => {
  const navigate = useNavigate();
  const handleOnSavePicutre = () => {
    savePicureInLocal(history.state?.usr?.dataUri);
    navigate(appUrl.home);
  };
  return (
    <>
      <img src={history.state?.usr?.dataUri} alt="Captured" />
      <Link to={appUrl.home}>設定画面に戻る</Link>
      <button onClick={handleOnSavePicutre}>保存する</button>
    </>
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
