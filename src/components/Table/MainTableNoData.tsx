function MainTableNoData() {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="font-semibold text-gray-700 dark:text-gray-400 uppercase p-2">No hay datos</th>
                    </tr>
                </thead>
            </table>
        </div>
    )

}

export default MainTableNoData