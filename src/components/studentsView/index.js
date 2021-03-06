import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useSelector, useDispatch } from 'react-redux';
import { HandleThunks } from '../../store/modules/handleScores/thunks'

import annotations from '../../assets/annotations.svg'

const useStyles = makeStyles({
  root: {
    padding: '0',
    margin: 0,
    width: '60%',
    minWidth: 300,
    backgroundColor: '#E5EDF2',
  },
  table: {
    margin: 0,
    padding: '0',
    width: '100%',
    minWidth: 250,
    backgroundColor: '#C0CED0'
  },
});


const StudentsView = () => {

  const classes = useStyles();
  const students = useSelector((state) => state.students) || [];

  const dispatch = useDispatch();

  const createData = () => {
    return (students.map((elm, idx) => {
      return ({
        name: elm.name, house: elm.house, img: annotations
      })
    })
    );
  }

  const rows = [...createData()]

  const showCardPoints = (chosenStudent) => {
    dispatch(HandleThunks(chosenStudent));
  }

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} size="small" >
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">House</TableCell>
            <TableCell align="center">-</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow key={row.name} >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.house}</TableCell>
              <TableCell align="center"><img src={row.img} alt='note' onClick={() => showCardPoints(row.name)} style={{ cursor: 'pointer' }} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default StudentsView;