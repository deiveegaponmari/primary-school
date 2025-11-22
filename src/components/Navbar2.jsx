import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from "react-i18next";
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Drawer, List, 
  ListItem, 
  ListItemButton,
  ListItemText} from "@mui/material";

function Navbar2() {
  const { t } = useTranslation();
  const[open,setOpen]=useState(false)
  const navItems = [
    { label: t("navbar.home") },
    { label: t("navbar.about") },
    { label: t("navbar.pre-primary") },
    { label: t("navbar.primary") },
    { label: t("navbar.studentlife") },
    { label: t("navbar.uniforms") },
    { label: t("navbar.gallery") },
    { label: t("navbar.achievements") },
    { label: t("navbar.feedback") },
    { label: t("navbar.contact") },
  ];
  return (
    <>
    <AppBar
      position="sticky"
      sx={{
        background: "#a2c0eeff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        {/*   nav links-desktop links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          {
            navItems.map((item)=>(
              <Button key={item.label} sx={{color:"#fff"}}>{item.label}</Button>
            ))
          }
        </Box>
       {/*  mobile-hamburger menu */}
       <IconButton sx={{color:"#fff",display:{xs:"block",md:"none"}}}
       onClick={()=>setOpen(true)}>
          <MenuIcon/>
       </IconButton>
      </Toolbar>
    </AppBar>
   {/*   mobile drawer  */}
    <Drawer anchor="center" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, mt: 2 }}>

          {/* Drawer Language Switcher */}
        {/*   <Box sx={{ p: 2 }}>
            <LanguageSwitcher />
          </Box> */}

          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton>
                  <ListItemText
                    primary={item.label}
                    sx={{ "& span": { fontSize: "18px", color: "#0d47a1" } }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
   </>
  );
}

export default Navbar2;
