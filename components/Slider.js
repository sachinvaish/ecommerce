import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { RxDot, RxDotFilled  } from "react-icons/rx";

export default function Slider(props) {
    const [slide, setSlide] = useState(0);
  const images = [
    "https://www.wonderplugin.com/wp-content/uploads/2019/05/tutorial-computer-900x288.jpg",
    "https://jssors8.azureedge.net/demos/image-slider/img/px-beach-daylight-fun-1430675-image.jpg",
    "https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg",
    "https://wowslider.com/sliders/demo-77/data1/images/road220058.jpg",
  ];

  const nextSlide = ()=>{
    const index = slide===images.length-1 ? 0 : slide+1;
    setSlide(index);
  }

  const prevSlide = ()=>{
    const index = slide===0 ? images.length-1 : slide-1;
    setSlide(index);
  }

  const goToSlide =(i)=>{
    setSlide(i);
  }

//   setInterval(() => {
//     nextSlide();
// }, 3000);

  return (
    <div  className="h-[60vh] group">
      
      <div className="w-full h-full bg-black m-auto overflow-hidden bg-no-repeat bg-cover duration-700 ease-in-out" style={{backgroundImage:`url('${images[slide]}')`}}>
        <div className="w-full h-[inherit] justify-between px-10 items-center hidden group-hover:flex">
            <MdKeyboardArrowLeft onClick={prevSlide} className="text-[40px] text-white cursor-pointer" />
            <MdKeyboardArrowRight onClick={nextSlide} className="text-[40px] text-white cursor-pointer" />
        </div>
      </div>           
      <div className="flex justify-center text-2xl">
        {images.map((image, i)=>(
            <div onClick={()=>goToSlide(i)} key={i} className="cursor-pointer duration-500 transition-all" >
                {slide===i ? <RxDotFilled/> : <RxDot/>}
            </div>
        ))}
      </div>
    </div>
  );
}
