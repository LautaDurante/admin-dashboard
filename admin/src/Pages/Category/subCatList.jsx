import { Badge, Button } from '@mui/material';
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
import Chip from '@mui/material/Chip';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const columns = [
    { id: 'image', label: 'CATEGORY IMAGE', minWidth: 250 },
    { id: 'catName', label: 'CATEGORY NAME', minWidth: 250 },
    { id: 'subCatName', label: 'SUB CATEGORY NAME', minWidth: 400 },
    { id: 'action', label: 'ACTION', minWidth: 100 },
];

const SubCategoryList = () => {

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
                <h2 className="text-[18px] font-[600]"> Sub Category List<span className="font-[400] text-[14px]"> (Table2)</span></h2>
            </div>

            <div className="col w-[20%] ml-auto flex items-center justify-end gap-3">
                        <Button className="btn !bg-green-600 !text-white btn-sm">Export</Button>
                        <Button className="btn-blue !text-white btn-sm" onClick={()=>context.setIsOpenFullScreenPanel({
                            open:true,
                            model:'Add New Sub Category'
                        })}> Add New Sub Category</Button>
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
                                <TableCell width={100}>
                                    <div className="flex items-center gap-4 w-[100px]">
                                        <div className="img w-full rounded-md overflow-hidden group">
                                            <Link to="/product/45745" data-discover="true">
                                                <img className="w-full group-hover:scale-105 transition-all" src="data:image/png;base64,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" alt="Product" />
                                            </Link>
                                        </div>
                                    </div>
                                    
                                </TableCell>

                                <TableCell>
                                   <Chip label="Electrodomesticos" />
                                </TableCell>

                                <TableCell>
                                   <div className='flex items-center gap-3'>
                                       <Chip label="Heladeras" color='primary' />
                                       <Chip label="Freezer" color='primary' />
                                   </div>
                                </TableCell>

                                <TableCell width={100}>
                                    <div className='flex items-center gap-1'>
                                        <Button className='!w-[35px] !h-[35px] bg-[#f1f1f1] !border !border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] !min-w-[35px]'>
                                            <GrEdit className='text-[rgba(0,0,0,0.7)] text-[20px]' />
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

export default SubCategoryList;
