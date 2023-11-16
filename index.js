"use strict";

const backgroundColor = "#32324b";
const foregroundColor = "#f8f8f2";
const borderColor = "#32324b";
const cursorColor = "#f8f8f2";
const colors = {
  black: "#000000",
  red: "#ff7070",
  green: "#1DC121",
  yellow: "#C7C329",
  blue: "#8be9fd",
  magenta: "#C839C5",
  cyan: "#a8ffde",
  white: "#C7C7C7",
  lightBlack: "#686868",
  lightRed: "#ff7070",
  lightGreen: "#67F86F",
  lightYellow: "#FFFA72",
  lightBlue: "#6A76FB",
  lightMagenta: "#ff79c6",
  lightCyan: "#8be9fd",
  lightWhite: "#FFFFFF",
  limeGreen: "#32CD32",
  lightCoral: "#F08080",
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
    ${config.css || ""}
    .tabs_list .tab_tab.tab_active .tab_text  {
      background: ${backgroundColor};
    }

    .tab_active:before {
      border-color: ${borderColor};
    }
  `,
  });
};
