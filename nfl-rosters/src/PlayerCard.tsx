
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export function PlayerCard({position, fullName, headshot, primaryColor, secondaryColor, logo} : {position:any, fullName:any, headshot:any, primaryColor: any, secondaryColor: any, logo: any}) {
    return (
        <>
            <Card sx={{maxWidth: 345, border: `2px solid ${secondaryColor}`}}>

                <CardContent sx={{backgroundColor: `${primaryColor}`, backgroundImage: `url(${logo})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center',}}>
                        <CardMedia sx={{width: '400px', height: '256px', marginLeft: '-102%'}} image={headshot} title={fullName}/>
                </CardContent>
   
            </Card>
        </>
    )
}