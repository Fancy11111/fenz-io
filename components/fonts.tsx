import { Global } from '@emotion/react';

const Fonts = () => {
  return <Global
    styles={`
      @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Abel&family=Roboto&display=swap');
    `}
  />
}

export default Fonts;