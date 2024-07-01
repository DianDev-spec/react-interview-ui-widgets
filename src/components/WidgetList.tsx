import React, { useEffect, useState } from 'react';
import { getWidgets, Widget } from '../services/widgetService';
import WidgetCard from './WidgetCard';
import { Box, Grid } from '@mui/material';

const WidgetList: React.FC = () => {
  const [widgets, setWidgets] = useState<Widget[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getWidgets();
        setWidgets(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching widgets:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="flex-start"
      minHeight="100vh"
      sx={{ padding: 2 }}
    >
      <Grid container spacing={2} justifyContent="center">
        {widgets.map(widget => (
          <Grid item key={widget.name}>
            <WidgetCard
              name={widget.name}
              description={widget.description}
              price={widget.price}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WidgetList;
