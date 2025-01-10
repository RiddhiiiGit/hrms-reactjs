/* eslint-disable react/prop-types */
import { forwardRef } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import React, { forwardRef } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

// eslint-disable-next-line react/display-name
const MainCard = forwardRef(
  (
    {
      border = true,
      // eslint-disable-next-line no-unused-vars
      boxShadow,
      children,
      content = true,
      contentClass = "",
      contentSX = {},
      headerSX = {},
      divider = true,
      darkTitle,
      secondary,
      avatar,
      // eslint-disable-next-line no-unused-vars
      shadow,
      sx = {},
      title,
      ...others
    },
    ref
  ) => {
    const appliedTheme = useTheme();

    return (
      <Card
        sx={{
          // border: border ? "1px solid" : "none",
          boxShadow: 2,
          ":hover": {
            boxShadow: 1,
          },
        }}
      >
        {/* card header and action */}
        {title && (
          <CardHeader
            sx={{ "& .MuiCardHeader-action": { mr: 0 }, ...headerSX }}
            title={
              darkTitle ? <Typography variant="h3">{title}</Typography> : title
            }
            action={secondary}
            avatar={avatar}
          />
        )}

        {/* content & header divider */}
        {title && divider && <Divider />}

        {/* card content */}
        {content && (
          <CardContent sx={contentSX} className={contentClass}>
            {children}
          </CardContent>
        )}
        {!content && children}
      </Card>
    );
  }
);

export default MainCard;
