import "./InfoBox.css";
import Card from '@mui/material/Card';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {
  let INIT_URL = "https://images.unsplash.com/photo-1708552592233-5934a64eaec0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


  const HOT_URL = "https://media.istockphoto.com/id/2183368488/photo/morning-forest-with-sunrays.jpg?s=612x612&w=is&k=20&c=g7wVLoxTGGv10o9bQMo0pbj0H5zvrJqeISfHd_NU_04=";
  const COLD_URL = "https://images.unsplash.com/photo-1548320588-3f74b192889a?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL = "https://images.unsplash.com/photo-1562009313-2dc966f71c3d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9uc29vbnxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }} >
          <CardMedia
            sx={{ height: 140 }}
            image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
              info.humidity > 80
               ? (<ThunderstormIcon/>)
              : info.temp > 15 ? 
             ( <WbSunnyIcon/> ):(<AcUnitIcon/>)
              }
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <p>Temperature={info.temp}&deg;C</p>
              <p>Humidity={info.humidity}&deg;C</p>
              <p>Max Temperature={info.tempMax}&deg;C</p>
              <p>Min Temperature={info.tempMin}&deg;C</p>
              <p> `The Weather can be described as <i>{info.weather} </i> and Feels Like ${info.feelsLike}&deg;C`</p>
            </Typography>
          </CardContent>

        </Card>
      </div>
    </div>
  )
}