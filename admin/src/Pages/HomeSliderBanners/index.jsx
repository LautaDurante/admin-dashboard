import { Button } from '@mui/material';
import React, { useContext, useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { MyContext } from '../../App';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { PiExportBold } from "react-icons/pi";
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Progress from '../../Components/ProgressBar';
import { GrEdit } from "react-icons/gr";
import { IoEyeSharp } from "react-icons/io5";
import { BsTrash3Fill } from "react-icons/bs";
import { BsFillCartPlusFill } from "react-icons/bs";
import SearchBox from '../../Components/SearchBox';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const columns = [
    { id: 'image', label: 'IMAGE', minWidth: 250 },
    { id: 'action', label: 'ACTION', minWidth: 100 },
];

const HomeSliderBanners = () => {

    const [categoryFilterVal, setcategoryFilterVal] = React.useState('');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

  
    const context = useContext(MyContext)

    const handleChangeCatFilter = (event) => {
        setcategoryFilterVal(event.target.value);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    return (
        <>

            <div className="flex items-center justify-between px-2 py-0 mt-3">
                <h2 className="text-[18px] font-[600]">Home Slider Banners<span className="font-[400] text-[14px]"> (Table2)</span></h2>
            </div>

            <div className="col w-[18%] ml-auto flex items-center justify-end gap-3">
                        <Button className="btn !bg-green-600 !text-white btn-sm">Export</Button>
                        <Button className="btn-blue !text-white btn-sm" onClick={()=>context.setIsOpenFullScreenPanel({
                            open:true,
                            model:'Add Home Slide'
                        })}> Add Home Slide</Button>
                    </div>

            <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell width={60}>
                                    <Checkbox {...label} size='small' />
                                </TableCell>
                                {columns.map((column) => (
                                    <TableCell
                                        width={column.minWidth}
                                        key={column.id}
                                        align={column.align}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <Checkbox {...label} size='small' />
                                </TableCell>
                                <TableCell width={300}>
                                    <div className="flex items-center gap-4 w-[300px]">
                                        <div className="img w-full rounded-md overflow-hidden group">
                                            <Link to="/product/45745" data-discover="true">
                                                <img className="w-full group-hover:scale-105 transition-all" src="data:image/jpeg;base64,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" alt="Product" />
                                            </Link>
                                        </div>
                                    </div>
                                    
                                </TableCell>
                                <TableCell width={100}>
                                    <div className='flex items-center gap-1'>
                                        <Button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]'>
                                            <GrEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
                                        </Button>
                                        <Button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]'>
                                            <IoEyeSharp className='text-[rgba(0,0,0,0.7)] text-[18px]' />
                                        </Button>
                                        <Button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]'>
                                            <BsTrash3Fill className='text-[rgba(0,0,0,0.7)] text-[18px]' />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={10}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>



        </>
    )
}

export default HomeSliderBanners;
