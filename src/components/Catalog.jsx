import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import { Grid, Box } from "@mui/material";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const Catalog = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setProducts(res.data);
      console.log(products);
    });
  });

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Profile />
        </Grid>
        <Grid item xs={12}>
          {products.map((product) => {
            //----------------------------------------------------------
            <Card key={product.id} sx={{ maxWidth: 345 }}>
              <CardHeader title={product.title} />
              <CardMedia
                component="img"
                height="194"
                image={product.image}
                alt="image"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </CardActions>
            </Card>;
            //----------------------------------------------------------
          })}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Catalog;
