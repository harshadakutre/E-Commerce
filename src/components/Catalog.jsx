import React, { useEffect, useState } from "react";
import Profile from "./Profile";
import { Grid, Box } from "@mui/material";
import data from "./data";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ItemModel from "./ItemModels";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import backGroundImage from "../assets/background.avif";
import Chip from "@mui/material/Chip";
import Cart from "./Cart";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Catalog = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [openModel, setOpenModel] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [cartComponent, setCartComponent] = useState(false);

  useEffect(() => {
    setProducts(data);
  }, []);

  const handleClose = () => {
    setOpenModel("");
  };

  const handleDetailsOpen = (index) => {
    setOpenModel(+index);
  };

  const cartAdd = (items) => {
    console.log(items);
    setSnackbarMessage(`${items.title} added to Cart`);
    setSnackbarOpen(true);
    dispatch(addToCart(items));
  };

  const handleCartOpen = () => {
    setCartComponent(true);
  };

  const handleCartClose = () => {
    setCartComponent(false);
  };

  return (
    <Box>
      <Profile
        handleCartOpen={handleCartOpen}
        handleCartClose={handleCartClose}
        cartComponent={cartComponent}
      />
      {!cartComponent && (
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              textAlign: "center",
              backgroundImage: `url(${backGroundImage})`,
            }}
          >
            {products.map((items, index) => (
              <Card
                key={items.id}
                sx={{
                  height: "300px",
                  width: "350px",
                  display: "inline-block",
                  textAlign: "center",
                  transform: "scale(0.9)",
                  ":hover": {
                    backgroundColor: "#F0FFFF",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {items.category}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontSize: 16, height: "20px", color: "darkblue" }}
                  >
                    {items.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <img
                      src={items.image}
                      alt="image"
                      style={{ height: "150px", width: "150px" }}
                    />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Grid container>
                    <Grid item xs={4}>
                      <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                        onClick={() => cartAdd(items)}
                      >
                        <AddShoppingCartIcon />
                      </IconButton>
                    </Grid>
                    <Grid item xs={4}>
                      <Button
                        size="small"
                        onClick={() => handleDetailsOpen(index)}
                      >
                        Details
                      </Button>
                    </Grid>
                    <Grid item xs={4}>
                      $<Chip label={items.price} />
                    </Grid>
                  </Grid>
                </CardActions>
                {openModel && (
                  <ItemModel
                    openModel={openModel}
                    handleClose={handleClose}
                    data={products[openModel]}
                  />
                )}
              </Card>
            ))}
            <Snackbar
              open={snackbarOpen}
              autoHideDuration={500}
              onClose={handleClose}
            >
              <Alert
                onClose={() => setSnackbarOpen(false)}
                severity="success"
                sx={{ width: "100%" }}
              >
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      )}

      {cartComponent && <Cart />}
    </Box>
  );
};

export default Catalog;
