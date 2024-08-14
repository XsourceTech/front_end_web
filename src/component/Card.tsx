import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function OutlinedCard({
    title,
    description
}: {
    title: string,
    description: string
}) {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 350, margin: '1rem' }}>
        <Card variant="outlined">
            <React.Fragment>
                <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 1.5, fontSize: 18 }}>
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5, fontSize: 14, whiteSpace: 'pre-line' }} color="text.secondary" variant="body2">
                    {description}
                </Typography>
                </CardContent>
            </React.Fragment>
        </Card>
    </Box>
  );
}
