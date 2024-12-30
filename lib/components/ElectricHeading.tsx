const ElectricHeading = () => {
    return (
        <div 
        className="relative">
            <h2
              
                className="
                absolute 
                bottom-[-50px] 
                left-1/2 
                transform 
                -translate-x-1/2
                w-[300px] 
                sm:w-[500px] 
                lg:w-[800px] 
                py-6
                text-lg 
                sm:text-2xl 
                lg:text-3xl
                font-bold 
                text-white
                bg-gradient-to-r 
               from-[#D3B89D] 
               to-[#A5784C]
                rounded-full 
                flex 
                justify-center 
                items-center
                shadow-[0_0_20px_rgba(234,88,12,0.5)]
                border-2
                border-orange-400/30
                backdrop-blur-sm
                transition-all
                duration-100
                hover:shadow-[0_0_30px_rgba(234,88,12,0.7)]
                from-[#D1C7B7] 
                to-[#B38B4C]
                overflow-hidden
                before:content-['']
                before:absolute
                before:inset-0
                before:border-orange-400/5
            "
            >
                <span className="relative z-10">Nuestros Servicios</span>
            </h2>
        </div>
    )
}

export default ElectricHeading
