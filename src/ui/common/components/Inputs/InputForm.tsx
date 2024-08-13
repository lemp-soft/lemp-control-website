// Define InputBasicProps con register tomando una clave y opciones
import { forwardRef } from "react";
interface InputBasicProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

const InputFormImplementRegister = forwardRef<HTMLInputElement, InputBasicProps>(({className,...props}, ref) => {
    return (
        <input ref={ref} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} {...props} />
    )
})

export default InputFormImplementRegister
