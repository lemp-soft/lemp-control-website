import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form"
import { TerceroForm } from "@ui/administracion/terceros/components/Imputs/InputForm"

interface OptintSelect {
    value: string
    label: string
}
export interface SelectBasicProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string
    options: OptintSelect[]
    register: <TercerosFormKesy extends keyof TerceroForm>(name: TercerosFormKesy, options?: RegisterOptions<TerceroForm, TercerosFormKesy>) => UseFormRegisterReturn<TercerosFormKesy>
    registerOptions: RegisterOptions<TerceroForm, keyof TerceroForm>
    registerName: keyof TerceroForm
    colSpan?: 1 | 2 | 3 | 4
}
const SelectBasic = ({ id, label, options, className, register, registerName, registerOptions, colSpan, ...props }: SelectBasicProps) => {
    return (
        <div className={`col-span-${colSpan}`}>
            <label form={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Estado :</label>
            <select {...register(registerName, registerOptions)} {...props} id={id} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className}`}>
                {
                    options.map((option, index) => {
                        if (index === 0) {
                            return <option key={index} value={option.value} selected>{option.label}</option>
                        }
                        return <option key={index} value={option.value}>{option.label}</option>
                    })

                }
            </select>
        </div>
    )
}

export default SelectBasic