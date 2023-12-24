import { useEffect, useState, useRef, useContext } from "react";
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

function Timetables() {
  const { user , token } = useContext(AuthContext);

  const [timetables, setTimetables] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const inputRefs = Array(7).fill().map(() => Array(5).fill().map(() => useRef(null)));

  const fetchTimetables = async () => {
    const res = await axios.get("/v1/timetable/");
    setTimetables(res.data);
  };
  const fetchRooms = async () => {
    const res = await axios.get("/v1/rooms/");
    setRooms(res.data); // ここを修正
  };
  const fetchSubjects = async () => {
    const res = await axios.get("/v1/subjects/");
    setSubjects(res.data); // ここを修正
  };

  useEffect(() => {
    fetchTimetables();
    fetchRooms();
    fetchSubjects();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6} lg={12/5}>
            <MDBox pb={1}>
              <Card>
                <MDBox px={1} pt={1} display="flex" justifyContent="space-between" alignItems="center">
                  <MDBox flex="1 1 auto" >
                    <Autocomplete
                      options={subjects}
                      getOptionLabel={(option) => option.subjectName}
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
                      renderInput={(params) => (
                        <MDInput {...params} placeholder="教室" fullWidth  />
                      )}
                    />
                  </MDBox>
                </MDBox>
              </Card>
            </MDBox>

            <MDBox pb={1}>
              <Card>
                <MDBox px={1} pt={1} display="flex" justifyContent="space-between" alignItems="center">
                  <MDBox flex="1 1 auto" >
                    <Autocomplete
                      options={subjects}
                      getOptionLabel={(option) => option.subjectName}
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
                      renderInput={(params) => (
                        <MDInput {...params} placeholder="教室" fullWidth  />
                      )}
                    />
                  </MDBox>
                </MDBox>
              </Card>
            </MDBox>

            <MDBox pb={1}>
              <Card>
                <MDBox px={1} pt={1} display="flex" justifyContent="space-between" alignItems="center">
                  <MDBox flex="1 1 auto" >
                    <Autocomplete
                      options={subjects}
                      getOptionLabel={(option) => option.subjectName}
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
                      renderInput={(params) => (
                        <MDInput {...params} placeholder="教室" fullWidth  />
                      )}
                    />
                  </MDBox>
                </MDBox>
              </Card>
            </MDBox>

            <MDBox pb={1}>
              <Card>
                <MDBox px={1} pt={1} display="flex" justifyContent="space-between" alignItems="center">
                  <MDBox flex="1 1 auto" >
                    <Autocomplete
                      options={subjects}
                      getOptionLabel={(option) => option.subjectName}
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
                      renderInput={(params) => (
                        <MDInput {...params} placeholder="教室" fullWidth  />
                      )}
                    />
                  </MDBox>
                </MDBox>
              </Card>
            </MDBox>

            <MDBox pb={1}>
              <Card>
                <MDBox px={1} pt={1} display="flex" justifyContent="space-between" alignItems="center">
                  <MDBox flex="1 1 auto" >
                    <Autocomplete
                      options={subjects}
                      getOptionLabel={(option) => option.subjectName}
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
                      renderInput={(params) => (
                        <MDInput {...params} placeholder="教室" fullWidth  />
                      )}
                    />
                  </MDBox>
                </MDBox>
              </Card>
            </MDBox>


            <MDBox pb={1}>
              <Card>
                <MDBox px={1} pt={1} display="flex" justifyContent="space-between" alignItems="center">
                  <MDBox flex="1 1 auto" >
                    <Autocomplete
                      options={subjects}
                      getOptionLabel={(option) => option.subjectName}
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
                      renderInput={(params) => (
                        <MDInput {...params} placeholder="教室" fullWidth  />
                      )}
                    />
                  </MDBox>
                </MDBox>
              </Card>
            </MDBox>

            <MDBox pb={1}>
              <Card>
                <MDBox px={1} pt={1} display="flex" justifyContent="space-between" alignItems="center">
                  <MDBox flex="1 1 auto" >
                    <Autocomplete
                      options={subjects}
                      getOptionLabel={(option) => option.subjectName}
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
                      renderInput={(params) => (
                        <MDInput {...params} placeholder="教室" fullWidth  />
                      )}
                    />
                  </MDBox>
                </MDBox>
              </Card>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Timetables;