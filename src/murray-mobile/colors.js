import Color from "color";

//Primary colors
const alanGreen = Color("#22e39e");
const alanBlue = Color("#2e94fa");
const alanRed = Color("#ff7045");

//Complementary colors
const alanIndigo = Color("#5269d1");
const alanOrange = Color("#ff9a3e");
const alanYellow = Color("#fff256");
const alanPink = Color("#ffd4f0");
const alanCream = Color("#faedcf");

//Shades
const alanWhite = Color("#fff");
const alanGrey100 = Color("#fafafa");
const alanGrey200 = Color("#f4f4f4");
const alanGrey300 = Color("#e5e4e4");
const alanGrey400 = Color("#d4d2d2");
const alanGrey500 = Color("#c3c2c2");
const alanGrey600 = Color("#a3a0a0");
const alanGrey700 = Color("#837f7f");
const alanGrey800 = Color("#595454");
const alanGrey900 = Color("#302929");
const alanTransparent = Color("#ffffffff");
const alanWhite85 = alanWhite.fade(0.15);
const alanWhite70 = alanWhite.fade(0.3);

export default {
  blue: alanBlue,
  green: alanGreen,
  red: alanRed,
  indigo: alanIndigo,
  pink: alanPink,
  yellow: alanYellow,
  orange: alanOrange,
  cream: alanCream,
  action: alanBlue,
  app: alanBlue, //To be removed (legacy)
  brand: alanGreen,
  warning: alanRed,
  info: alanYellow,
  white: alanWhite,
  grey100: alanGrey100,
  grey200: alanGrey200,
  grey300: alanGrey300,
  grey400: alanGrey400,
  grey500: alanGrey500,
  grey600: alanGrey600,
  grey700: alanGrey700,
  grey800: alanGrey800,
  grey900: alanGrey900,
  transparent: alanTransparent,
  white70: alanWhite70,
  white85: alanWhite85
};
