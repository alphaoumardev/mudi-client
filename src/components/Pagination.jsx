import React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const Pagination = ({})=>
{
    function handlePagination(textContent)
    {
        return textContent;
    }

    return (
        <div className="col-12 mb-5 mt-60 d-flex justify-content-center">
            <Stack spacing={2}>
                <Pagination color="primary" variant="outlined" count={numberOfPages} page={page}
                            onChange={(e) =>handlePagination(e.target.textContent)} />
            </Stack>
        </div>
    );
}
export default Pagination;
