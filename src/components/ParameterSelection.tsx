import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const ParameterSelection = () => {
  const stockId = Number(localStorage.getItem("stockId") || 0);
  const preImageId = Number(localStorage.getItem("preImageId") || 0);
  const postImageId = Number(localStorage.getItem("postImageId") || 0);
  const [isNext, setIsNext] = useState(
    () => localStorage.getItem("isNext") == "true"
  );
  const [isPreImage, setIsPreImage] = useState(
    () => localStorage.getItem("isPreImage") == "true"
  );

  const navigate = useNavigate();

  const handleNext = (): void => {
    if (isNext) {
      // 次の株を撮るときの初期設定
      localStorage.setItem("stockId", String(stockId + 1));
      localStorage.setItem("preImageId", String(1));
      localStorage.setItem("postImageId", String(1));
      localStorage.setItem("isNext", JSON.stringify(isNext));
      localStorage.setItem("isPreImage", JSON.stringify(isPreImage));
    } else {
      if (isPreImage) {
        localStorage.setItem("preImageId", String(preImageId + 1));
        localStorage.setItem("isNext", JSON.stringify(isNext));
        localStorage.setItem("isPreImage", JSON.stringify(isPreImage));
      } else {
        localStorage.setItem("postImageId", String(postImageId + 1));
        localStorage.setItem("isNext", JSON.stringify(isNext));
        localStorage.setItem("isPreImage", JSON.stringify(isPreImage));
      }
    }

    navigate("/capture");
  };

  return (
    <div className="flex-col gap-20 h-screen px-2">
      <h2>撮影パラメータを決定してください。</h2>
      <label>株: {stockId}</label>
      <br />
      <label>前: {preImageId}</label>
      <br />
      <label>後: {postImageId}</label>
      <br />
      <label>
        次の株を撮影しますか？
        <input
          type="checkbox"
          checked={isNext}
          onChange={() => setIsNext(!isNext)}
        />
      </label>
      <br />
      <label>
        次の画像は摘果前の画像ですか？
        <input
          type="checkbox"
          checked={isPreImage}
          onChange={() => setIsPreImage(!isPreImage)}
        />
      </label>
      <br />

      <button
        className="h-24 w-24 rounded-3xl bg-slate-300"
        onClick={handleNext}
      >
        撮影に進む
      </button>
    </div>
  );
};
