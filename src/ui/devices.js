export const sizes = {
  mobileXS: 240,
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tabletS: 620,
  tablet: 768,
  laptopS: 860,
  laptop: 1024,
  laptopM: 1200,
  laptopL: 1440,
  desktop4K: 2560,
};

export const device = {
  mobileXXXS: `(min-width: 0px)`,
  mobileXS: `(min-width: ${sizes.mobileXS}px)`,
  mobileS: `(min-width: ${sizes.mobileS}px)`,
  mobileM: `(min-width: ${sizes.mobileM}px)`,
  mobileL: `(min-width: ${sizes.mobileL}px)`,
  tabletS: `(min-width: ${sizes.tabletS}px)`,
  tablet: `(min-width: ${sizes.tablet}px)`,
  laptopS: `(min-width: ${sizes.laptopS}px)`,
  laptop: `(min-width: ${sizes.laptop}px)`,
  laptopM: `(min-width: ${sizes.laptopM}px)`,
  laptopL: `(min-width: ${sizes.laptopL}px)`,
  desktop4K: `(min-width: ${sizes.desktop4K}px)`,
};
