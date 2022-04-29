import { Box, Button, CircularProgress } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import MultiActionAreaCard from '../../components/card';
import EditRecipe from '../../components/EditRecipe';
import ShowRecipe from '../../components/ShowRecipe';
import { deleteRequest, getRequest, patchRequest, postRequest } from '../../utils/RequestService';

const Recipe = () => {

     let navigate = useNavigate();

     const [recipeData, setRecipeData] = useState({});
     const [editing, setEditing] = useState(false);
     const [loading, setLoading] = useState(false);

     const [title, setTitle] = useState("");
     const [recipe, setRecipe] = useState("");
     const [ingredients, setIngredients] = useState("");
     const [photo, setPhoto] = useState({});

     const [file, setFile] = useState([]);

     let { id } = useParams();

     const init = async () => {
          let recipe = await getRequest(`/getRecipe/${id}`);
          setRecipeData(recipe.data?.data);
          setData(recipe.data?.data);
     }

     const setData = (data) => {
          setTitle(data.title);
          setIngredients(data.ingredients);
          setRecipe(data.recipe);
          setPhoto(data.photo)
     }

     const handleSubmit = async () => {

          if (
               title === '' ||
               ingredients === '' ||
               recipe === ''
          ) {
               return alert("Please fill in all the fields.");
          } else {
               setLoading(true);

               let reqBody = {
                    title,
                    ingredients,
                    recipe
               }

               try {
                    let res = await patchRequest(`/editRecipe/${recipeData._id}`, reqBody);
                    if(res.data){
                         alert("Recipe updated successfully.")
                    }else{
                         alert("Something wrong happened.")
                    }
                    await init();
                    setEditing(false);
               } catch (error) {
                    alert(error.message.toString())
               }

               setLoading(false);
          }
     }

     const deleteRecipe = async () => {
          try {
               let res = await deleteRequest(`/deleteRecipe/${recipeData._id}`);
               if(res.data){
                    navigate("/");
               }
          } catch (error) {
               alert("Something wrong happened.");
          }
     }
     useEffect(() => {
          init();
     }, [])

     return (
          <Box m={5}>
               {
                    editing ?
                         <div>
                              <Button variant="contained" onClick={() => setEditing(false)}>Cancel Edit</Button>
                              <Button variant="contained" color="success" onClick={handleSubmit} style={{ marginLeft: 5 }}>Done</Button>
                              {
                                   loading ?
                                        <Box mb={3} width={"100%"} maxWidth={"700px"}>
                                             <CircularProgress size={25} />

                                        </Box>
                                        :
                                        null
                              }
                         </div>
                         :
                         <div>
                              <Button variant="contained" onClick={() => setEditing(true)}>Edit</Button>
                              <Button variant="contained" color="error" onClick={deleteRecipe} style={{ marginLeft: 5 }}>Delete</Button>
                         </div>
               }
               {
                    editing ?
                         <EditRecipe title={title} setTitle={setTitle} ingredients={ingredients} setIngredients={setIngredients} recipe={recipe} setRecipe={setRecipe} />
                         :
                         <ShowRecipe title={title} ingredients={ingredients} recipe={recipe} photo={photo}/>
               }
          </Box>
     );
};

export default Recipe;
