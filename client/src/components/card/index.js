import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { deleteRequest } from '../../utils/RequestService';

const MultiActionAreaCard = ({ recipe, refresh }) => {
     let navigate = useNavigate();

     const deleteRecipe = async () => {
          try {
               let res = await deleteRequest(`/deleteRecipe/${recipe._id}`);
               if(res.data){
                    refresh();
               }
          } catch (error) {
               alert("Something wrong happened.");
          }
     }

     return (
          <Card sx={{ maxWidth: 345 }}>
               <CardActionArea onClick={() => navigate(`/recipe/${recipe._id}`)}>
                    <CardMedia
                         component="img"
                         height="140"
                         image={recipe.photo?.url}
                         alt="green iguana"
                    />
                    <CardContent>
                         <Typography gutterBottom variant="h5" component="div">
                              {recipe.title}
                         </Typography>
                         {/* <Typography variant="body2" color="text.secondary">
                              Lizards are a widespread group of squamate reptiles, with over 6,000
                              species, ranging across all continents except Antarctica
                         </Typography> */}
                    </CardContent>
               </CardActionArea>
               <CardActions>
                    <Button onClick={deleteRecipe} size="small" color="error">
                         Delete
                    </Button>
               </CardActions>
          </Card>
     );
}

export default MultiActionAreaCard;