import { useEffect, useState, useContext } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import axios from "axios";
import { AuthContext } from "states/AuthContext";

const daysOfWeek = ["月曜日", "火曜日", "水曜日", "木曜日", "金曜日"];

function Timetables() {
  const { user , token } = useContext(AuthContext);

  const [timetable, setTimetable] = useState(
    Array(5).fill().map(() => Array(7).fill({ subject: null, room: null }))
  );

  const updateTimetable = (row, column, field, newValue) => {
    setTimetable(prev => {
      const copy = [...prev];
      copy[row][column] = { ...copy[row][column], [field]: newValue };
      return copy;
    });
  };

  const [rooms, setRooms] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [classes, setClasses] = useState([]);

  const fetchRooms = async () => {
    const res = await axios.get("/v1/rooms/");
    setRooms(res.data); // ここを修正
  };
  const fetchSubjects = async () => {
    const res = await axios.get("/v1/subjects/");
    setSubjects(res.data); // ここを修正
  };
  const fetchClasses = async () => {
    const res = await axios.get("/v1/classes/");
    setClasses(res.data); // ここを修正
  };

  useEffect(() => {
    fetchRooms();
    fetchSubjects();
    fetchClasses();
  }, []);
  console.log(classes);
  console.log(timetable);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6}>
        <Grid container spacing={1}>
          <Grid item lg={12}>
            <Card>
              
                <MDBox px={1} py={1} display="flex" justifyContent="space-between" alignItems="center">
                  <MDBox flex="1 1 auto" >
                    <Autocomplete
                      options={classes}
                      getOptionLabel={(option) => option._id}
                      renderInput={(params) => (
                        <MDInput {...params} placeholder="クラス" fullWidth  />
                      )}
                    />
                  </MDBox>
                </MDBox>
            
            </Card>
          </Grid>
          {Array(5).fill().map((_, rowIndex) => (
            <Grid item lg={12/5}>
              {Array(7).fill().map((_, columnIndex) => (
                <MDBox pb={1}>
                  <Card>
                    <MDBox px={1} pt={1} display="flex" justifyContent="space-between" alignItems="center">
                      <MDTypography variant="h6" px={1} py={1} >{columnIndex + 1}限</MDTypography>
                      <MDTypography variant="h6" px={1} py={1} >{daysOfWeek[rowIndex]}</MDTypography>
                    </MDBox>
                    <MDBox px={1} pt={1} display="flex" justifyContent="space-between" alignItems="center">
                      <MDBox flex="1 1 auto" >
                        <Autocomplete
                          options={subjects}
                          getOptionLabel={(option) => option.subjectName}
                          onChange={(event, newValue) => updateTimetable(rowIndex, columnIndex, 'subject', newValue._id)}
                          renderInput={(params) => (
                            <MDInput {...params} placeholder="講義名" fullWidth  />
                          )}
                        />
                      </MDBox>
                    </MDBox>
                    <MDBox px={1} py={1} display="flex" justifyContent="space-between" alignItems="center">
                      <MDBox flex="1 1 auto" >
                        <Autocomplete
                          options={rooms}
                          getOptionLabel={(option) => option.roomNumber.toString()}
                          onChange={(event, newValue) => updateTimetable(rowIndex, columnIndex, 'room', newValue._id)}
                          renderInput={(params) => (
                            <MDInput {...params} placeholder="教室" fullWidth  />
                          )}
                        />
                      </MDBox>
                    </MDBox>
                  </Card>
                </MDBox>
              ))}
            </Grid>
          ))}
          </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Timetables;