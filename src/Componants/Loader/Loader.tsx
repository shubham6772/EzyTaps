import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import "./Loader.scss"

export const Loader = () => {
  return (
    <div className="loader-container">
      <Box>
        <LinearProgress />
      </Box>
    </div>
  );
}
