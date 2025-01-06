import { forwardRef } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";

const MainCard = forwardRef(
  (
    {
      border = true,
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
        ref={ref}
        {...others}
        sx={{
          border: border ? "1px solid" : "none",
          borderColor: appliedTheme.palette.primary.light + 25,
          boxShadow: 2,
          ":hover": {
            boxShadow: 1,
          },
          ...sx,
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
