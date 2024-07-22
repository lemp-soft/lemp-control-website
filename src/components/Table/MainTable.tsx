interface MainTableProps {
    data: any[]
}
const MainTable = ({ data }: MainTableProps) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {
                            Object.keys(data[0]).map((key, index) => (
                                <th key={index} className="font-semibold px-6 py-4">
                                    {key}
                                </th>
                            ))        
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((dato, index) => (
                            <tr key={index} className="bg-white dark:bg-gray-800">
                                {
                                    Object.values(dato).map((value, index) => (
                                        <td key={index} className="px-6 py-4 whitespace-nowrap">
                                            {value ?? "N/A"}
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>

    )
}

export default MainTable