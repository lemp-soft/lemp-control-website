interface ContainerFullLayoutProps {
    children: React.ReactNode;
}
const ContainerFullLayout = ({ children }: ContainerFullLayoutProps) => {
    return (
        <div className={`w-full flex flex-wrap items-center justify-center`}>
            <div className="w-full px-4">
                {children}
            </div>
        </div>
    )
}
export default ContainerFullLayout