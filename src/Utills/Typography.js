const themeTypography = (appliedTheme) => ({
  fontFamily: appliedTheme?.customization?.fontFamily || "Arial, sans-serif",

  h6: {
    fontWeight: 500,
    fontSize: "0.75rem",
    color: appliedTheme.palette.text.grey900,
  },
  h5: {
    fontSize: "0.875rem",
    color: appliedTheme.palette.text.grey900,
    fontWeight: 500,
  },
  h4: {
    fontSize: "1rem",
    color: appliedTheme.palette.text.grey900,
    fontWeight: 600,
  },
  h3: {
    fontSize: "1.25rem",
    color: appliedTheme.palette.text.grey900,
    fontWeight: 600,
  },
  h2: {
    fontSize: "1.5rem",
    color: appliedTheme.palette.text.grey900,
    fontWeight: 700,
  },
  h1: {
    fontSize: "2.125rem",
    color: appliedTheme.palette.text.grey900,
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: "0.875rem",
    fontWeight: 500,
    color: appliedTheme.palette.text.grey900,
  },
  subtitle2: {
    fontSize: "0.75rem",
    fontWeight: 400,
    color: appliedTheme.palette.text.darkTextSecondary,
  },
  caption: {
    fontSize: "0.75rem",
    color: appliedTheme.palette.text.darkTextSecondary,
    fontWeight: 400,
  },
  body1: {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.334em",
  },
  body2: {
    letterSpacing: "0em",
    fontWeight: 400,
    lineHeight: "1.5em",
    color: appliedTheme.darkTextPrimary,
  },

  customInput: {
    marginTop: 1,
    marginBottom: 1,
    "& > label": {
      top: 23,
      left: 0,
      color: appliedTheme.palette.text.gray500,
      '&[data-shrink="false"]': {
        top: 5,
      },
    },
    "& > div > input": {
      padding: "30.5px 14px 11.5px !important",
    },
    "& legend": {
      display: "none",
    },
    "& fieldset": {
      top: 0,
    },
  },
});
export default themeTypography;
