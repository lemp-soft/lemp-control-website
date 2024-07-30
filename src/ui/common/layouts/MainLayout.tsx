interface MainLayoutProps {
    children: React.ReactNode;
}
import TopBar from "../components/Navbar/TopBar";
const MainLayout = ({children}:MainLayoutProps) => {
  return (
    <>
        <header>
            <TopBar />
        </header>
        {children}
    </>
  )
}

export default MainLayout