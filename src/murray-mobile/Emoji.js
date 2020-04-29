import React from "react";
import { emojis } from "./emojis/allEmojis";

const sizes = {
  tiny: {
    height: "24",
    width: "24"
  },
  small: {
    height: "32",
    width: "32"
  },
  medium: {
    height: "48",
    width: "48"
  },
  normal: {
    height: "64",
    width: "64"
  },
  large: {
    height: "128",
    width: "128"
  }
};

export const Emoji = ({ visual, defaultName, size = "normal" }) => {
  const _Emoji =
    emojis[visual] || (defaultName && emojis[defaultName.replace(/:/g, "")]);

  if (_Emoji) {
    const sizeData = sizes[size];
    return (
      <_Emoji
        width={sizeData.width}
        height={sizeData.height}
        viewBox="0 0 64 64"
      />
    );
  }

  return null;
};
