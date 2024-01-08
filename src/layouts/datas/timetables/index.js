import { useEffect, useState, useContext } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";

import {  Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button ,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import axios from "axios";
import { AuthContext } from "states/AuthContext";

const daysOfWeek = ["月", "火", "水", "木", "金"];


function Timetables() {
  const { user , token } = useContext(AuthContext);

  const [timetable, setTimetable] = useState(
    Array(7).fill().map(() => Array(5).fill({ subject: null, room: null }))
  );
  const [inputValue, setInputValue] = useState('');

  const [selectedSubject, setSelectedSubject] = useState(null); // 選択された科目
  const [selectedRoom, setSelectedRoom] = useState(null); // 選択された科目


  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCell, setSelectedCell] = useState({ row: null, column: null });

  const updateTimetable = (row, column, field, newValue) => {
    setTimetable(prev => {
      const copy = [...prev];
      copy[row][column] = { ...copy[row][column], [field]: newValue };
      return copy;
    });
  };

  const handleCellClick = (rowIndex, columnIndex) => {
    const cellData = timetable[rowIndex][columnIndex];
    setSelectedCell({ row: rowIndex, column: columnIndex });
    setSelectedSubject(cellData.subject);
    setSelectedRoom(cellData.room);
    setOpenDialog(true);
  };

  const handleSave = () => {
    const { row, column } = selectedCell;
    updateTimetable(row, column, 'subject', selectedSubject); 
    setOpenDialog(false);
    setSelectedSubject(null); 
  };

  const [rooms, setRooms] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [classes, setClasses] = useState([]);

  const fetchRooms = async () => {
    const res = await axios.get("/v1/rooms/");
    setRooms(res.data);
  };
  const fetchSubjects = async () => {
    const res = await axios.get("/v1/subjects/");
    setSubjects(res.data); 
  };
  const fetchClasses = async () => {
    const res = await axios.get("/v1/classes/");
    setClasses(res.data);
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
      
        <TableContainer component={ Paper }>
        <MDBox p={3}>
          <Table sx={{ minWidth: 650 }} aria-label="timetable">
            <TableBody>
              <TableRow sx={{ height:10 }}>
                <TableCell align="center" sx={{ border: 1 , width:50 ,margin:0 ,padding:0 }} >
                  <MDTypography variant="body2" fontWeight="bold">
                  時限
                  </MDTypography>
                </TableCell>
                {daysOfWeek.map((day, index) => (
                  <TableCell key={index} align="center" sx={{ border: 1 ,margin:0 ,padding:0 }}>
                    <MDTypography variant="body2" fontWeight="bold">
                      {day}
                    </MDTypography>
                  </TableCell>
                ))}
              </TableRow>
              {timetable.map((row, rowIndex) => (
                <TableRow key={ rowIndex }>
                  <TableCell align="center" sx={{ border: 1 }}>
                    <MDTypography variant="body2" fontWeight="bold">
                      { rowIndex + 1 }
                    </MDTypography>
                    
                  </TableCell>
                  {row.map((cell, columnIndex) => (
                    <TableCell key={columnIndex} align="center" sx={{ border: 1 ,width: '20%',height: '70px' }} onClick={() => handleCellClick(rowIndex, columnIndex)} >
                      <MDTypography variant="caption" fontWeight="bold">
                      { cell.subject && <div>{ cell.subject.subjectName }</div> }
                      </MDTypography>
                      { cell.room && <div>{ cell.room.roomNumber }</div> }
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>

            <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
              <DialogTitle>

              {selectedCell.row !== null && selectedCell.column !== null ? (
                `${selectedCell.row + 1}限目の${daysOfWeek[selectedCell.column]}曜日の情報の編集`
              ) : (
                '情報の編集'
              )}
              </DialogTitle>
              <DialogContent>
                <Autocomplete
                  options={subjects}
                  getOptionLabel={(option) => option.subjectName}
                  value={selectedSubject}
                  onChange={(event, newValue) => {
                    setSelectedSubject(newValue);
                  }}
                  renderInput={(params) => (
                    <MDInput {...params} label="科目"  />
                  )}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpenDialog(false)}>キャンセル</Button>
                <Button onClick={() => {
                  handleSave();
                  setSelectedSubject(null); // ダイアログを閉じるときに選択をクリア
                }}>保存</Button>
              </DialogActions>
            </Dialog>


          </Table>
          </MDBox>
        </TableContainer>

      <Footer />
    </DashboardLayout>
  );
}

export default Timetables;