import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form"
import SelectBasic from "../../../common/components/Selects/SelectBasic"
import { TerceroForm } from "./Imputs/InputForm"
interface SelectInputRegimenesProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    register: <TercerosFormKesy extends keyof TerceroForm>(name: TercerosFormKesy, options?: RegisterOptions<TerceroForm, TercerosFormKesy>) => UseFormRegisterReturn<TercerosFormKesy>
    registerOptions: RegisterOptions<TerceroForm, keyof TerceroForm>
    registerName: keyof TerceroForm
}
const SelectInputRegimanes = (props: SelectInputRegimenesProps) => {
    const options = [
        { value: '48 - Responsable del impuesto sobre las ventas - IVA', label: '48 - Responsable del impuesto sobre las ventas - IVA' },
        { value: '49 - no responsable de IVA', label: '49 - no responsable de IVA' }
    ]
    return (
        <SelectBasic {...props} id="Regimenes" label="Regimenes:" {...props} options={options} />
    )
}

export default SelectInputRegimanes