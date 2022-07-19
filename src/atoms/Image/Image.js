import React from "react";

import { ImageWrapper } from "./Image.styles";

export const Image = React.memo(({ src, alt, ...rest }) => (
  <ImageWrapper {...rest}>
    <img src={src} alt={alt} width="100%" height="100%" />
  </ImageWrapper>
));
