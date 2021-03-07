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
import '../../index.css'

const useStyles = makeStyles({
  root: {
    padding: '.5% 1%',
    textAlign: 'left',
    width: '60%',
    minWidth: 300,
    border: '2px solid blue',
    backgroundColor: '#e5edf2',

  },
  table: {
    marginBottom: '.5%',
    width: '100%',
    minWidth: 250,
    backgroundColor: '#e5edf2'
  },
  row: {
    color: '#5777a8',
  },
  title: {
    fontWeight: 'bold',
    color: '#5777a8',
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
      <div className={classes.title}> Alunos</div>
      <Table className={classes.table} size="small" >
        <TableHead className={classes.title}>
          <TableRow>
            <TableCell className={classes.title}>Name</TableCell>
            <TableCell className={classes.title}>House</TableCell>
            <TableCell className={classes.title}> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow key={row.name} >
              <TableCell component="th" scope="row" className={classes.row}>
                {row.name}
              </TableCell>
              <TableCell className={classes.row}>{row.house}</TableCell>
              <TableCell className={classes.row}><img src={row.img} alt='note' onClick={() => showCardPoints(row.name)} style={{ cursor: 'pointer' }} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default StudentsView;