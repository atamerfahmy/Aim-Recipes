import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

export default function ShowRecipe({ photo, title, ingredients, recipe }) {
     console.log(photo)
     return (
          <Box mt={5}>
               <div>
                    <img src={photo?.url} alt="Italian Trulli" style={{ width: '100%', height: 'auto' }} />
               </div>
               <div>
                    <Typography variant="h2" component="div" color="#333333">
                         {title}
                    </Typography>
               </div>
               <div>
                    <Typography mt={5} gutterBottom variant="h4" component="div" color="#333333">
                         Ingredients:
                    </Typography>
                    <Typography ml={5} gutterBottom variant="h5" component="div" color="#919191">
                         {ingredients}
                    </Typography>
               </div>

               <div>
                    <Typography mt={5} gutterBottom variant="h4" component="div" color="#333333">
                         Recipe:
                    </Typography>
                    <Typography ml={5} gutterBottom variant="h5" component="div" color="#919191">
                         {recipe}
                    </Typography>
               </div>
          </Box>
     );
}