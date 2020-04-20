import React from 'react';
import '../App.css';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Link } from 'react-router-dom'


const TableComponent = (props) => {


  return (
    <div className='TableContainer'>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell >Title</TableCell>
              <TableCell >User ID</TableCell>
              <TableCell >Details</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {props.toDoList && props.toDoList.map((row) => (
              <TableRow key={row.id}>

                <TableCell>
                  {row.id}
                </TableCell>
                <TableCell >{row.title}</TableCell>
                <TableCell >{row.userId}</TableCell>

                <TableCell >
                  <Link to={{ pathname: `/details/${row.id}` }}>
                    <img className='Image' alt={"Arrow Right Here"} src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADZ2dmmpqbl5eXT09MrKyvs7OyTk5OWlpYVFRUhISGnp6ejo6Oampqenp4mJiYICAgQEBAjIyP39/d3d3d9fX21tbUyMjIaGhpHR0eDg4Pw8PCLi4vAwMBBQUFtbW1bW1vf399fX186OjpPT09oaGiYscQvAAAC2ElEQVR4nO3d63LaMBRFYUESQ1taAphAueVC2/d/xLb/mBDbOg4zOvt4rQfI6BsZLDsakVL/TvtdtVw8Pq839Sf+itvq4+iil0Pp8dy82ehdx9Ijum317j1wNHq8Lz2qG1Zvr4H/Gpce1+36YAZjEfcNwDDEUyMwCvG5RRiC2DaFMYiv7UJ94n0HUJ/YcZEGIE67heLEdYZQm5gllCbmCZWJzUu2KMSrB8NwxLdcoSzxUIUnPmULVYn5l6ks8SU8sXvtLU/cxCdm3xMhOg4iRIkgRiDeQYSoEESIEkGEKBFEiBJBhCgRRIgSQYxAtLyeWgyA+FB6tL36DhGiQhbiEqLTIEKUCGIEomUZPgDiV4hOgwhRIogQJYIIUSKIEYiWV8UQvQYxAnEAXzeWdzcQvQYRokS8R4UoEUSIEkEcGlF03w3EwRE1N2taluGiW24ts7jSPI/ZMouvpQfbL8ssbkoPtl+GWdyKno1umEXRSTTMougn0TKLk9JD7Vv2LGreE/+XS5yVHmj/Mi/UaelxfqK8k+72pYfZv8w51P2VidzP4V3pgfYt+7tU8ynRAFyI3g/z1zTn0kPtl2HprbkuDf9sYXkElpzC8M/4FmCl+J7GAlwp3ilMQMWfzLIAJX8TDCBA54UHzgEC9J0FWAF0GECAzgMI0HkAAToPoDrwB0CAvgMI0HkAAToPIEDnAQTovC8ABwSU/PcZQIDOAwjQeRag5G5DgACdZwF+A+gwE1BxU/oU4ICAPwE6DCBA5wEE6DyAAJ0H8KLwi22AHgMI0HnhgZZN6ZLAU3TgZBkcmNbRgW/RgekpOvCwCg5M4+jA7AM7ZIG5H0NdYOa9QhiYJ1QGZl2l0sCcvc3awPQQHZgm0YEpnaMD0yY6MNW/ggNbH/FjAFtu+lGAKf2ODmwgSh6g2tgHF+pO8pjm5q6+bmTPu29uvrjwHRXPMO5uPPuzrarqPHd9mv9fzEY9vArjSNgAAAAASUVORK5CYII='} />
                  </Link>
                </TableCell>



              </TableRow>
            ))
            }

          </TableBody>
        </Table>
      </TableContainer>

    </div>

  )
}

export default TableComponent;
