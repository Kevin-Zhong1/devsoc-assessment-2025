import React, { useState, useEffect } from 'react';


export default function IconButton({ label }) {
  // note to self: trick to import from /assets
  const [imageSrc, setImageSrc] = useState('');
  useEffect(() => {
      import(`../assets/ui/${label}.svg`)
          .then((image) => setImageSrc(image.default))
          .catch(() => console.error('Image not found'));
  }, [label]);
  
  return (label === "grid") ? 
    <button className="bg-[#ef6c00] p-2 w-12 h-12 rounded-md border border-[#ef6c00] cursor-pointer">
      <img src={imageSrc} alt={label} className="w-8 h-8"></img>
    </button>
    :
    <button className="p-2 w-12 h-12 rounded-md border border-[#ef6c00] hover:bg-orange-50 cursor-pointer">
      <img src={imageSrc} alt={label} className="w-8 h-8"></img>
    </button> 
}