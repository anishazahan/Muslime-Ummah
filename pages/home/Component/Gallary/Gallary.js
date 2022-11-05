import React, { useEffect, useState } from 'react'
import SingleGallary from './SingleGallary';

const Gallary = () => {
    const [allGallery, setAllGallery] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [activeBtn, setActiveBtn] = useState("All");
    useEffect(() => {
        fetch('gallery.json')
            .then(res => res.json())
            .then(data => {
                setAllGallery(data)
                setGallery(data)
            });
    }, [])
    function handleImg(e) {
        const target = e.target.innerHTML;
        setActiveBtn(target)
        switch (target) {
            case "Masjid":
                const masjidGellary = allGallery.filter(gellary => gellary.category == "masjid")
                setGallery(masjidGellary)
                break;
            case "Ramadan":
                const ramadanGellary = allGallery.filter(gellary => gellary.category == "ramadan")
                setGallery(ramadanGellary)
                break;
            case "Eid":
                const eidGellary = allGallery.filter(gellary => gellary.category == "eid")
                setGallery(eidGellary)
                break;
            case "Namaz":
                const namajGellary = allGallery.filter(gellary => gellary.category == "namaz")
                setGallery(namajGellary)
                break;
            case "Helping People":
                const helpingPeopleGellary = allGallery.filter(gellary => gellary.category == "helpingPeople")
                setGallery(helpingPeopleGellary)
                break;

            default:
                setGallery(allGallery)
        }

    }
    return (
        <div className='max-width mx-auto my-10'>
            <div className="text-center space-y-6">
                <h2 className='font-semibold text-center px-5 lg:px-0 text-gray-800 text-2xl'>Our Photo Gallary</h2>
                <p className='text-[16px] text-gray-500 text-center px-5 mx-auto lg:px-0 w-full md:w-3/4 lg:w-1/2'>Denean sollicitudin. This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean itudin. This is Photoshop's sion of Lorem Ipsum. Proin gravida nibh vel velit.</p>

                <div className="">
                    <button className='outline-none px-8 text-xl py-4 bg-slate-200 text-gray-600'> Cateogory</button>
                </div>
                <div onClick={handleImg} className="flex justify-center flex-wrap mx-auto">
                    <button className={`outline-none cateogory-btn ease-out px-8 text-[16px] font-semibold py-3 ${activeBtn == "All"? "bg-primary text-white" : "text-primary bg-slate-100"} duration-500 uppercase mx-2 my-2 md:my-0`}>All</button>
                    <button className={`outline-none cateogory-btn ease-out px-8 text-[16px] font-semibold py-3 ${activeBtn == "Masjid"? "bg-primary text-white" : "text-primary bg-slate-100"} duration-500 uppercase mx-2 my-2 md:my-0`}>Masjid</button>
                    <button className={`outline-none cateogory-btn ease-out px-8 text-[16px] font-semibold py-3 ${activeBtn == "Namaz"? "bg-primary text-white" : "text-primary bg-slate-100"} duration-500 uppercase mx-2 my-2 md:my-0`}>Namaz</button>
                    <button className={`outline-none cateogory-btn ease-out px-8 text-[16px] font-semibold py-3 ${activeBtn == "Ramadan"? "bg-primary text-white" : "text-primary bg-slate-100"} duration-500 uppercase mx-2 my-2 md:my-0`}>Ramadan</button>
                    <button className={`outline-none cateogory-btn ease-out px-8 text-[16px] font-semibold py-3 ${activeBtn == "Eid"? "bg-primary text-white" : "text-primary bg-slate-100"} duration-500 uppercase mx-2 my-2 md:my-0`}>Eid</button>
                    <button className={`outline-none cateogory-btn ease-out px-8 text-[16px] font-semibold py-3 ${activeBtn == "Helping People"? "bg-primary text-white" : "text-primary bg-slate-100"} duration-500 uppercase mx-2 my-2 md:my-0`}>Helping People</button>
                </div>

                <div className="gallary max-width mx-auto px-20">

                    <div className="flex justify-center flex-wrap">
                        {
                            gallery.map(images => <SingleGallary key={images.id} imgInfo={images}></SingleGallary>)
                        }
                    </div>

                </div>

            </div>



        </div>
    )
}

export default Gallary