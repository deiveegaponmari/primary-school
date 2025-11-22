import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { AppBar, Toolbar, IconButton, Box, Typography ,Button} from "@mui/material";

function Navbar() {
  const { t } = useTranslation();
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "#0d47a1",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
       {/*  school logo and school name */}
        <Box sx={{display:"flex",alignItems:"center",gap:1}}>
          <IconButton>
            <SchoolIcon />
          </IconButton>
          <Typography>
            {t("navbar.schoolName")}
          </Typography>
        </Box>
    {/*   right side -button and links */}
    <Box sx={{display:"flex",gap:2}}>
        <Button variant="contained">{t("navbar.admissionForm")}</Button>
        <Button variant="contained">{t("navbar.login")}</Button>
    </Box>
        <LanguageSwitcher />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
