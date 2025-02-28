// import freeRoomsLogo from '../assets/ui/freeRoomsLogo.png'
import IconButton from './IconButton'
import Logo from './Logo'

export default function Header() {
    return (
       <header className='p-4 bg-white border-b border-gray-200'>
            <div className="mx-auto flex items-center justify-between">

                {/* Freerooms logo + title */}
                <div className='flex items-center cursor-pointer'>
                    <Logo></Logo>
                    {/* <img src={freeRoomsLogo} width="76" height="76"></img> */}
                    <h1 className='text-[#ef6c00] text-4xl font-semibold font-Quinoa_Bold'>Freerooms</h1>
                </div>

                {/* Clickable icons (on-click not implemented)*/}
                <div className='flex items-center gap-2'>
                    <IconButton label="search"></IconButton>
                    <IconButton label="grid"></IconButton>
                    <IconButton label="map"></IconButton>
                    <IconButton label="dark-mode"></IconButton>
                </div>
            </div>
       </header> 
    )
}