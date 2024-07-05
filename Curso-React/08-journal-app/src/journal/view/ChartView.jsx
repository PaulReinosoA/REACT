import { Grid, TextField, Typography } from '@mui/material';
import { ChartRoot } from '../components/ChartRoot';

export const ChartView = () => {
  const idGrid = 'chartdiv';

  return (
    <>
      <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
        <Grid item xs={12} sm={2} sx={{ mt: 3 }}>
          <Typography fullWidth>Ingreso de datos:</Typography>
          <TextField fullWidth type="text" placeholder="Nuevo concepto" />
        </Grid>
        <Grid item xs={12} sm={10}>
          <ChartRoot idGrid={idGrid} />
        </Grid>
      </Grid>
    </>
  );
};

// ChartView.propTypes = {
//   props: PropTypes.string.isRequired,
// };
