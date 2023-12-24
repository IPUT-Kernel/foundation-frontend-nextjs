// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Tooltip from '@mui/material/Tooltip';

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React contexts
import { useMaterialUIController } from "context";

function DefaultStatisticsCard({ period, title, info,time }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const cardStyle = {
    backgroundColor: '#ebeced'
  }
  return (
    
    <Card>
      <MDBox p={2}>
        <Grid container>
          <Grid item xs={12}>
            <MDBox mb={0.5} lineHeight={1} display="flex" justifyContent="space-between">
              <MDTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                {period}
              </MDTypography>
              <MDTypography
                variant="button"
                fontWeight="medium"
                color="text"
                textTransform="capitalize"
              >
                {time}
              </MDTypography>
            </MDBox>
            <MDBox lineHeight={1} >
              <MDBox textAlign="center" mt={1} mb={2}>
                <MDTypography variant="h5" fontWeight="bold">
                  {title}
                </MDTypography>
              </MDBox>
              <MDBox display="flex" justifyContent="flex-end" position="relative">
                  <Tooltip title={info.authenticity} placement="left">
                  <MDTypography 
                    variant="button" 
                    fontWeight="bold" 
                    color={info.color}
                    style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: 'fit-content' }}
                  >
                    {info.value}&nbsp;
                  </MDTypography>
                  </Tooltip>
                  <MDTypography
                    variant="button"
                    fontWeight="regular"
                    color={darkMode ? "text" : "secondary"}
                  >
                    {info.label}
                  </MDTypography>
                
              </MDBox>

            </MDBox>
          </Grid>
          
        </Grid>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of DefaultStatisticsCard
DefaultStatisticsCard.defaultProps = {
  info: {
    color: "success",
    value: "",
    label: "",
  },
  dropdown: false,
};

// Typechecking props for the DefaultStatisticsCard
DefaultStatisticsCard.propTypes = {
  period: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  info: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  dropdown: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      action: PropTypes.func,
      menu: PropTypes.node,
      value: PropTypes.string,
    }),
  ]),
};

export default DefaultStatisticsCard;
