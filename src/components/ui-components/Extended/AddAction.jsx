import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid2 } from '@mui/material';
import { AddCircleOutlineOutlined } from '@mui/icons-material';
// import useAuth from 'hooks/useAuth';

const AddAction = ({ Title, AddHandler, AddRestriction, NoRestriction }) => {
    // const { checkRestriction } = useAuth();
    return (
        //(NoRestriction || checkRestriction(AddRestriction)) && (
            <Grid2 item>
                <Button variant="contained" onClick={() => AddHandler()}>
                    <AddCircleOutlineOutlined sx={{ mr: 0.5 }} /> {Title}
                </Button>
            </Grid2>
        //)
    );
};

AddAction.propTypes = {
    Title: PropTypes.string,
    AddHandler: PropTypes.func,
    AddRestriction: PropTypes.string
};

export default AddAction;
