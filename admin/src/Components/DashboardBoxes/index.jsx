import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { AiFillGift } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa6";
import { BsBank2 } from "react-icons/bs";
import { TbBrandProducthunt } from "react-icons/tb"

const DashboardBoxes = () => {
  return (
    <>
    <Swiper
        slidesPerView={4}
        spaceBetween={10}
       navigation={true}
        modules={[Navigation]}
        className="dashboardBoxesSlider"
      >
        <SwiperSlide>
            <div className="box bg-white p-5 cursor-pointer hover:bg-[#fafafa] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
                    <AiFillGift className="text-[40px]  text-[#e2955c]"/>
                <div className="info w-[70%]">
                    <h3>Nuevas Ordenes</h3>
                    <b>1,250</b>
                </div>
                <IoStatsChartSharp className="text-[50px] text-[#e2955c]"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="box bg-white p-5 cursor-pointer hover:bg-[#fafafa] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
                    <FaChartPie className="text-[50px] text-[#80bb3e]"/>
                <div className="info w-[70%]">
                    <h3>Ventas</h3>
                    <b>67,142</b>
                </div>
                <IoStatsChartSharp className="text-[50px] text-[#80bb3e]"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="box bg-white p-5 cursor-pointer hover:bg-[#fafafa] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
                    <BsBank2 className="text-[40px] text-[#388cc8]"/>
                <div className="info w-[70%]">
                    <h3>Ganancia</h3>
                    <b>83,631</b>
                </div>
                <IoStatsChartSharp className="text-[50px] text-[#388cc8]"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="box bg-white p-5 cursor-pointer hover:bg-[#fafafa] rounded-md border border-[rgba(0,0,0,0.1)] flex items-center gap-4">
                    <TbBrandProducthunt className="text-[40px] text-[#9d4bff]"/>
                <div className="info w-[70%]">
                    <h3>Total de Productos</h3>
                    <b>5,245</b>
                </div>
                <IoStatsChartSharp className="text-[50px] text-[#9d4bff]"/>
            </div>
        </SwiperSlide>
        </Swiper>
    </>
  )
}

export default DashboardBoxes