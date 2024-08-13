interface InputLabelFormProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    label: string
}
const InputLabelForm = ({ label, ...props }: InputLabelFormProps) => {
    return (
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" {...props}>{label}</label>
    )
}

export default InputLabelForm