import { useEffect, useState, useRef, useContext } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import axios from "axios";
import { AuthContext } from "states/AuthContext";

import TimelineList from "examples/Timeline/TimelineList";
import TimelineItem from "examples/Timeline/TimelineItem";

function Timelines() {
  const [timelines, setTimelines] = useState([]);
  const putTimelineNumberRef = useRef(null);
  const putTimelineStatusRef = useRef(null);
  const deleteTimelineNumberRef = useRef(null);
  const newTimelineNameRef = useRef(null);
  const newTimelineNumberRef = useRef(null);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchTimelines = async () => {
      const res = await axios.get("/timelines/");
      setTimelines(res.data);
    };
    fetchTimelines();
  }, []);

  const postTimeline = async () => {
    const res = await axios.post("/timelines/", {
      roomName: newTimelineNameRef.current.value,
      roomNumber: newTimelineNumberRef.current.value,
      userId: user._id,
    });
    setTimelines((prevTimelines) => [...prevTimelines, res.data]);
  };

  const putTimeline = async () => {
    const res = await axios.put(`/timelines/number/${putTimelineNumberRef.current.value}`, {
      status: putTimelineStatusRef.current.value,
    });
    setTimelines((prevTimelines) =>
      prevTimelines.map((room) => (room.roomNumber === res.data.roomNumber ? res.data : room))
    );
  };

  const deleteTimeline = async () => {
    const res = await axios.delete(`/timelines/number/${deleteTimelineNumberRef.current.value}`, {
      data: { userId: user._id },
    });
    setTimelines((prevTimelines) => prevTimelines.filter((room) => room.roomNumber !== res.data.roomNumber));
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6}>
        <Grid container spacing={1}>
        {timelines.map((timeline, index) => (
            <Grid item xs={12} md={12} lg={4} key={index}>
              <MDBox mb={3}>
                <TimelineList title={'META_ID : '+timeline._id}>
                  {timeline.subjectIds.map((subject, subjectIndex) => (
                    <TimelineItem
                      key={subject._id}
                      color="info" // ここは適切な色を設定するか、データから取得することができます
                      icon="schedule" // ここは適切なアイコンを設定するか、データから取得することができます
                      title={subject.subjectName}
                      dateTime="Your DateTime Here" // ここはデータから取得するか、適切な日時を設定してください
                      description="" // 必要に応じてdescriptionを設定するか、データから取得することができます
                      lastItem={subjectIndex === timeline.subjectIds.length - 1}
                    />
                  ))}
                </TimelineList>
              </MDBox>
            </Grid>
          ))}
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Timelines;