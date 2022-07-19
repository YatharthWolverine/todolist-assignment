import React from "react";

import { Text } from "atoms";

export const Heading = ({ name, color, textAlign, maxWidth, fontSize, lineHeight, ...props }) => {
  return (
    <Text
      maxWidth={maxWidth}
      fontSize={fontSize}   
      lineHeight={lineHeight}                                 
      fontWeight="700"     
      fontFamily="primaryRegular"       
      color={color} 
      textAlign={textAlign} 
      borderLeft="0.5rem solid"      
      borderColor={color}
      pl={{xs: "1.4rem", lg: "2.4rem"}}
      letterSpacing="0.07em"
    >
      {name}
    </Text>
  );
};

Heading.defaultProps = {
  color: "primary.500",
  maxWidth: "100%",
  flexDirection: "column",
  textAlign: "start",  
  fontSize:{ xs: "1.8rem", lg: "3.5rem" },
  lineHeight:{ xs: "2.9rem", lg: "5.8rem" }
};
