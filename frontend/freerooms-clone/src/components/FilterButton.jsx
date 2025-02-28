import React, { useState, useEffect } from 'react';

export default function FilterButton( { label }) {
    // Probably could put images in public
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        import(`../assets/ui/${label}.png`)
            .then((image) => setImageSrc(image.default))
            .catch(() => console.error('Image not found'));
    }, [label]);

    return (
        <div className="flex">
            <button className="justify-center px-3 flex items-center border-3 border-[#ef6c00] rounded-xl min-w-[160px] cursor-pointer"> 
                <div className="flex items-center space-x-2 p-2">
                    <img src={imageSrc} alt={label} className="w-8 h-8"></img> {/* change to SVG to support dark mode in the future */}
                    <h2 className="text-[#ef6c00] font-semibold text-xl font-sans">{label} </h2>
                </div>
            </button>
        </div>
    )
}