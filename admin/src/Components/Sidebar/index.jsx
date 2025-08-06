import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdSpaceDashboard } from "react-icons/md";
import { FaImage } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { TbBrandProducthunt } from "react-icons/tb";
import { TbCategoryFilled } from "react-icons/tb";
import { IoBagCheck } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import {Collapse} from 'react-collapse';
import { useContext } from 'react';
import { MyContext } from '../../App';




const Sidebar = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const isOpenSubMenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }

  };

  const context = useContext(MyContext);

  return (
    <div className={`sidebar fixed top-0 left-0 bg-[#fff] h-full border-r border-[rgba(0,0,0,0.1)] py-2 px-4 w-[${context.isSidebarOpen===true ? '13%' : '0px'}]`}>
      <div className="py-2 w-full">
      </div>
      <Link to="/">
        <img src="../../../public/img/logo.png" alt="logo"
          className="w-[200px]" />
      </Link>

      <ul className="mt-4">
        <li><Link to="/">
        <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
          <MdSpaceDashboard className="text-[18px]" /> <span>Dashboard</span>
        </Button>
        </Link>
        </li>
      </ul>
      <ul className="mt-4">
        <li><Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]" onClick={()=>isOpenSubMenu(1)}>
          <FaImage className="text-[18px]" /> <span>Home Slides</span>
          <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"><FaAngleDown className={`transition-all ${submenuIndex === 1 ? 'rotate-180' : ''}`} /></span>
        </Button>

        <Collapse isOpened={submenuIndex === 1 ? true : false}>
          <ul className="w-full">
            <li className="w-full">
              <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
              <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>Home Banners List</Button>
            </li>
            <li className="w-full">
              <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
              <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>Add Home Banner Slide</Button>
            </li>
          </ul>
        </Collapse>

        </li>
      </ul>
      <ul className="mt-4">
        <li>
          <Link to="/users">
          <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
          <FaUsers className="text-[18px]" /> <span>Usuarios</span>
        </Button>
          </Link>
        </li>
      </ul>
      <ul className="mt-4">
        <li><Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]" onClick={()=>isOpenSubMenu(2)}>
          <TbBrandProducthunt className="text-[20px]" /> <span>Productos</span>
          <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"><FaAngleDown className={`transition-all ${submenuIndex === 2 ? 'rotate-180' : ''}`} /></span>
        </Button>

        <Collapse isOpened={submenuIndex === 2 ? true : false}>
          <ul className="w-full">
            <li className="w-full">
              <Link to="/products">
              <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
              <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>Lista de Productos
              </Button>
              </Link>
            </li>
            <li className="w-full">
              <Link to="/products/upload">
              <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
              <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>Agregar Producto
              </Button>
              </Link>
            </li>
          </ul>
        </Collapse>

        </li>
      </ul>
      <ul className="mt-4">
        <li><Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]" onClick={()=>isOpenSubMenu(3)}>
          <TbCategoryFilled className="text-[20px]" /> <span>Categorias</span>
          <span className="ml-auto w-[30px] h-[30px] flex items-center justify-center"><FaAngleDown className={`transition-all ${submenuIndex === 3 ? 'rotate-180' : ''}`} /></span>
        </Button>

        <Collapse isOpened={submenuIndex === 3 ? true : false}>
          <ul className="w-full">
            <li className="w-full">
              <Link to="/categories">
              <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
              <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>Lista de Categorías
              </Button>
              </Link>
            </li>
            <li className="w-full">
              <Link to="/category/add">
              <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
              <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>Agregar Categoría
              </Button>
              </Link>
            </li>
            <li className="w-full">
              <Link to="/category/subCat">
              <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
              <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>Lista de Subcategorías
              </Button>
              </Link>
            </li>
            <li className="w-full">
              <Link to="/category/subCat/add">
              <Button className="!text-[rgba(0,0,0,0.7)] !capitalize !justify-start !w-full !text-[13px] !font-[500] !pl-9 flex gap-3">
              <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>Agregar Subcategorías
              </Button>
              </Link>
            </li>
          </ul>
        </Collapse>

        </li>
      </ul>
      <ul className="mt-4">
        <li>
          <Link to="/orders">
            <Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
              <IoBagCheck className="text-[20px]" /> <span>Pedidos</span>
            </Button>
          </Link>
        </li>
      </ul>
      <ul className="mt-4">
        <li><Button className="w-full !capitalize !justify-start flex gap-3 text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] items-center !py-2 hover:!bg-[#f1f1f1]">
          <RiLogoutBoxRFill className="text-[20px]" /> <span>Cerrar Sesión</span>
        </Button>
        </li>
      </ul>


    </div>
  )
}


export default Sidebar