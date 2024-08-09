import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import UserTable from "../components/userTable";

function Users() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        marginTop: isMobile ? "100px" : "110px",
        display: "flex",
        flexDirection: "column",
        alignItems: isMobile ? "center" : "flex-start",
        gap: 5,
        px: isMobile ? 2 : 0,
        marginBottom: "30px",
      }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : "1200px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          paddingLeft: isMobile ? "24px" : 0,
        }}
      >
        <Typography sx={{ fontSize: { xs: "18px", md: "20px" }}} fontWeight={700} gutterBottom>
          PettyWallet Users
        </Typography>
      </Box>
      <UserTable />
    </Box>
  );
}

export default Users;
