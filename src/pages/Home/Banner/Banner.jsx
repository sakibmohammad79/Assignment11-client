
const Banner = () => {
    return (
        <div className="carousel w-full" style={{height: '550px'}}>
  <div id="slide1" className="carousel-item relative w-full">
    <img  src="https://i.postimg.cc/QdQ3RGts/pexels-pixabay-265987.jpg" className="w-full" />
    <div className="h-full flex items-center  absolute  left-0 top-0 text-white ">
      <div className='w-full text-white space-y-6 pl-8'>
      <h3 className='text-5xl bold text-rose-600'>Hot & Trendy</h3>
      <h2 className='font-extrabold text-black text-6xl '>Baby Kids Toys</h2>
      <p className='font-semibold text-rose-300'>Get up to 30% off on your first delivery</p>
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
    <img src="https://i.postimg.cc/W1NdWnN9/1-83c59c5b-562d-4fa4-9e35-fe34c3861314.webp" className="w-full" />
    <div className="h-full flex items-center  absolute  left-0 top-0 text-white ">
      <div className='w-full text-white space-y-6 pl-8'>
      <h3 className='text-5xl bold text-rose-600'>Hot & Trendy</h3>
      <h2 className='font-extrabold text-black text-6xl '>Baby Kids Toys</h2>
      <p className='font-semibold text-rose-300'>Get up to 30% off on your first delivery</p>
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
    <img src="https://i.postimg.cc/Xvxc1q65/pexels-cottonbro-studio-3662667.jpg" className="w-full" />
    <div className="h-full flex items-center  absolute  left-0 top-0 text-white ">
      <div className='w-full text-white space-y-6 pl-8'>
      <h3 className='text-5xl bold text-rose-600'>Hot & Trendy</h3>
      <h2 className='font-extrabold text-black text-6xl '>Baby Kids Toys</h2>
      <p className='font-semibold text-rose-300'>Get up to 30% off on your first delivery</p>
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