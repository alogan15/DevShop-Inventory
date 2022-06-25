import { Card, CardActions, CardMedia } from "@mui/material";


const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardMedia
        component="img"
        height="20%"
        img src={require('/Users/andrelogan/dev/DevShop-Inventory/inventory/src/Images/NewHope.png')}
        alt="newhope"
      />
      <CardActions disableSpacing>
      </CardActions>
    </Card>
  );
};

export default Post;