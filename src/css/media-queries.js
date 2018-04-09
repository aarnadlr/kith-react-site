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


const width = {
  width1: '450px',
  width2: '600px',
  width3: '700px',
  width4: '800px',
  width5: '900px',
  width6: '1000px',
  width7: '1200px',
  width8: '1400px'
}

export const screen = {
  width450: `(min-width: ${width.width1})`,
  width600: `(min-width: ${width.width2})`,
  width700: `(min-width: ${width.width3})`,
  width800: `(min-width: ${width.width4})`,
  width900: `(min-width: ${width.width5})`,
  width1000: `(min-width: ${width.width6})`,
  width1200: `(min-width: ${width.width7})`,
  width1400: `(min-width: ${width.width8})`
};