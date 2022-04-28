import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate, NavLink } from 'react-router-dom';

export default function TopBar() {
     let navigate = useNavigate();

     return (
          <Box>
               <AppBar position="static">
                    <Toolbar>
                         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                              <NavLink to="/" style={{ textDecoration: 'none', color: "white" }}>
                                   Aim-Recipes
                              </NavLink>
                         </Typography>
                         <Button onClick={() => navigate("/add_recipe")} color="inherit">Add Recipe</Button>
                    </Toolbar>
               </AppBar>
          </Box>
     );
}