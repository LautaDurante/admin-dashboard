import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const AddProduct = () => {
  const [productCat, setProductCat] = React.useState('');
  const [productSubCat, setProductSubCat] = React.useState('');

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };

  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
  };

  return (
    <section className='p-5'>
        <form className='form'>
          <div className='grid grid-cols-1 mb-3'>
          <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1'>Product Name</h3>
            <input type='text' className='w-full h-[40px] border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm bg-[#fafafa]' />
          </div>
          </div>

          <div className='grid grid-cols-1 mb-3'>
          <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1'>Product Description</h3>
            <textarea type='text' className='w-full h-[140px] border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm' />
          </div>
          </div>

          <div className='grid grid-cols-4 mb-3 gap-4'>
          <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1'>Product Category</h3>
             <Select
          labelId="demo-simple-select-label"
          id="productCatDrop"
          size='small'
          className='w-full'
          value={productCat}
          label="Category"
          onChange={handleChangeProductCat}
        >
          <MenuItem value="">
            <em>Ninguno</em>
          </MenuItem>
          <MenuItem value={10}>Electrodomesticos</MenuItem>
          <MenuItem value={20}>Electrodomesticos</MenuItem>
          <MenuItem value={30}>Electrodomesticos</MenuItem>
        </Select>
          </div>

          <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1'>Product Sub Category</h3>
             <Select
          labelId="demo-simple-select-label"
          id="productCatDrop"
          size='small'
          className='w-full'
          value={productSubCat}
          label="Sub Category"
          onChange={handleChangeProductSubCat}
        >
          <MenuItem value="">
            <em>Ninguno</em>
          </MenuItem>
          <MenuItem value={10}>Heladeras</MenuItem>
          <MenuItem value={20}>Televisores</MenuItem>
          <MenuItem value={30}>Freezers</MenuItem>
        </Select>
          </div>

          <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1'>Product Price</h3>
            <input type='number' className='w-full h-[40px] border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm' />
          </div>


          <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1'>Product Old Price</h3>
            <input type='number' className='w-full h-[40px] border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm' />
          </div>

          </div>


        </form>
    </section>
  )
}

export default AddProduct; 
