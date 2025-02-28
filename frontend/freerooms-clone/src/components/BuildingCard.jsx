
export default function BuildingCard( {building}) {
    return (
        <div className="rounded-lg shadow-sm hover:shadow-md border-gray-200 overflow-hidden">
            <div className="relative h-96">
                <img src={`../public/${building.building_picture}`} alt={building.name} className="w-full h-full object-cover"/>
                <div className="absolute top-3 right-3 flex items-center rounded-full px-2 py-1 bg-white font-semibold">
                    <div className="p-2 flex items-center">
                        {/* retrieved from https://www.svgrepo.com/svg/535262/circle?edit=true
                         please provide us with SVGs next time! */}
                        <svg className="w-2 h-2 mr-2" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier"> <circle cx="8" cy="8" r="8" fill="#4cae55"></circle> 
                            </g>
                        </svg>
                        <p>{building.rooms_available} rooms available</p>
                    </div>
                </div>
            <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-[#ef6c00] text-white p-3 rounded-lg shadow-md"> {building.name}</div>
            </div>
            </div>
        </div>
    )
}