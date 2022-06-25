import {
    Box,
    Divider,
    ImageList,
    ImageListItem,
    List,
    ListItem,
    ListItemText,
    Typography,
  } from "@mui/material";
  import React from "react";
  
  const Rightbar = () => {
    return (
      <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed" width={300}>
          <Typography variant="h6" fontWeight={100}>
            *insert text here*
          </Typography>
          <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
            Community Photos
          </Typography>
          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/breakfast.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/burgers.jpg"
                alt=""
              />
            </ImageListItem>
            <ImageListItem>
              <img
                src="https://material-ui.com/static/images/image-list/camera.jpg"
                alt=""
              />
            </ImageListItem>
          </ImageList>
          <Typography variant="h6" fontWeight={100} mt={2}>
            Newsletter(events going on...)
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          {/* <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/3.jpg" />
          </ListItemAvatar> */}
          <ListItemText
            primary="Book Drive"
            secondary={
              <React.Fragment>
                
                {" — There will a book drive in the main lobby. July 1st to the 7th, from 8am to 8pm"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          {/* <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar> */}
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                {/* <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography> */}
                {" — Please join us for the Annual 4th of July Celebration"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          {/* <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar> */}
          <ListItemText
            primary="Restocked Inventory"
            secondary={
              <React.Fragment>
                {/* <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography> */}
                {' — Inventory will be restocked every other Thursday starting July 7th'}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
        </Box>
      </Box>
    );
  };
  
  export default Rightbar;