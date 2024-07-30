function MainTableSkeleton() {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg animate-pulse">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="font-semibold text-gray-700 dark:text-gray-400 uppercase p-2"><div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></th>
                        <th className="font-semibold text-gray-700 dark:text-gray-400 uppercase p-2"><div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></th>
                        <th className="font-semibold text-gray-700 dark:text-gray-400 uppercase p-2"><div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></th>
                        <th className="font-semibold text-gray-700 dark:text-gray-400 uppercase p-2"><div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></th>
                        <th className="font-semibold text-gray-700 dark:text-gray-400 uppercase p-2"><div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></th>
                        <th className="font-semibold text-gray-700 dark:text-gray-400 uppercase p-2"><div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div></th>
                    </tr>
                </thead>
                <tbody>
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                    <MainTableSkeletonRow />
                </tbody>
            </table>
        </div>
    )
}
function MainTableSkeletonRow() {
    return (
        <tr className="bg-white dark:bg-gray-800">
            <td className="px-6 py-4 whitespace-nowrap"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></td>
            <td className="px-6 py-4 whitespace-nowrap"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></td>
            <td className="px-6 py-4 whitespace-nowrap"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></td>
            <td className="px-6 py-4 whitespace-nowrap"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></td>
            <td className="px-6 py-4 whitespace-nowrap"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></td>
            <td className="px-6 py-4 whitespace-nowrap"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></td>
            <td className="px-6 py-4 whitespace-nowrap"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></td>
            <td className="px-6 py-4 whitespace-nowrap"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></td>
            <td className="px-6 py-4 whitespace-nowrap"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></td>
            <td className="px-6 py-4 whitespace-nowrap"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div></td>
        </tr>
    )
}
export default MainTableSkeleton