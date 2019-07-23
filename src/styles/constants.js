const transitionTimes = {};

const animations = {};

const colors = {
  black: '#000',
  shadowGray: '#707070',
  beige: '#f7f7f0',
  osocBlue: '#0a0839',
  oscoBlueLighter: '#39367e',
  osocGreen: '#44dba4',
  osocRed: '#f14a3b',
  osocYellow: '#fcb70f'
};

const dimensions = {};
dimensions.appHeader = {
  height: '7rem'
};

dimensions.sideNav = {
  width: '20vw',
  height: `calc(100vh - ${dimensions.appHeader.height})`
};

export { transitionTimes, animations, colors, dimensions };
