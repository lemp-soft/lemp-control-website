import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form"
import { TerceroForm } from "../../../administracion/terceros/pages/CrearTercero"

interface InputBasicProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    register: <TercerosFormKesy extends keyof TerceroForm>(name: TercerosFormKesy, options?: RegisterOptions<TerceroForm, TercerosFormKesy>) => UseFormRegisterReturn<TercerosFormKesy>
    registerOptions: RegisterOptions<TerceroForm, keyof TerceroForm>
    registerName: keyof TerceroForm
}
const InputBasic = ({ label, className, register, registerName, registerOptions, ...props }: InputBasicProps) => {
    return (
        <div className={className}>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} {...register(registerName,registerOptions)} {...props} />
        </div>
    )
}

export default InputBasic