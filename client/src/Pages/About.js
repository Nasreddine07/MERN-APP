import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import './About.css';

const About = () => {
  return (
    <div className="about_container">
      <Card sx={{ maxWidth: 700 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="280"
            src="https://res.cloudinary.com/dtwpmuiav/image/upload/v1680475984/Machine-Banner-Image-2_iclnkf.jpg"
            alt="Background"
          />
          <CardContent sx={{ background: "whitesmoke" }}>
            <Typography
              gutterBottom
              variant="h4"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              À propos de Multi Graphic
            </Typography>
            <Typography
              variant="body1"
              fontSize={16}
              color="text.secondary"
              sx={{ textAlign: "justify" }}
            >
              Multi Graphic est une entreprise spécialisée dans la fourniture
              d'équipements industriels. Avec notre expérience et notre savoir-faire
              acquis au fil des années, nous sommes à votre service pour vous
              accompagner tout au long de votre développement en vous fournissant
              les solutions adéquates à vos besoins tout en garantissant la qualité
              de nos produits et services.
              <br />
              <br />
              Nous mettons à votre disposition un service technique permanent, avant
              et après la période de garantie, avec la disponibilité d’une large gamme
              de pièces de rechange et de produits consommables. Nous proposons également
              toutes les solutions de packaging pour répondre aux besoins de l’industrie :
              du fardelage au convoyage, pose de l’adhésif, cerclage, fermeuse de cartons
              jusqu’au banderolage.
              <br />
              <br />
              Nous offrons également des machines sur mesure, en commençant par le conseil
              et l'étude de projet jusqu'à l'acquisition du matériel et de son consommable.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default About;