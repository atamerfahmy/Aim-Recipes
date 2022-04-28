import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { CircularProgress, TextField } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';

const EditRecipe = ({title, setTitle, ingredients, setIngredients, recipe, setRecipe, photo}) => {

     return (
          <Box m={5} display='flex' flexDirection={"column"} alignItems="center" alignContent={"center"}>
               <Box mb={3} width={"100%"} maxWidth={"700px"}>
                    <TextField
                         id="outlined-multiline-static"
                         label="Title"
                         fullWidth
                         multiline
                         rows={1}
                         maxRows={1}
                         value={title}
                         onChange={(e) => setTitle(e.target.value)}
                    />               </Box>
               <Box mb={3} width={"100%"} maxWidth={"700px"}>
                    <TextField
                         id="outlined-multiline-static"
                         label="Ingredients"
                         fullWidth
                         multiline
                         rows={4}
                         maxRows={5}
                         value={ingredients}
                         onChange={(e) => setIngredients(e.target.value)}
                    />
               </Box>
               <Box mb={3} width={"100%"} maxWidth={"700px"}>
                    <TextField
                         id="outlined-multiline-static"
                         label="Recipe Description"
                         fullWidth
                         multiline
                         rows={4}
                         maxRows={5}
                         value={recipe}
                         onChange={(e) => setRecipe(e.target.value)}
                    />
               </Box>
               {/* <Box mb={3} width={"100%"} maxWidth={"700px"}>
                    <Dropzone setFile={(acceptedFile) => setFile(acceptedFile)} file={file} />
               </Box> */}

               
               {/* <Box mb={3} width={"100%"} maxWidth={"700px"}>
                    <Button onClick={handleSubmit} disabled={loading} variant="contained">
                         Add Recipe
                    </Button>
               </Box> */}
          </Box>
     );
}

export default EditRecipe;