import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const AddTenantDetails = () => {
  const [businessName, setBusinessName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [timezone, setTimezone] = useState("");
  const [date, setDate] = useState("");
  const [teamSize, setTeamSize] = useState("");
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          backgroundColor: "white",
          padding: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h5"
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#42a5f5",
              alignItems: "center",
            }}
          >
            Select Your Team Size..
          </Typography>

          <Box component="form" noValidate sx={{ mt: 5, width: "100%" }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="businessname"
              label="Business Name"
              name="businessname"
              autoComplete="businessname"
              autoFocus
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="mobileNo"
              label="Mobile No"
              name="mobileNo"
              autoComplete="mobileNo"
              autoFocus
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="timezone"
              label="Timezone"
              name="timezone"
              autoComplete="timezone"
              autoFocus
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="date"
              label="Date"
              name="date"
              autoComplete="date"
              autoFocus
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="teamSize"
              label="Including Managers, what is your Team size?"
              name="teamSize"
              autoComplete="teamSize"
              autoFocus
              value={teamSize}
              onChange={(e) => setTeamSize(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              sx={{
                mt: 3,
                backgroundColor: "#bbdefb",
                "&:hover": {
                  backgroundColor: "#90caf9",
                },
                color: "#fff",
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AddTenantDetails;
