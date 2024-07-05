import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ParameterSelection = () => {
  const location = useLocation();
  const [channel, setChannel] = useState(location.state?.channel || "1");
  const [row, setRow] = useState(location.state?.isPreImage || "1");
  const [fruitBunch, setFruitBunch] = useState(
    location.state?.fruitBunch || "1"
  );
  const [isPreImage, setIsPreImage] = useState(
    location.state?.isPreImage || true
  );

  const navigate = useNavigate();

  const handleNext = (): void => {
    navigate("/capture", {
      state: {
        channel,
        row,
        fruitBunch,
        isPreImage,
      },
    });
  };

  return (
    <div className="flex-col gap-20 h-screen px-2">
      <h2>撮影パラメータを決定してください。</h2>
      <label>
        チャンネル番号:
        <input
          type="number"
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
          className="border rounded p-2"
        />
      </label>
      <br />
      <label>
        列番号:
        <input
          type="number"
          value={row}
          onChange={(e) => setRow(e.target.value)}
          className="border rounded p-2"
        />
      </label>
      <br />
      <label>
        果房番号:
        <input
          type="text"
          value={fruitBunch}
          onChange={(e) => setFruitBunch(e.target.value)}
          className="border rounded p-2"
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
