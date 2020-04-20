import React, { useEffect, useState } from 'react';
import '../App.css';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Link } from 'react-router-dom'

import UpdateModel from './UpdateModel.js'

const TableComponent = (props) => {



  const [toDoList, setToDoList] = useState(null);
  const [open, toggleModel] = useState(false);
  const [selectedToDo, setSelectedToDo] = useState(null);


  function addToDo() {
    if (toDoList === null) {
      setToDoList(props.toDoList)

    }

    else {
      let temp = [...toDoList, props.toDoList[props.toDoList.length - 1]]
      setToDoList(temp)
    }

  }

  useEffect(() => {
    addToDo()

  }, [props.toDoList]);



  function deleteToDo(idForDeletion) {
    let temp = [...toDoList]
    let removed = temp.filter(item => { return item.id !== idForDeletion })
    console.log(removed)
    setToDoList(removed)
  }

  function toggleModelStates() {

    toggleModel(!open)
  }


  function updateToDo(obj) {
    toggleModel(!open)
    setSelectedToDo(obj)
  }

  function replaceUpdatedToDo(title) {
    toggleModel(!open)
    // setSelectedToDo(obj)
    console.log(title)
    let temp = [...toDoList]

    let newObj = { ...selectedToDo, title: title }

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === selectedToDo.id) {
        temp[i] = newObj
      }
    }

    setToDoList(temp)
  }



  return (
    <div>

      <div className='TableContainer'>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell >Title</TableCell>
                <TableCell >User ID</TableCell>
                <TableCell >Details</TableCell>
                <TableCell >Remove</TableCell>
                <TableCell >Update</TableCell>



              </TableRow>
            </TableHead>
            <TableBody>
              {toDoList && toDoList.map((row) => (
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


                  <TableCell onClick={() => deleteToDo(row.id)} >
                    <img className='Image' alt={"Arrow Right Here"} src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB2CAMAAAAqeZcjAAAAY1BMVEX///8AAAAUFBS1tbX7+/upqalGRkZlZWV7e3vHx8fu7u5LS0v39/fp6enNzc3Q0NAeHh7e3t5YWFg4ODiPj4/AwMDW1tZubm4vLy8LCwuIiIicnJxzc3MjIyNRUVFfX18/Pz+LaxNLAAAElUlEQVRoge2aWaOqIBSFmzxZapN1srn//ytvnVgbYnaj98n1JiUf4mZtQEajQYMG/R/NvOoJWuXFj0dFXvVB/R0H9dsD9hbG3rqnbsPU8XjbOXYRg10M2CStYrCrBMA6n1t0j8HebXfm6xjqJab+drpEPGv31PE4/Lx5H9g8iJ33gZ0P2C/t+sDugtjFtAd1716DBg2yaJ11oKhM+6VO0m5EotV06AJ7aI2NmrKF1N4UI9YeYbVfnVQRi4+Qbu0XY2WTjq0Zi8+fdOxPe+pInRjXj8Koc7PbbYzC4lErV3cGVplCvsdBpYHPrw6cnTXo+10qIy88YTS1p7uF10xUQm607fX8nzI5094zsFPc/BAFmYooP2VLtSwTf3ygYMrAkl+cRcHX4gv/Usuw8KKu50yhyC/whtT1/AT/Unsea3nqec5exvYkbj6KgjKEFR0/OorrE2dPYQm/wNx6FsLCHDDDb5YM7Owp7i5QXQiLGzHUnqwdMvhFg847+bEnUUS2ynEL2VcnYBs/tgEWzQuvfGyigMQr2vmxWOjQWOaYlGIPSF+5HwtKhYLMrDNCZK4YB2c/FrZC47v9lOYt8guYzcWPxXyN7I2380mthrVmfiz6lMyctwNJ0xqjPjtWbx1jSvPWEhkb+Wvhx+JdIGPWHJMaSb+w5AIbVs8EPLeQfnEV15Ufiz69imueW8hm4/7Sj4WZobU8t5AvyZILbFhRQpmAM6V5CyH5xHNEYUtkLp5JyVnMBiFZ+7C1KFliGsvdXCabQrDsfFhkAgo87ueZSscefdij6662ou4yc4EFq2eCDdMtRiViEv6T+bCIIHhZUZo1xgnv0swFHiycO7y96RLeJVLawYdFdkV6PJr1RQo2Za4LLFh9TcA1Kdlw1PDrw2K8oK3td2kgvCb019aHRbjjzXDWXR/h6RAd5cSNnSBwEYf8j7nLFCx32Eos5YKbG4tPxpQJ+FgsK25GLjCxlAlE0xq2W1DqPMFe724spjCVWIoUCScTEJV6lFqwerTz3UKOQUTl3o3FXALRz3cL6Rcr7dqChTustGuO4P0Y+lM3Vv8Ld0rz1kJr+sGN1TNByocuxIexLjCx+pog5QgG/MLIBSZWzwR8t5CbM9iI205c2AmeDltwKQeKZs03ttq4sBs4isA2SeeYRCWFuKRNGANLXlh8N5QnsYyqUWntwsKSS/GPq1lXC4m4pP20pwv7FNfYu+MugD4So3CirwsMLK0JREGKSUl/QJxeXVh0KoYYb5cGwk44RuXZhcXkEtj2X/dUwS/0XGBg9UyQdhwPfqEbvYHV/5BEpV1V5JODC4t3mXWDfX6Ph5ULi7cgRtwzEfuwB6qBRcyJUE8zKQpdDEtaBeF3XONpd9+BzZXoNCQYjFuEEE03RHcgRaWZlAyRe6leoR1buQT6C7ryrl4liKYxdbZeyL2LF3e/Wu3VDxTHxTqj6XuaSUWeITWVeqp0FkbYlHxY2fxwG6EiXG9ArBMJHRzLeoQpulLN4k9Rx0hVcfevNe3DJFWpVkFaXube0+7Kuff5pdOD7/6z/b2f8h80aJCifz5eNquVwr2GAAAAAElFTkSuQmCC'} />
                  </TableCell>

                  <TableCell onClick={() => updateToDo(row)} >
                    <img className='Image' alt={"Arrow Right Here"} src={'https://img.icons8.com/ios-glyphs/2x/approve-and-update.png'} />
                  </TableCell>

                </TableRow>
              ))
              }

            </TableBody>
          </Table>
        </TableContainer>


        {open ?
          <UpdateModel toggleModel={toggleModelStates} title={selectedToDo.title} replaceUpdatedToDo={replaceUpdatedToDo} />
          :
          undefined
        }

      </div>
    </div>
  )
}

export default TableComponent;
