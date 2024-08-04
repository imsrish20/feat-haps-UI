import { useEffect, useState } from "react";
import { Grid, IconButton, Paper, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import pic1 from "../PhotoGallery/pic1.jpg";
import pic2 from "../PhotoGallery/pic2.jpg";
import pic3 from "../PhotoGallery/pic3.jpg";
import pic4 from "../PhotoGallery/pic4.jpg";
import pic5 from "../PhotoGallery/pic5.png";



function PhotoGallery({img_urls}) {
  let photos= [pic1, pic2, pic3, pic4, pic5];
  if(img_urls.length>0){
    photos= img_urls;
  }
  
  const [current, setCurrent] = useState(0);
  const totalPhotos = photos.length;

  const next = () => {
    setCurrent((current + 1) % totalPhotos);
  };

  const previous = () => {
    setCurrent((current - 1 + totalPhotos) % totalPhotos);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % totalPhotos);
    }, 4000); // Automatically switch every 4 seconds

    return () => clearInterval(interval);
  }, [totalPhotos]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        marginTop: "-150px"
      }}
    >
      <IconButton
        onClick={previous}
        sx={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: "100%", overflow: "hidden" }}
      >
        {[0, 1, 2].map((index) => {
          const photoIndex = (current + index) % totalPhotos;
          return (
            <Grid
              item
              key={index}
              sx={{
                width: index === 1 ? "290px" : "270px",
                height: index === 1 ? "410px" : "380px",
                padding: "8px",
                cursor: "pointer",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Paper
                elevation={3}
                sx={{
                  width: "100%",
                  height: "300px",
                  cursor: "pointer",
                }}
              >
                <img
                  src={photos[photoIndex]}
                  alt={`pic-${photoIndex}`}
                  style={{
                    width: "100%",
                    height: "380px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <IconButton
        onClick={next}
        sx={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 1,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}

export default PhotoGallery;
