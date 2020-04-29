import React from "react";
import _ from "lodash";
import colors from "./colors";
import {
  Button as RButton,
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  TouchableOpacity,
} from "react-native";
import Icon from "./Icon";
import {
  baseUnit,
  baseVUnit,
  buttonBorderRadius,
  buttonBorderWidth,
  boldFont,
  isSmallScreen,
} from "./variables";
// import { Spinner } from "mobile/src/uikit/components/Spinner";

// export default function Button({children}){
//   return <RButton onPress={() => { console.log("Hello world!")}} title={children} />
// }

const buttonTypes = {
  app: {
    shape: {
      borderColor: colors.action,
      backgroundColor: colors.action,
    },
    children: { color: "white" },
    spinner: { color: "white" },
  },
  secondary: {
    shape: {
      borderColor: colors.action,
      backgroundColor: colors.white.fade(0.8),
    },
    children: { color: "app" },
    spinner: { color: "app" },
  },
  warning: {
    shape: {
      borderColor: colors.warning,
      backgroundColor: colors.warning,
    },
    children: { color: "white" },
    spinner: { color: "white" },
  },
  shadow: {
    shape: {
      borderColor: colors.white.alpha(0.5),
      backgroundColor: colors.white.alpha(0.1),
    },
    children: { color: "white" },
    spinner: { color: "white" },
  },
};

const buttonSizes = {
  lg: {
    shape: {
      paddingHorizontal: baseVUnit * 1.5 - buttonBorderWidth,
      height: baseUnit * 4 - buttonBorderWidth * 2,
    },
    children: {
      fontSize: isSmallScreen ? 14 : 18,
      marginTop: Platform.OS === "ios" ? 4 : 0,
    },
    icon: { gap: baseVUnit / 2, shift: baseVUnit / 3, size: "md" },
  },
  md: {
    shape: {
      paddingHorizontal: baseVUnit - buttonBorderWidth,
      height: baseUnit * 3.5 - buttonBorderWidth * 2,
    },
    children: { fontSize: 16, marginTop: Platform.OS === "ios" ? 2 : 0 },
    icon: { gap: baseVUnit / 2, shift: 2, size: 22 },
  },
  sm: {
    shape: {
      paddingHorizontal: baseVUnit - buttonBorderWidth,
      height: baseUnit * 3 - buttonBorderWidth * 2,
    },
    children: { fontSize: 12, marginTop: Platform.OS === "ios" ? 2 : 0 },
    icon: { gap: baseVUnit / 3, shift: 0, size: "sm" },
  },
};

const Button = ({
  children,
  onPress,
  type = "app",
  size = "md",
  disabled = false,
  leftIcon = null,
  rightIcon = null,
  showSpinner = false,
  extraStyles = {},
}) => {
  const buttonStyle = _.extend(
    {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: buttonBorderWidth,
      borderRadius: buttonBorderRadius,
      marginBottom: baseUnit,
    },
    buttonTypes[type].shape,
    buttonSizes[size].shape,
    extraStyles
  );
  const childrenStyle = _.extend(
    {
      fontFamily: boldFont,
      // fontFamily: "Open Sans",
    },
    buttonTypes[type].children,
    buttonSizes[size].children
  );
  const disabledChildrenStyle = _.extend({}, childrenStyle, { opacity: 0.8 });
  const textChildrenStyle = _.extend({}, childrenStyle);

  // Icon now takes string values for color (variant)
  // We need to continue to pass Color instances to Text, so we map the string values with `colors`
  textChildrenStyle.color = colors[textChildrenStyle.color];
  disabledChildrenStyle.color = colors[disabledChildrenStyle.color];

  const disabledButtonStyle = _.extend({}, buttonStyle, {
    backgroundColor: buttonStyle.backgroundColor.desaturate(0.3).fade(0.4),
    borderColor: buttonStyle.borderColor.desaturate(0.4).fade(0.6),
  });
  const iconSize = buttonSizes[size].icon.size;
  const iconShift = buttonSizes[size].icon.shift;
  const iconGap = buttonSizes[size].icon.gap;
  const spinnerColor = buttonTypes[type].spinner.color;
  if (showSpinner) {
    childrenStyle.opacity = 0;
    disabledChildrenStyle.opacity = 0;
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={disabled ? disabledButtonStyle : buttonStyle}
    >
      {leftIcon && (
        <View
          style={{
            marginRight: children ? iconGap : -iconShift,
            marginLeft: -iconShift,
            opacity: showSpinner ? 0 : disabled ? 0.3 : 1,
          }}
        >
          <Icon
            visual={leftIcon}
            variant={childrenStyle.color}
            size={iconSize}
          />
        </View>
      )}
      {children && (
        <Text
          style={
            disabled || showSpinner ? disabledChildrenStyle : textChildrenStyle
          }
          justify="center"
        >
          {size === "sm" ? children.toUpperCase() : children}
        </Text>
      )}
      {rightIcon && (
        <View
          style={{
            marginRight: -iconShift,
            marginLeft: iconGap,
            opacity: showSpinner ? 0 : disabled ? 0.3 : 1,
          }}
        >
          <Icon
            visual={rightIcon}
            variant={childrenStyle.color}
            size={iconSize}
          />
        </View>
      )}
      {/* {showSpinner && <Spinner color={colors[spinnerColor]} />} */}
    </TouchableOpacity>
  );
};

export default Button;
