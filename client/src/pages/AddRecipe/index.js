import { Box, Button, CircularProgress, Grid, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MultiActionAreaCard from '../../components/card';
import { getRequest, postRequest } from '../../utils/RequestService';
import Dropzone from '../../components/Dropzone';

const AddRecipe = () => {

     const [loading, setLoading] = useState(false);

     const [title, setTitle] = useState("");
     const [recipe, setRecipe] = useState("");
     const [ingredients, setIngredients] = useState("");

     const [file, setFile] = useState([]);

     const handleSubmit = async () => {

          if (
               title === '' ||
               ingredients === '' ||
               recipe === '' ||
               file.length === 0
          ) {
               return alert("Please fill in all the fields.");
          } else {
               setLoading(true);
               let formData = new FormData();
               formData.append('title', title);
               formData.append('ingredients', ingredients);
               formData.append('recipe', recipe);
               formData.append('photo', file[0]);

               try {
                    let res = await postRequest('/createRecipe', formData);
                    console.log(res.data)
                    setTitle('');
                    setIngredients('');
                    setRecipe('');
                    setFile([]);
               } catch (error) {
                    alert(error.message.toString())
               }

               setLoading(false);
          }
     }

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
               <Box mb={3} width={"100%"} maxWidth={"700px"}>
                    <Dropzone setFile={(acceptedFile) => setFile(acceptedFile)} file={file} />
               </Box>

               {
                    loading ?
                         <Box mb={3} width={"100%"} maxWidth={"700px"}>
                              <CircularProgress size={25} />

                         </Box>
                         :
                         null
               }
               <Box mb={3} width={"100%"} maxWidth={"700px"}>

                    <Button onClick={handleSubmit} disabled={loading} variant="contained">
                         Add Recipe
                    </Button>
               </Box>
          </Box>
     );
};

export default AddRecipe;
