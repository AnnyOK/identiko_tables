//I defined my screen sizes here
const sizes ={
    mobileS:"320px",
    mobileM:"375px",
    mobileL:"425px",
    tablets:"768px",
    laptop:"1024px",
    laptopL:"1440px",
    desktop:"2560px"
  }
  ///my devices
  export const devices ={
    mobileS:`(min-width:${sizes.mobileS})`,
    mobileM:`(min-width:${sizes.mobileM})`,
    mobileL:`(min-width:${sizes.mobileL})`,
    tablets:`(min-width:${sizes.tablets})`,
    laptop:`(min-width:${sizes.laptop})`,
    laptopL:`(min-width:${sizes.laptopL})`,
    desktop:`(min-width:${sizes.desktop})`,
  }
  