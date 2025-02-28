import { useState } from "react";
import openLogo from "../assets/ui/freeRoomsLogo.png"
import closedLogo from "../assets/ui/freeroomsDoorClosed.png"

export default function Logo () {
    const [isOpen, setIsOpen] = useState(false) // door starts closed

    const toggleDoor = () => {
        setIsOpen(!isOpen) 
    }
    return (
        <div className="cursor-pointer transition-transform" onClick={toggleDoor}>
            <img src={isOpen ? openLogo : closedLogo} width="76" height="76" alt="freerooms logo"></img>
        </div>
    )
}