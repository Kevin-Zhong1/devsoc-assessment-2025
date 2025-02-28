import search from '../assets/ui/search-grey.png'

export default function Searchbar() {
    return (
        <div className="relative w-50% flex-grow max-w-[1000px]">
            <div>
                <img src={search} alt="search" className="absolute left-4 top-1/5 w-8 h-8"></img>
                <input 
                    type="text" 
                    placeholder="Search for a building..." 
                    className="w-full bg-white border rounded-md border-3 border-gray-300 hover:border-gray-500 focus:outline-none focus:border-orange-500 pl-15 p-4 placeholder:text-lg placeholder-font-sans">
                </input>
            </div>
                
        </div>

    )
}