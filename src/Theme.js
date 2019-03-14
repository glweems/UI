// import styled from 'styled-components';

// export const HeadingDisplay = styled.h1`
//   font-weight: black;
//   font-style: italic;
// `;

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const Device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
  mobile: `(max-width: ${size.mobileL})`,
};
export default {
  colors: {
    dark: '#222224',
    light: '#F0F0F0',
    grey: '#999',
    red: '#e80310',
    yellow: '#F8DC51',
    'soft-yellow': '#ead16a',
    yellow2: '#EAD16A',
    blue: '#3B4CCA',
  },
  shadow: {
    'box-shadow': '0px 0px 22px #8b7d1d;',
  },
};
