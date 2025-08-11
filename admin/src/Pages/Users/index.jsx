import { Button } from '@mui/material';
import React, { useContext, useState } from 'react'
import { MyContext } from '../../App';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import SearchBox from '../../Components/SearchBox';
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const columns = [
    { id: 'userImg', label: 'USER IMAGE', minWidth: 80 },
    { id: 'userName', label: 'USER NAME', minWidth: 100 },
    {
        id: 'userEmail',
        label: 'USER EMAIL',
        minWidth: 150,
    },
    {
        id: 'userPh',
        label: 'USER PHONE',
        minWidth: 130,
    },
    {
        id: 'createDate',
        label: 'CREATED',
        minWidth: 130,
    },
];

const Users = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

  
    const context = useContext(MyContext)



    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    return (
        <>
            <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
                <div className="flex items-center w-full px-5 justify-between">
                    <div className="col w-[15%]">
                       <h2 className="text-[18px] font-[600]">Users List<span className="font-[400] text-[14px]">(Table2)</span></h2>
                    </div>

                     <div className="col w-[40%] ml-auto">
                        <SearchBox />
                     </div>

                    
                </div>     
                <br />
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TableCell className='bg-[#ccc]'>
                                    <Checkbox {...label} size='small' />
                                </TableCell>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                            <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size='small' />
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[700px]">
                                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/45745" data-discover="true">
                                                <img className="w-full group-hover:scale-105 transition-all" src="https://mui.com/static/images/avatar/1.jpg" />
                                            </Link>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Juan Avellana
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineEmail />JuanAvellana@gmail.com</span>
                                </TableCell>
                                 <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineLocalPhone />3704678934</span>
                                </TableCell>
                                 <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineDateRange />20-05-2022</span>
                                </TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size='small' />
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[700px]">
                                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/45745" data-discover="true">
                                                <img className="w-full group-hover:scale-105 transition-all" src="https://mui.com/static/images/avatar/1.jpg" />
                                            </Link>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Juan Avellana
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineEmail />JuanAvellana@gmail.com</span>
                                </TableCell>
                                 <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineLocalPhone />3704678934</span>
                                </TableCell>
                                 <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineDateRange />20-05-2022</span>
                                </TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size='small' />
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[700px]">
                                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/45745" data-discover="true">
                                                <img className="w-full group-hover:scale-105 transition-all" src="https://mui.com/static/images/avatar/1.jpg" />
                                            </Link>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Juan Avellana
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineEmail />JuanAvellana@gmail.com</span>
                                </TableCell>
                                 <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineLocalPhone />3704678934</span>
                                </TableCell>
                                 <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineDateRange />20-05-2022</span>
                                </TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size='small' />
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[700px]">
                                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/45745" data-discover="true">
                                                <img className="w-full group-hover:scale-105 transition-all" src="https://mui.com/static/images/avatar/1.jpg" />
                                            </Link>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Juan Avellana
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineEmail />JuanAvellana@gmail.com</span>
                                </TableCell>
                                 <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineLocalPhone />3704678934</span>
                                </TableCell>
                                 <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineDateRange />20-05-2022</span>
                                </TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size='small' />
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[700px]">
                                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/45745" data-discover="true">
                                                <img className="w-full group-hover:scale-105 transition-all" src="https://mui.com/static/images/avatar/1.jpg" />
                                            </Link>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Juan Avellana
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineEmail />JuanAvellana@gmail.com</span>
                                </TableCell>
                                 <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineLocalPhone />3704678934</span>
                                </TableCell>
                                 <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineDateRange />20-05-2022</span>
                                </TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size='small' />
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[700px]">
                                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/45745" data-discover="true">
                                                <img className="w-full group-hover:scale-105 transition-all" src="https://mui.com/static/images/avatar/1.jpg" />
                                            </Link>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Juan Avellana
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineEmail />JuanAvellana@gmail.com</span>
                                </TableCell>
                                 <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineLocalPhone />3704678934</span>
                                </TableCell>
                                 <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineDateRange />20-05-2022</span>
                                </TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size='small' />
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[700px]">
                                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/45745" data-discover="true">
                                                <img className="w-full group-hover:scale-105 transition-all" src="https://mui.com/static/images/avatar/1.jpg" />
                                            </Link>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Juan Avellana
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineEmail />JuanAvellana@gmail.com</span>
                                </TableCell>
                                 <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineLocalPhone />3704678934</span>
                                </TableCell>
                                 <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineDateRange />20-05-2022</span>
                                </TableCell>
                            </TableRow>
                             <TableRow>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <Checkbox {...label} size='small' />
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <div className="flex items-center gap-4 w-[700px]">
                                        <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                                            <Link to="/product/45745" data-discover="true">
                                                <img className="w-full group-hover:scale-105 transition-all" src="https://mui.com/static/images/avatar/1.jpg" />
                                            </Link>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    Juan Avellana
                                </TableCell>
                                <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineEmail />JuanAvellana@gmail.com</span>
                                </TableCell>
                                 <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineLocalPhone />3704678934</span>
                                </TableCell>
                                 <TableCell style={{ minWidth: columns.minWidth }}>
                                    <span className='flex items-center gap-2'><MdOutlineDateRange />20-05-2022</span>
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

export default Users;
