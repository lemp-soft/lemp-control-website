export interface PropsPaginationMainTable {
    max_pages: number,
    actual_page: number,
    haddlePage: (page: number) => void
}
const PaginationMainTable = ({ max_pages, actual_page, haddlePage }: PropsPaginationMainTable) => {
    return (
        <ul className="flex items-center -space-x-px h-8 text-sm mt-6">
            <li>
                <button onClick={() => haddlePage(actual_page != 1 ? actual_page -1 : 1)} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Previous</span>
                    <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                    </svg>
                </button>
            </li>
            <PaginationIf actual_page={actual_page} haddlePage={haddlePage} max_pages={max_pages} />
            <li>
                <button onClick={() => haddlePage(actual_page != max_pages ? actual_page + 1 : max_pages)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Next</span>
                    <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                    </svg>
                </button>
            </li>
        </ul>
    )
}
function PaginationIf({ actual_page, haddlePage, max_pages }: PropsPaginationMainTable) {
    if (max_pages <= 3) {
        return (
            <>
                {
                    Array.from({ length: max_pages }, (_, i) => i + 1).map((page) => (
                        <li key={page}>
                            <button onClick={() => haddlePage(page)} className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${actual_page === page ? 'bg-cyan-50' : ''}`}>{page}</button>
                        </li>
                    ))
                }
            </>
        )
    } else {
        return (
            <>
                {
                    actual_page > 1 ? <>
                        {
                            actual_page != 2 ? <>
                                <li>
                                    <button onClick={() => haddlePage(1)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{1}</button>
                                </li>
                                <li>
                                    <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</button>
                                </li>
                            </>
                                : ''
                        }


                        <li>
                            <button onClick={() => haddlePage(actual_page - 1)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{actual_page - 1}</button>
                        </li>
                    </> : ''
                }
                <li>
                    <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-cyan-50 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{actual_page}</button>
                </li>
                {
                    actual_page < max_pages ? <>
                        <li>
                            <button onClick={() => haddlePage(actual_page + 1)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{actual_page + 1}</button>
                        </li>

                        {
                            actual_page != max_pages - 1 ? <>
                                <li>
                                    <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</button>
                                </li>
                                <li>
                                    <button onClick={() => haddlePage(max_pages)} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{max_pages}</button>
                                </li>
                            </>
                                : ''
                        }

                    </> : ''
                }
            </>
        )
    }
}
export default PaginationMainTable