// BASED ON CHROME DEV TOOLS DEVICE WIDTHS:

// ORIGINALS:
// const width = {
//   mobileS: '320px',
//   mobileM: '375px',
//   mobileL: '425px',
//   tablet: '768px',
//   laptop: '1024px',
//   laptopL: '1440px',
//   desktop: '2560px'
// }

// export const device = {
//   mobileS: `(min-width: ${width.mobileS})`,
//   mobileM: `(min-width: ${width.mobileM})`,
//   mobileL: `(min-width: ${width.mobileL})`,
//   tablet: `(min-width: ${width.tablet})`,
//   laptop: `(min-width: ${width.laptop})`,
//   laptopL: `(min-width: ${width.laptopL})`,
//   desktop: `(min-width: ${width.desktop})`,
//   desktopL: `(min-width: ${width.desktop})`
// };

// USAGE:
// @media ${screen.width700} {
//   flex-wrap: nowrap;
// }
// @media ${screen.width800} {
//  padding: 0 80px;
// }

const width = {
  width1: '400px',
  width2: '500px',
  width3: '600px',
  width4: '700px',
  width5: '800px',
  width6: '900px',
  width7: '1000px',
  width8: '1200px',
  width9: '1400px'
}

export const screen = {
  width400: `(min-width: ${width.width1})`,
  width500: `(min-width: ${width.width2})`,
  width600: `(min-width: ${width.width3})`,
  width700: `(min-width: ${width.width4})`,
  width800: `(min-width: ${width.width5})`,
  width900: `(min-width: ${width.width6})`,
  width1000: `(min-width: ${width.width7})`,
  width1200: `(min-width: ${width.width8})`,
  width1400: `(min-width: ${width.width9})`
};