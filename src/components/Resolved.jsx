import { Grid } from '@mui/material';
import React from 'react';

function Resolved() {
    return (
        <Grid container className='bg-[#0e1113]'>
            <Grid sm={2}></Grid>
            <Grid item sm={8}>  
                <div
                    class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                    role="status">
                </div>
            </Grid>
        </Grid>
    );
}

export default Resolved;

