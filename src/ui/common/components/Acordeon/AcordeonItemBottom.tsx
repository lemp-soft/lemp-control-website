import { useState } from "react"
interface AcordeonItemBottomProps {
    head: string
    body: string[]
}
const AcordeonItemBottom = ({ body, head }: AcordeonItemBottomProps) => {
    const [toggleAcordeon, setToggleAcordeon] = useState(false)
    const handleToggleAcordeon = () => {
        setToggleAcordeon(!toggleAcordeon)
    }
    return (
        <>
            <h2 id="accordion-collapse-heading-2">
                <button onClick={handleToggleAcordeon} type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                    <span>{head}</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-2" className={toggleAcordeon ? "" : "hidden"} aria-labelledby="accordion-collapse-heading-2">
                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                    {
                        body.map((item, index) => (
                            <p key={index} className="mb-2 text-gray-500 dark:text-gray-400">{item}</p>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AcordeonItemBottom