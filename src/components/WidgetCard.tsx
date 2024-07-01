import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface WidgetCardProps {
  name: string;
  description: string;
  price: number;
}

const WidgetCard: React.FC<WidgetCardProps> = ({ name, description, price }) => {
  return (
    <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body1">
          ${price.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WidgetCard;
