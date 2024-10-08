import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form"
import SelectBasic from "../../../common/components/Selects/SelectBasic"
import { TerceroForm } from "./Imputs/InputForm"
interface SelectInputActiveProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    register: <TercerosFormKesy extends keyof TerceroForm>(name: TercerosFormKesy, options?: RegisterOptions<TerceroForm, TercerosFormKesy>) => UseFormRegisterReturn<TercerosFormKesy>
    registerOptions: RegisterOptions<TerceroForm, keyof TerceroForm>
    registerName: keyof TerceroForm
    colSpan?: 1 | 2 | 3 | 4
}
const SelectInputActive = ({ className, colSpan, ...props }: SelectInputActiveProps) => {
    const options = [
        { value: 'true', label: 'activo' },
        { value: 'false', label: 'inactivo' }
    ]
    return (<SelectBasic className={`ml-6 ${className}`} {...props} id="Regimenes" label="Regimenes:" {...props} options={options} colSpan={colSpan} />)
}

export default SelectInputActive