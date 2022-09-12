import { Box } from '@material-ui/core';
import * as React from 'react';
import {AppBar, Button, IconButton, Toolbar, Typography} from "@mui/material";



export default function Navigation() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        The Anvilguard
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );

};