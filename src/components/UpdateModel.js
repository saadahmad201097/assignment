import React, {  useState } from 'react';
import '../App.css';

import Modal from 'react-modal';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const customStyles = {
    Modal: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        height: '50%',
        // backgroundColor: 'grey'
    }
};


const UpdateModel = (props) => {

    const [title, setTitle] = React.useState(props.title);


    function updateTitle(e) {
        setTitle(e.target.value)
        console.log(e.target.value)
    }


    return (
        <div>

            <Modal ariaHideApp={false}
                isOpen={true}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={false}
            >

                <TextField fullWidth
                    value={title}
                    id="outlined-basic"
                    label="Title"
                    variant="outlined"
                    onChange={(e) => updateTitle(e)}
                />

                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '2%' }}>
                    <Button onClick={()=> props.replaceUpdatedToDo(title)} variant="contained" color="primary">
                        Update
                     </Button>

                    <Button onClick={props.toggleModel} variant="contained" color="primary">
                        Close
                   </Button>
                </div>

            </Modal>

        </div>


    )
}

export default UpdateModel;
