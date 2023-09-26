// @mui material components
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DefaultStatisticsCard from "examples/Cards/StatisticsCards/DefaultStatisticsCard";
import Card from "@mui/material/Card";
// Material Dashboard 2 PRO React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import EventCalendar from "examples/Calendar";

import NextEvents from "layouts/applications/calendar/components/NextEvents";
import ChatUI from "layouts/applications/chat";
import { useMemo } from "react";

function Analytics() {
  const calendarEventsData = [
    {
      title: "キャリアガイダンス",
      start: "2023-06-20",
      end: "2023-06-20",
      className: "success",
    },
  
    {
      title: "Meeting with Mary",
      start: "2021-08-03",
      end: "2021-08-03",
      className: "info",
    },
  
    {
      title: "Cyber Week",
      start: "2021-08-04",
      end: "2021-08-04",
      className: "warning",
    },
  
    {
      title: "Winter Hackaton",
      start: "2021-08-05",
      end: "2021-08-05",
      className: "error",
    },
  
    {
      title: "Digital event",
      start: "2021-08-09",
      end: "2021-08-11",
      className: "warning",
    },
  
    {
      title: "Marketing event",
      start: "2021-08-12",
      end: "2021-08-12",
      className: "primary",
    },
  
    {
      title: "Dinner with Family",
      start: "2021-08-21",
      end: "2021-08-21",
      className: "error",
    },
  
    {
      title: "Black Friday",
      start: "2021-08-25",
      end: "2021-08-25",
      className: "info",
    },
  ];

  const cardStyle = {
    backgroundColor: '#ebeced'
  };
  // Action buttons for the BookingCard
  const actionButtons = (
    <>
      <Tooltip title="Refresh" placement="bottom">
        <MDTypography
          variant="body1"
          color="primary"
          lineHeight={1}
          sx={{ cursor: "pointer", mx: 3 }}
        >
          <Icon color="inherit">refresh</Icon>
        </MDTypography>
      </Tooltip>
      <Tooltip title="Edit" placement="bottom">
        <MDTypography variant="body1" color="info" lineHeight={1} sx={{ cursor: "pointer", mx: 3 }}>
          <Icon color="inherit">edit</Icon>
        </MDTypography>
      </Tooltip>
    </>
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={1}>
        <MDBox mt={1}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={10} lg={5}  >
              <Card style={cardStyle}>
                <MDBox p={1}>
                  <MDBox mt={3} mb={1} >
                    <DefaultStatisticsCard
                    period="1限"
                    time="9:15 - 10:45"
                    title="画像・音声認識"
                    info={{
                      color: "info",
                      value: "342",
                      label: "上條 浩一 教授",
                    }}
                    
                    />
                  </MDBox>
                  <MDBox mb={1} >
                    <DefaultStatisticsCard
                    period="2限"
                    time="10:55 - 12:25"
                    title="リバースエンジニアリング概論"
                    info={{
                      color: "info",
                      value: "342",
                      label: "上條 浩一 教授",
                    }}
                    
                    />
                  </MDBox>
                  <MDBox mb={1} >
                    <DefaultStatisticsCard
                    period="3限"
                    time="13:10 - 14:40"
                    title="画像・音声認識"
                    info={{
                      color: "info",
                      value: "342",
                      label: "上條 浩一 教授",
                    }}
                    />
                  </MDBox>
                  <MDBox mb={1} >
                    <DefaultStatisticsCard
                    period="4限"
                    time="14:50 - 16:40"
                    title="画像・音声認識"
                    info={{
                      color: "info",
                      value: "342",
                      label: "上條 浩一 教授",
                    }}
                    />
                  </MDBox>
                </MDBox>
              </Card>
            </Grid>


            <Grid item xs={6} md={5} lg={2}>
              <MDBox mb={3}>
                <DefaultInfoCard
                  icon="chat"
                  title="談話室"
                  value="312"
                />
              </MDBox>
              <MDBox mb={3}>
                <DefaultInfoCard
                  icon="school"
                  title="自習室"
                  value="322"
                />
              </MDBox>
            </Grid>

            <Grid item xs={12} lg={5} p={1}>
              <ChatUI className='Coming soon...'/>
            </Grid>


          </Grid>
          <Grid container spacing={3} mt={1}>
            <Grid item xs={12} lg={7}>
              {useMemo(
                () => (
                  <EventCalendar
                    initialView="dayGridMonth"
                    events={calendarEventsData}
                    selectable
                    editable
                  />
                ),
                [calendarEventsData]
              )}
            </Grid>
            <Grid item xs={12} xl={5}>
              <MDBox mb={3}>
                <NextEvents />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>


        
        
      </MDBox>
      
      <Footer />
    </DashboardLayout>
  );
}

export default Analytics;
