import AcordeonItemBottom from "./AcordeonItemBottom"
import AcordeonItemTop from "./AcordeonItemTop"
interface AcordeonProps {
    items: {
        head: string
        body: string[]
    }[]
}
const Acordeon = ({ items }: AcordeonProps) => {
    return (
        <>
            {
                items.map((item, index) => {
                    if (index === 0) {
                        return (
                            <AcordeonItemTop key={index} body={item.body} head={item.head} />
                        )
                    }
                    return (
                        <AcordeonItemBottom key={index} body={item.body} head={item.head} />
                    )
                })
            }
        </>
    )
}

export default Acordeon