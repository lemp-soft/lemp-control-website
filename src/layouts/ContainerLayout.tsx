interface ContainerLayoutProps {
  children: React.ReactNode;
}
const ContainerLayout = ({ children }: ContainerLayoutProps) => {
  return (
    <div className={`w-full flex flex-wrap items-center justify-center`}>
      <div className="w-3/4">
        {children}
      </div>
    </div>
  )
}

export default ContainerLayout