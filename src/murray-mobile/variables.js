import { Platform, StatusBar, Dimensions, StyleSheet } from "react-native";
import { isIPhoneX } from "./device";
import colors from "./colors";

const baseNumber = 4;
const baseUnit = 3 * baseNumber;
const baseVUnit = 4 * baseNumber;

const buttonBorderWidth = 2;
const buttonBorderRadius = baseUnit / 2;

const smallScreen = 320;
const mediumScreen = 375;
const isSmallScreen = Dimensions.get("window").width < mediumScreen;

const navBarHeight = Platform.OS === "ios" ? 11 * baseNumber : 14 * baseNumber;
const navBarIconButtonHeight =
  Platform.OS === "ios" ? 6 * baseNumber : 7 * baseNumber;
const tabBarHeight = Platform.OS === "ios" ? 50 : 56;

// eslint-disable-next-line import/no-mutable-exports
let statusBarHeight = StatusBar.currentHeight;
if (isIPhoneX) {
  statusBarHeight = 44;
} else if (Platform.OS === "ios") {
  statusBarHeight = 20;
}

export const iPhoneXBottomOffset = isIPhoneX ? 2 * baseUnit : 0;

export const SHARE_ICON = Platform.OS === "ios" ? "shareIos" : "shareAndroid";

const extraLightFont = "FilsonProRegular";
const lightFont = "FilsonProRegular";
const regularFont = "FilsonProRegular";
const mediumFont = "FilsonProMedium";
const boldFont = Platform.OS === "ios" ? "FilsonProBold" : "FilsonProMedium";
const heavyFont = Platform.OS === "ios" ? "FilsonProHeavy" : "FilsonProMedium";

const listSeparatorWidth = StyleSheet.hairlineWidth;
const listSeparatorColor = colors.grey300;
const listSeparatorTopStyle = {
  borderTopColor: listSeparatorColor,
  borderTopWidth: listSeparatorWidth
};
const listSeparatorBottomStyle = {
  borderBottomColor: listSeparatorColor,
  borderBottomWidth: listSeparatorWidth
};

const paragraphSizes = {
  extraSmall: { fontSize: 12, fontFamily: regularFont },
  small: { fontSize: 14, fontFamily: regularFont },
  medium: { fontSize: 16, fontFamily: regularFont },
  large: { fontSize: 18, fontFamily: regularFont }
};

const titleSizes = {
  h1: { fontSize: 42, lineHeight: 4 * baseUnit, fontFamily: heavyFont },
  h2: { fontSize: 36, lineHeight: 3.5 * baseUnit, fontFamily: heavyFont },
  h3: { fontSize: 32, lineHeight: 3 * baseUnit, fontFamily: boldFont },
  h4: { fontSize: 28, lineHeight: 3 * baseUnit, fontFamily: boldFont },
  h5: { fontSize: 24, lineHeight: 2.6 * baseUnit, fontFamily: boldFont },
  h6: { fontSize: 20, lineHeight: 2 * baseUnit, fontFamily: boldFont },
  h7: { fontSize: 18, lineHeight: 2 * baseUnit, fontFamily: boldFont }
};

export {
  baseUnit,
  baseVUnit,
  buttonBorderRadius,
  buttonBorderWidth,
  extraLightFont,
  lightFont,
  regularFont,
  mediumFont,
  boldFont,
  heavyFont,
  paragraphSizes,
  titleSizes,
  statusBarHeight,
  navBarHeight,
  tabBarHeight,
  navBarIconButtonHeight,
  smallScreen,
  mediumScreen,
  isSmallScreen,
  listSeparatorWidth,
  listSeparatorTopStyle,
  listSeparatorBottomStyle
};
