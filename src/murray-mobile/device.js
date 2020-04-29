import { Dimensions, Platform } from "react-native";

/*
 * Taken from https://github.com/react-community/react-native-safe-area-view/blob/master/index.js
 */
const X_WIDTH = 375;
const X_HEIGHT = 812;
const XR_WIDTH = 414;
const XR_HEIGHT = 896;

const getResolvedDimensions = () => {
  const { width, height } = Dimensions.get("window");
  if (width === 0 && height === 0) return Dimensions.get("screen");
  return { width, height };
};

const screenMatchesDeviceDimensions = (
  screenWidth,
  screenHeight,
  deviceWidth,
  deviceHeight
) => {
  return (
    (deviceWidth === screenWidth && deviceHeight === screenHeight) ||
    (deviceWidth === screenHeight && deviceHeight === screenWidth)
  );
};

export const isIPhoneX = (() => {
  if (Platform.OS !== "ios") {
    return false;
  }

  const { height: D_HEIGHT, width: D_WIDTH } = getResolvedDimensions();
  return (
    screenMatchesDeviceDimensions(D_WIDTH, D_HEIGHT, X_WIDTH, X_HEIGHT) ||
    screenMatchesDeviceDimensions(D_WIDTH, D_HEIGHT, XR_WIDTH, XR_HEIGHT)
  );
})();
