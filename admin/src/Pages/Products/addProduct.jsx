import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import UploadBox from '../../Components/UploadBox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoIosClose } from "react-icons/io";
import { Button } from '@mui/material';
import { MdOutlineCloudUpload } from "react-icons/md";



const AddProduct = () => {
  const [productCat, setProductCat] = React.useState('');
  const [productSubCat, setProductSubCat] = React.useState('');
  const [productFeatured, setProductFeatured] = React.useState('');
  const [productRams, setProductRams] = React.useState('');
  const [productWeight, setProductWeight] = React.useState('');
  const [productSize, setProductSize] = useState('');

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };

  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
  };

  const handleChangeProductFeatured = (event) => {
    setProductFeatured(event.target.value);
  };

  const handleChangeProductRams = (event) => {
    setProductRams(event.target.value);
  };
   const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };

  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };

  return (
    <section className='p-5 bg-gray-50'>
        <form className='form py-3 p-8'>
          <div className='scroll max-h-[80vh] overflow-y-scroll pr-4'>
          
          <div className='grid grid-cols-1 mb-3'>
          <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Name</h3>
            <input type='text' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm' />
          </div>
          </div>

          <div className='grid grid-cols-1 mb-3'>
          <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Description</h3>
            <textarea type='text' className='w-full h-[140px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm' />
          </div>
          </div>

          <div className='grid grid-cols-4 mb-3 gap-4'>
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
            <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Sub Category</h3>
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
            <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Price</h3>
            <input type='number' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm' />
          </div>


          <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Old Price</h3>
            <input type='number' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm' />
          </div>

          </div>


                    <div className='grid grid-cols-4 mb-3 gap-4'>
          <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1 text-black'>Is Featured?</h3>
             <Select
          labelId="demo-simple-select-label"
          id="productCatDrop"
          size='small'
          className='w-full'
          value={productFeatured}
          label="Featured"
          onChange={handleChangeProductFeatured}
        >
          <MenuItem value={10}>True</MenuItem>
          <MenuItem value={20}>False</MenuItem>
        </Select>
          </div>

          <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Stock</h3>
            <input type='number' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm' />
          </div>

          <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Brand</h3>
            <input type='text' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm' />
          </div>

          <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Discount</h3>
            <input type='number' className='w-full h-[40px] border border-[rgba(0,0,0,0.2)] focus:outline-none focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm' />
          </div>

        </div>


        <div className='grid grid-cols-4 mb-3 gap-4'>
          <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1 text-black'>Product RAMS</h3>
             <Select
          labelId="demo-simple-select-label"
          id="productCatDrop"
          size='small'
          className='w-full'
          value={productRams}
          label="RAMS"
          onChange={handleChangeProductRams}
        >
          <MenuItem value={'4GB'}>4GB</MenuItem>
          <MenuItem value={'6GB'}>6GB</MenuItem>
          <MenuItem value={'8GB'}>8GB</MenuItem>
          <MenuItem value={'12GB'}>12GB</MenuItem>
        </Select>
          </div>

          <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Weight</h3>
             <Select
          labelId="demo-simple-select-label"
          id="productCatDrop"
          size='small'
          className='w-full'
          value={productWeight}
          label="Weight"
          onChange={handleChangeProductWeight}
        >
          <MenuItem value="">
            <em>Ninguno</em>
          </MenuItem>
          <MenuItem value={'1KG'}>1KG</MenuItem>
          <MenuItem value={'2KG'}>2KG</MenuItem>
          <MenuItem value={'3KG'}>3KG</MenuItem>
        </Select>
          </div>

          <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Size</h3>
            <Select
          labelId="demo-simple-select-label"
          id="productCatDrop"
          size='small'
          className='w-full'
          value={productSize}
          label="Size"
          onChange={handleChangeProductSize}
        >
          <MenuItem value={'S'}>S</MenuItem>
          <MenuItem value={'M'}>M</MenuItem>
          <MenuItem value={'L'}>L</MenuItem>
        </Select>
          </div>


          <div className='col'>
            <h3 className='text-[14px] font-[500] mb-1 text-black'>Product Rating</h3>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>

          </div>

          <div className='col w-full p-5 px-0'>
            <h3 className='font-[700] text-[18px] mb-3'>Media & Images</h3>

        <div className='grid grid-cols-9 gap-30'>
          <div className='uploadBoxWrapper relative'>
            <span className='absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 bottom-[185px] left-[185px] flex items-center justify-center z-50 cursor-pointer'><IoIosClose className='text-white text-[30px]'/></span>
          <div className='uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[200px] w-[200px] bg-gray-200 cursor-pointer hover:bg-gray-300 flex items-center justify-center flex-col relative'>

              <LazyLoadImage
              className='w-full h-full object-cover'
              alt={'image'}
              effect="blur"
              wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
              style: {transitionDelay: "1s"},
    }}
              src={'data:image/jpeg;base64,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Go3HKle1RIzGW+IV/wDqxHdznVFdauGZ7KnLoTQwZXglxADQSSANACchnuQURDrtn9rYoLOyB8Bc5heQ4UPvPc7MFw61PkubJgm1ttK5OMMifbOKRwdLDI4DRreLYKbjkSQq/hpXjM9WzbmORhZ7K2tHUe41e0vJJcMwK1NfkNyj8NJ68t3BwpxMaGssjm0FMiwDvoFMdPMInLue7QSbWwOl4x1lBbVpLQSDQGpGbyDU9ij8PPytGaPhhbTbSttNpNoZG6NvFMjwkivMLjXm5U538FrGL8unPk3adtMbc7FWgw7unxUehCZyZda5L7bxFfdNPknoseF/ljy2olxOFtKg/tAjIGu9R6K+ra1t79sOWX8VX0JVnHMztcu28OLljkcKhr8WWtKEUz70np54zEe8N8VpraJn2d7dPCVDC3CYJjroWdJrvXLHQX+Y/u67dVW070yX8KUB/wC3n+0z1VZ+nW/1R/dMdVEeynKhD/8Ann8Weqr/AIbb/VCfxUfCh4T4eizzeLPVR/ht/mP7n4qPhz187WxTukcIXguZhBJGtCKmnet8XRWpMblFupiY8NRBecQa1roiSA0VFBoANRQq1ulyct1s8+azvyo+8o/1WyD5g0O/NXjDl95hMRb3Y09ra4gkOyNToMXYTXRWtgtMe39ya7d7wHy1t8oDQB7O85fvIulRXFNO8yRGk5q6RAQRrwt7FWq8ZLI6z8XSNsodifhNXmMimX7JV624jgeR28t0Hm/2q3q/YayXg6tjbQLKRHxmEOrj5mfRipr6hPVG05Hry3Wfzf7U9QOR68t0Hm/gnqCo4H7y3Qeb+CeoK8j947oPN/BR6kivJBeO6DzfwU+oHJBeO6DzR6J6gryQXhuh80eij1DSvJDeG6HzB6J6g8WjgmvBjXPwRuoCcLZAXGnQ0GgJ+aeoNU3YK8aithtVOmnE1p2fpE9QVk2CvCpw2G106KiEH5jjE9QbKxcFV4SMD+LbHWvNke0PFCRmBUDSuvSnqC/yR3huh8weieoHJHeG6HzR6J6gpyR3juh80eieoHJJePVg838E9QU5JLy6sHm/gnqBySXl1bP5v9qeoHJJeXVs/m/2p6gpyS3l1bP539qeoNZLsDbW2hllLYuMfWhElWCgJ5zqZaU78k9QbLklvPqWfzv7U9Q27Hgu2Gtlhtck9obEGGF0YwSYjiL2EZUGVGlVtbaUpqqBAQEHl7qAmhPYNSg0VkubjBJLNUSPNRn7gGg7e0INpDxjWtaecQKV0r8kB0snVQeDPL1EHn2iXqIKG0S9RB59pm6iB7TN1EFPaZuoge1TdRBT2qbqIHtU3UQV9pm6iB7TN1EFfaZuogqLTL1EFfaJeogqJ5eog9iaTqIPbZX9VB7q4gj3TTI60O+iDUWu4qMD2EmZpxB3WPS2nQCg3NmkLmtJBaSBUHUHpCC6gICAgICAgICAgICAgICCiAgUQECiCqAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/Z'}
      />
            </div>
            </div>

            <div className='uploadBoxWrapper relative'>
            <span className='absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 bottom-[185px] left-[185px] flex items-center justify-center z-50 cursor-pointer'><IoIosClose className='text-white text-[30px]'/></span>
          <div className='uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[200px] w-[200px] bg-gray-200 cursor-pointer hover:bg-gray-300 flex items-center justify-center flex-col relative'>

              <LazyLoadImage
              className='w-full h-full object-cover'
              alt={'image'}
              effect="blur"
              wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
              style: {transitionDelay: "1s"},
    }}
              src={'data:image/jpeg;base64,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Go3HKle1RIzGW+IV/wDqxHdznVFdauGZ7KnLoTQwZXglxADQSSANACchnuQURDrtn9rYoLOyB8Bc5heQ4UPvPc7MFw61PkubJgm1ttK5OMMifbOKRwdLDI4DRreLYKbjkSQq/hpXjM9WzbmORhZ7K2tHUe41e0vJJcMwK1NfkNyj8NJ68t3BwpxMaGssjm0FMiwDvoFMdPMInLue7QSbWwOl4x1lBbVpLQSDQGpGbyDU9ij8PPytGaPhhbTbSttNpNoZG6NvFMjwkivMLjXm5U538FrGL8unPk3adtMbc7FWgw7unxUehCZyZda5L7bxFfdNPknoseF/ljy2olxOFtKg/tAjIGu9R6K+ra1t79sOWX8VX0JVnHMztcu28OLljkcKhr8WWtKEUz70np54zEe8N8VpraJn2d7dPCVDC3CYJjroWdJrvXLHQX+Y/u67dVW070yX8KUB/wC3n+0z1VZ+nW/1R/dMdVEeynKhD/8Ann8Weqr/AIbb/VCfxUfCh4T4eizzeLPVR/ht/mP7n4qPhz187WxTukcIXguZhBJGtCKmnet8XRWpMblFupiY8NRBecQa1roiSA0VFBoANRQq1ulyct1s8+azvyo+8o/1WyD5g0O/NXjDl95hMRb3Y09ra4gkOyNToMXYTXRWtgtMe39ya7d7wHy1t8oDQB7O85fvIulRXFNO8yRGk5q6RAQRrwt7FWq8ZLI6z8XSNsodifhNXmMimX7JV624jgeR28t0Hm/2q3q/YayXg6tjbQLKRHxmEOrj5mfRipr6hPVG05Hry3Wfzf7U9QOR68t0Hm/gnqCo4H7y3Qeb+CeoK8j947oPN/BR6kivJBeO6DzfwU+oHJBeO6DzR6J6gryQXhuh80eij1DSvJDeG6HzB6J6g8WjgmvBjXPwRuoCcLZAXGnQ0GgJ+aeoNU3YK8aithtVOmnE1p2fpE9QVk2CvCpw2G106KiEH5jjE9QbKxcFV4SMD+LbHWvNke0PFCRmBUDSuvSnqC/yR3huh8weieoHJHeG6HzR6J6gpyR3juh80eieoHJJePVg838E9QU5JLy6sHm/gnqBySXl1bP5v9qeoHJJeXVs/m/2p6gpyS3l1bP539qeoNZLsDbW2hllLYuMfWhElWCgJ5zqZaU78k9QbLklvPqWfzv7U9Q27Hgu2Gtlhtck9obEGGF0YwSYjiL2EZUGVGlVtbaUpqqBAQEHl7qAmhPYNSg0VkubjBJLNUSPNRn7gGg7e0INpDxjWtaecQKV0r8kB0snVQeDPL1EHn2iXqIKG0S9RB59pm6iB7TN1EFPaZuoge1TdRBT2qbqIHtU3UQV9pm6iB7TN1EFfaZuogqLTL1EFfaJeogqJ5eog9iaTqIPbZX9VB7q4gj3TTI60O+iDUWu4qMD2EmZpxB3WPS2nQCg3NmkLmtJBaSBUHUHpCC6gICAgICAgICAgICAgICCiAgUQECiCqAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/Z'}
      />
            </div>
            </div>
            <div className='uploadBoxWrapper relative'>
            <span className='absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 bottom-[185px] left-[185px] flex items-center justify-center z-50 cursor-pointer'><IoIosClose className='text-white text-[30px]'/></span>
          <div className='uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[200px] w-[200px] bg-gray-200 cursor-pointer hover:bg-gray-300 flex items-center justify-center flex-col relative'>

              <LazyLoadImage
              className='w-full h-full object-cover'
              alt={'image'}
              effect="blur"
              wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
              style: {transitionDelay: "1s"},
    }}
              src={'data:image/jpeg;base64,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Go3HKle1RIzGW+IV/wDqxHdznVFdauGZ7KnLoTQwZXglxADQSSANACchnuQURDrtn9rYoLOyB8Bc5heQ4UPvPc7MFw61PkubJgm1ttK5OMMifbOKRwdLDI4DRreLYKbjkSQq/hpXjM9WzbmORhZ7K2tHUe41e0vJJcMwK1NfkNyj8NJ68t3BwpxMaGssjm0FMiwDvoFMdPMInLue7QSbWwOl4x1lBbVpLQSDQGpGbyDU9ij8PPytGaPhhbTbSttNpNoZG6NvFMjwkivMLjXm5U538FrGL8unPk3adtMbc7FWgw7unxUehCZyZda5L7bxFfdNPknoseF/ljy2olxOFtKg/tAjIGu9R6K+ra1t79sOWX8VX0JVnHMztcu28OLljkcKhr8WWtKEUz70np54zEe8N8VpraJn2d7dPCVDC3CYJjroWdJrvXLHQX+Y/u67dVW070yX8KUB/wC3n+0z1VZ+nW/1R/dMdVEeynKhD/8Ann8Weqr/AIbb/VCfxUfCh4T4eizzeLPVR/ht/mP7n4qPhz187WxTukcIXguZhBJGtCKmnet8XRWpMblFupiY8NRBecQa1roiSA0VFBoANRQq1ulyct1s8+azvyo+8o/1WyD5g0O/NXjDl95hMRb3Y09ra4gkOyNToMXYTXRWtgtMe39ya7d7wHy1t8oDQB7O85fvIulRXFNO8yRGk5q6RAQRrwt7FWq8ZLI6z8XSNsodifhNXmMimX7JV624jgeR28t0Hm/2q3q/YayXg6tjbQLKRHxmEOrj5mfRipr6hPVG05Hry3Wfzf7U9QOR68t0Hm/gnqCo4H7y3Qeb+CeoK8j947oPN/BR6kivJBeO6DzfwU+oHJBeO6DzR6J6gryQXhuh80eij1DSvJDeG6HzB6J6g8WjgmvBjXPwRuoCcLZAXGnQ0GgJ+aeoNU3YK8aithtVOmnE1p2fpE9QVk2CvCpw2G106KiEH5jjE9QbKxcFV4SMD+LbHWvNke0PFCRmBUDSuvSnqC/yR3huh8weieoHJHeG6HzR6J6gpyR3juh80eieoHJJePVg838E9QU5JLy6sHm/gnqBySXl1bP5v9qeoHJJeXVs/m/2p6gpyS3l1bP539qeoNZLsDbW2hllLYuMfWhElWCgJ5zqZaU78k9QbLklvPqWfzv7U9Q27Hgu2Gtlhtck9obEGGF0YwSYjiL2EZUGVGlVtbaUpqqBAQEHl7qAmhPYNSg0VkubjBJLNUSPNRn7gGg7e0INpDxjWtaecQKV0r8kB0snVQeDPL1EHn2iXqIKG0S9RB59pm6iB7TN1EFPaZuoge1TdRBT2qbqIHtU3UQV9pm6iB7TN1EFfaZuogqLTL1EFfaJeogqJ5eog9iaTqIPbZX9VB7q4gj3TTI60O+iDUWu4qMD2EmZpxB3WPS2nQCg3NmkLmtJBaSBUHUHpCC6gICAgICAgICAgICAgICCiAgUQECiCqAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/Z'}
      />
            </div>
            </div>
            <div className='uploadBoxWrapper relative'>
            <span className='absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 bottom-[185px] left-[185px] flex items-center justify-center z-50 cursor-pointer'><IoIosClose className='text-white text-[30px]'/></span>
          <div className='uploadBox p-0 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[200px] w-[200px] bg-gray-200 cursor-pointer hover:bg-gray-300 flex items-center justify-center flex-col relative'>

              <LazyLoadImage
              className='w-full h-full object-cover'
              alt={'image'}
              effect="blur"
              wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
              style: {transitionDelay: "1s"},
    }}
              src={'data:image/jpeg;base64,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Go3HKle1RIzGW+IV/wDqxHdznVFdauGZ7KnLoTQwZXglxADQSSANACchnuQURDrtn9rYoLOyB8Bc5heQ4UPvPc7MFw61PkubJgm1ttK5OMMifbOKRwdLDI4DRreLYKbjkSQq/hpXjM9WzbmORhZ7K2tHUe41e0vJJcMwK1NfkNyj8NJ68t3BwpxMaGssjm0FMiwDvoFMdPMInLue7QSbWwOl4x1lBbVpLQSDQGpGbyDU9ij8PPytGaPhhbTbSttNpNoZG6NvFMjwkivMLjXm5U538FrGL8unPk3adtMbc7FWgw7unxUehCZyZda5L7bxFfdNPknoseF/ljy2olxOFtKg/tAjIGu9R6K+ra1t79sOWX8VX0JVnHMztcu28OLljkcKhr8WWtKEUz70np54zEe8N8VpraJn2d7dPCVDC3CYJjroWdJrvXLHQX+Y/u67dVW070yX8KUB/wC3n+0z1VZ+nW/1R/dMdVEeynKhD/8Ann8Weqr/AIbb/VCfxUfCh4T4eizzeLPVR/ht/mP7n4qPhz187WxTukcIXguZhBJGtCKmnet8XRWpMblFupiY8NRBecQa1roiSA0VFBoANRQq1ulyct1s8+azvyo+8o/1WyD5g0O/NXjDl95hMRb3Y09ra4gkOyNToMXYTXRWtgtMe39ya7d7wHy1t8oDQB7O85fvIulRXFNO8yRGk5q6RAQRrwt7FWq8ZLI6z8XSNsodifhNXmMimX7JV624jgeR28t0Hm/2q3q/YayXg6tjbQLKRHxmEOrj5mfRipr6hPVG05Hry3Wfzf7U9QOR68t0Hm/gnqCo4H7y3Qeb+CeoK8j947oPN/BR6kivJBeO6DzfwU+oHJBeO6DzR6J6gryQXhuh80eij1DSvJDeG6HzB6J6g8WjgmvBjXPwRuoCcLZAXGnQ0GgJ+aeoNU3YK8aithtVOmnE1p2fpE9QVk2CvCpw2G106KiEH5jjE9QbKxcFV4SMD+LbHWvNke0PFCRmBUDSuvSnqC/yR3huh8weieoHJHeG6HzR6J6gpyR3juh80eieoHJJePVg838E9QU5JLy6sHm/gnqBySXl1bP5v9qeoHJJeXVs/m/2p6gpyS3l1bP539qeoNZLsDbW2hllLYuMfWhElWCgJ5zqZaU78k9QbLklvPqWfzv7U9Q27Hgu2Gtlhtck9obEGGF0YwSYjiL2EZUGVGlVtbaUpqqBAQEHl7qAmhPYNSg0VkubjBJLNUSPNRn7gGg7e0INpDxjWtaecQKV0r8kB0snVQeDPL1EHn2iXqIKG0S9RB59pm6iB7TN1EFPaZuoge1TdRBT2qbqIHtU3UQV9pm6iB7TN1EFfaZuogqLTL1EFfaJeogqJ5eog9iaTqIPbZX9VB7q4gj3TTI60O+iDUWu4qMD2EmZpxB3WPS2nQCg3NmkLmtJBaSBUHUHpCC6gICAgICAgICAgICAgICCiAgUQECiCqAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/Z'}
      />
            </div>
            </div>
            
          <UploadBox multiple={true}/>
        </div>
        </div>

        </div>

   
        <br/>

          
        <Button type='button' className='btn-blue btn-lg w-full flex gap-2'>
          <MdOutlineCloudUpload className='text-[25px] text-white'/>
          Publish and View</Button>

        </form>
    </section>
  )
}

export default AddProduct; 
