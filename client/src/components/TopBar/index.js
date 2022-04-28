import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
// import MenuIcon from '@mui/icons-material/Menu';

export default function TopBar() {
     let navigate = useNavigate();

     return (
          <Box>
               <AppBar position="static">
                    <Toolbar>
                         {/* <IconButton
                              size="large"
                              edge="start"
                              color="inherit"
                              aria-label="menu"
                              sx={{ mr: 2 }}
                         >
                              <MenuIcon />
                         </IconButton> */}
                         <Typography onClick={() => navigate("/")} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                              Aim-Recipes
                         </Typography>
                         <Button onClick={() => navigate("/add_recipe")} color="inherit">Add Recipe</Button>
                    </Toolbar>
               </AppBar>
          </Box>
     );
}