
const Gallery = () => {
    return (
        <div className="my-16">
            <h3 className="font-bold text-center text-4xl">Kids Gallery</h3>
            <div className='grid grid-cols-2 md:grid-cols-4 my-6'>
                <img src=" https://i.postimg.cc/50xvhmZ3/2-3404bec6-d846-40af-9044-eabbf78b3cd6.webp" alt="" />
                <img src="https://i.postimg.cc/7hR2Trbs/4.webp " alt="" />
                <img src="https://i.postimg.cc/J00Xnz7H/3.webp " alt="" />
                <img src=" https://i.postimg.cc/pX7fmzFW/1-15336cf3-5f3f-4e98-b918-f9ef65433fc6.webp" alt="" />
                <img src="https://i.postimg.cc/SKt2Ppfy/7.webp" alt="" />
                <img src="https://i.postimg.cc/pThhb1sK/8.webp" alt="" />
                <img src="https://i.postimg.cc/9FG9QKCp/6.webp" alt="" />
                <img src="https://i.postimg.cc/Hxhx64Hj/5.webp" alt="" />
            </div>
            <div className='grid grid-cols-3 md:grid-cols-6 mt-12 mb-6 max-w-6xl mx-auto'>
                <img src="https://i.postimg.cc/q7GdFdPN/2-dc4d57a4-5539-4530-97bc-6d56c402e1a1-130x130-2x.webp" alt="" />
                <img src="https://i.postimg.cc/K8WmScws/1-f30483b4-384a-400a-8ea8-a8315159f04c-130x130-2x.webp" alt="" />
                <img src="https://i.postimg.cc/g06mYFPc/5-6a752e69-fdc2-47e8-9a78-109f4fd3acac-130x130-2x.webp" alt="" />
                <img src="https://i.postimg.cc/7PNDPnjz/4-fd8a33da-a309-4ef0-8ae0-59f48c8c53aa-130x130-2x.webp" alt="" />
                <img src="https://i.postimg.cc/PrxGXsWG/3-e9f1df63-85a4-438f-875d-2337d922e43b-130x130-2x.webp" alt="" />
                <img src="https://i.postimg.cc/3xN3c0Sv/6-6fe49b5d-1bf1-4e73-bc55-7323f65d4095-130x130-2x.webp" alt="" />
            </div>
            <div className=" flex justify-center">
                <a className="btn btn-sm btn-circle border-none bg-teal-300 mr-8">❮</a> 
                <a  className="btn btn-sm btn-circle border-none bg-teal-300">❯</a>
    </div>
        </div>
    );
};

export default Gallery;