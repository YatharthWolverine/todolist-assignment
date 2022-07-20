import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { fontSize, variant } from "styled-system";
import PropTypes from "prop-types";

import { Box, Flex, Text, Loader } from "atoms";

const ButtonBase = styled(Box)`
  position: relative;
  cursor: pointer;
  outline: none;
  display: grid;
  align-items: center;
  font-family: "AxiformaRegular";
  height: 2.5rem;

  ${variant({
    variants: {
      primary: {
        color: "white",
        background:
          "linear-gradient(101.79deg, #652D90 -11.75%, #AE7FB8 111.02%)",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.16)",
        fontFamily: "primaryRegular",
        fontSize: "1.4rem",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
        transition: "all .3s",
        fontWeight: 500,
      },
      white: {
        background: "white",
        color: "primary.500",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.16)",
        fontFamily: "primaryRegular",
        fontSize: "1.6rem",
        borderRadius: "20px",
        border: "none",
        cursor: "pointer",
        transition: "all .3s",
        fontWeight: 600,
      },
      default: {
        background: "rgba(255, 255, 255, 0.1)",
        height: "3rem",
        color: "white",
        boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
        fontFamily: "primaryRegular",
        fontSize: "1.6rem",
        borderRadius: "5px",
        border: "1px solid #FFFFFF",
        cursor: "pointer",
        transition: "all .3s",
        fontWeight: 400,
      },
      disabled: {
        color: "grey.500",
        backgroundColor: "grey.600",
        cursor: "not-allowed",
        border: "none",
      },
    },
  })}
  &[disabled] {
    color: "grey.500";
    background-color: "grey.600";
    cursor: not-allowed;
  }
`;

export const Button = ({
  disabled,
  loading,
  children,
  variant: v = "primary",
  onClick,
  showAsyncLoad,
  fontWeight,
  classes,
  label,
  fontSize,
  ...rest
}) => {
  const [asyncLoading, setLoading] = useState(false);
  const onClickHandler = useCallback(
    async (...arg) => {
      setLoading(true);
      try {
        await onClick?.(arg);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    },
    [onClick]
  );

  return (
    <ButtonBase
      variant={v}
      as="button"
      color="white"
      {...rest}
      onClick={onClickHandler}
      disabled={disabled || loading || (showAsyncLoad && asyncLoading)}
      overflow="hidden"
      className={classes}
    >
      {(loading || (showAsyncLoad && asyncLoading)) && (
        <Flex
          left={0}
          right={0}
          position="absolute"
          justifyContent="center"
          alignItems="center"
          fontSize={2}
          height="15px"
          width="15px"
          mx="auto"
        >
          <Loader loading />
        </Flex>
      )}
      {label ? (
        <Text
          color="inherit"
          opacity={loading || (showAsyncLoad && asyncLoading) ? 0 : 1}
          id={label}
          fontSize={fontSize}
          fontWeight={fontWeight}
        />
      ) : (
        <Text
          color="inherit"
          opacity={loading || (showAsyncLoad && asyncLoading) ? 0 : 1}
          fontSize={fontSize}
          fontWeight={fontWeight}
        >
          {children}
        </Text>
      )}
    </ButtonBase>
  );
};

Button.defaultProps = {
  as: "button",
  width: "100%",
  fontSize: "1.6rem",
};

Button.propTypes = {
  // label: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  as: PropTypes.string,
  width: PropTypes.string,
};
