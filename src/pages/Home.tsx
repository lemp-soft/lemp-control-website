import MainLayout from "../layouts/MainLayout"
import ContainerLayout from "../layouts/ContainerLayout"
const Home = () => {
  return (
    <>
      <MainLayout>
        <main>
          <ContainerLayout>
            <h1 className="text-2xl font-semibold">Home</h1>
          </ContainerLayout>
        </main>
      </MainLayout>
    </>
  )
}

export default Home