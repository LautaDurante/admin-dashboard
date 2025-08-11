import React, { useState } from 'react'
import { Button } from '@mui/material';
import { MdOutlineCloudUpload } from "react-icons/md";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const AddSubCategory = () => {
    const [productCat, setProductCat] = useState('');

    const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);

  };
  return (
    <section className='p-5 bg-gray-50'>
        <form className='form py-3 p-8'>
           <div className='grid grid-cols-4 mb-3 gap-5'>
         <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Category</h3>
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
            <h3 className='text-[14px] font-[500] mb-1 text-black'>Sub Category Name</h3>
            <input type='text' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm' />
          </div>

          </div>
          <br/>

            <div className='w-[250px]'>
              <Button type='button' className='btn-blue btn-lg w-full flex gap-2'>
                <MdOutlineCloudUpload className='text-[25px] text-white'/>
                Publish and View
              </Button>
            </div>
        </form>
    </section>
  );
}

export default AddSubCategory;
