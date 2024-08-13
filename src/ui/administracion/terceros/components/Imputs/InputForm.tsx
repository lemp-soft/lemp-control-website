import { RegisterOptions, UseFormRegisterReturn } from "react-hook-form"
import { TerceroForm } from "../../pages/CrearTercero" 
import InputFormBasic from "@ui/common/components/Inputs/InputForm"
import InputLabelForm from "@common/components/Inputs/InputLabelForm"
interface InputFormProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    register: <TercerosFormKesy extends keyof TerceroForm>(name: TercerosFormKesy, options?: RegisterOptions<TerceroForm, TercerosFormKesy>) => UseFormRegisterReturn<TercerosFormKesy>
    registerOptions: RegisterOptions<TerceroForm, keyof TerceroForm>
    registerName: keyof TerceroForm
}
const InputForm = ({ label, className, register, registerName, registerOptions, ...props }: InputFormProps) => {
    return (
        <div className={className}>
            <InputLabelForm label={label as string} htmlFor={registerName as string} />
            <InputFormBasic
                {...register(registerName, registerOptions)}
                {...props}
            />
        </div>
    )
}

export default InputForm