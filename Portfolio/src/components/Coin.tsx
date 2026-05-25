import { useState } from "react";
import type { CSSProperties } from "react";

type CoinProps = {
  style: CSSProperties;
};

function Coin({ style }: CoinProps) {
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleClick = (): void => {
    setClicked(true);

    setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  if (!visible) return null;

  return (
    <img
      src={clicked ? "/mario-sparkle-gif.png" : "/mario-coin-pixel.png"}
      onClick={handleClick}
      className="coin"
      style={style}
      alt="coin"
    />
  );
}

export default Coin;
