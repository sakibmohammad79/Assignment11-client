import useTitle from "../../../hook/useTitle";

const Banner = () => {
  useTitle('Home');
    return (
        <div className="carousel w-full" style={{height: '550px'}}>
  <div id="slide1" className="carousel-item relative w-full">
    <img  src="https://i.postimg.cc/VNkkrnKG/pexels-tatiana-syrikova-3933025.jpg" className="w-full" />
    <div className="h-full flex items-center  absolute  left-0 top-0 text-white ">
      <div className='w-full text-white space-y-6 pl-8'>
      <h3 className='text-5xl bold text-rose-600'>Hot & Trendy</h3>
      <h2 className='font-extrabold text-black text-6xl '>Baby Kids Toys</h2>
      <p className='font-semibold text-white'>Get up to 30% off on your first delivery</p>
      <div>
        <button className="btn bg-teal-300 border-none mr-5 mb-4 md:mb-0">Shop Now</button>
      </div>
    </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle border-none bg-teal-300 mr-6">❮</a> 
      <a href="#slide2" className="btn btn-circle border-none bg-teal-300">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.postimg.cc/t4qjVnQc/pexels-tu-nguyen-8799784.jpg" className="w-full" />
    <div className="h-full flex items-center  absolute  left-0 top-0 text-white ">
      <div className='w-full text-white space-y-6 pl-8'>
      <h3 className='text-5xl bold text-rose-600'>Hot & Trendy</h3>
      <h2 className='font-extrabold text-black text-6xl '>Baby Kids Toys</h2>
      <p className='font-semibold text-white'>Get up to 30% off on your first delivery</p>
      <div>
        <button className="btn border-none bg-teal-300 mr-5 mb-4 md:mb-0">Shop Now</button>
      </div>
    </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-6 bg-teal-300 border-none">❮</a> 
      <a href="#slide3" className="btn btn-circle border-none bg-teal-300">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.postimg.cc/8khFwF54/pexels-yan-krukau-6209349.jpg" className="w-full" />
    <div className="h-full flex items-center  absolute  left-0 top-0 text-white ">
      <div className='w-full text-white space-y-6 pl-8'>
      <h3 className='text-5xl bold text-rose-600'>Hot & Trendy</h3>
      <h2 className='font-extrabold text-black text-6xl '>Baby Kids Toys</h2>
      <p className='font-semibold text-white'>Get up to 30% off on your first delivery</p>
      <div>
        <button className="btn border-none bg-teal-300 mr-5 mb-4 md:mb-0">Shop Now</button>
      </div>
    </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle border-none bg-teal-300 mr-6">❮</a> 
      <a href="#slide1" className="btn btn-circle border-none bg-teal-300">❯</a>
    </div>
  </div> 
</div>
    );
};

export default Banner;

// bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]