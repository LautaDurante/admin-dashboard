import React,{useState} from 'react'
import Button from '@mui/material/Button';
import { ImMenu } from "react-icons/im";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { BsBellFill } from "react-icons/bs";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { FaUser } from "react-icons/fa6";
import { RiLogoutBoxRFill } from "react-icons/ri";




const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));
const Header = () => {
  const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const openMyAcc = Boolean(anchorMyAcc);
  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  };
  return (
    <header className='w-full h-[auto] py-2 pl-64 shadow-md pr-7 bg-[#fff] flex items-center justify-between'>
      <div className='part1'>
        <Button className='!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rgba(0,0,0,0.8)]'>
          <ImMenu className="text-[18px] text-[rgba(0,0,0,0.8)]" />
        </Button>
      </div>

      <div className='part2 w-[40%] flex items-center justify-end gap-5'>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <BsBellFill />
          </StyledBadge>
        </IconButton>

        <div className="relative">
          <div className='rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer' onClick={handleClickMyAcc}>
            <img src="https://yt3.ggpht.com/yti/ANjgQV-u_peLr_YoZwH36SZEqdEMV1C7b9ijudeMxHJdh9bokAM=s88-c-k-c0x00ffffff-no-rj" className='w-full h-full object-cover' />
          </div>

          <Menu
        anchorEl={anchorMyAcc}
        id="account-menu"
        open={openMyAcc}
        onClose={handleCloseMyAcc}
        onClick={handleCloseMyAcc}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              minWidth: 220,
              borderRadius: 2,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleCloseMyAcc} className="!bg-white">
          <div className="flex items-center gap-3">
            <div className='rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer'>
            <img 
            src="https://yt3.ggpht.com/yti/ANjgQV-u_peLr_YoZwH36SZEqdEMV1C7b9ijudeMxHJdh9bokAM=s88-c-k-c0x00ffffff-no-rj" 
            className='w-full h-full object-cover' />
          </div>
          </div>
          <div className="info">
           <h3 className="text-[15px] font-[500] leading-5">Lautaro Durante</h3>
            <p className="text-[12px] font-[400] opacity-70">lautaro@gmail.com</p>
          </div>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3">
          <FaUser className="text-[16px]"/> <span className="text-[14px]">Perfil</span>
        </MenuItem>

        <MenuItem onClick={handleCloseMyAcc} className="flex items-center gap-3">
          <RiLogoutBoxRFill className="text-[18px]"/> <span className="text-[14px]">Cerrar Sesión</span>
        </MenuItem>
      </Menu>
        </div>
      </div>


    </header>
  )
}


export default Header