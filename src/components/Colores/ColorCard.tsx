interface ColorCardProps {
    title: string
    description: string
    hexa: string
}
import { useState } from "react"

const ColorCard = ({ description, hexa, title }: ColorCardProps) => {
    const [bgcolor, setBgcolor] = useState(hexa)
    return (
        <div className="flex flex-row rounded-lg overflow-hidden shadow-lg">
            <div className={`w-1/2 h-full ${bgcolor == hexa ? '' : 'cursor-pointer'}`}
                style={{ backgroundColor: bgcolor }}
                onClick={() => setBgcolor(hexa)}></div>
            <div className="w-1/2 p-4">
                <h4 className="font-medium">{title}</h4>
                <p className="text-sm text-gray-500">{description}</p>
                <input type="color" value={bgcolor} onChange={(e) => setBgcolor(e.target.value)} />
                <p className="bg-slate-200 w-auto p-1 rounded-md cursor-pointer" onClick={() => navigator.clipboard.writeText(bgcolor)}><span className="font-medium">Hexa: </span><span>{bgcolor}</span></p>
            </div>
        </div>
    )
}

export default ColorCard