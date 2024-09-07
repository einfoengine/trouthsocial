// import Image from "next/image";
import Avtr from "@/components/elements/Avtr";

const Feed = () => {
    const feeds = [
        {
            avater: "",
            name: "Abdullah Maruf",
            time: "Maruf title",
            text: "This is a demo text, you may read it for your own interest. But at the end it does not give you any faydah.",
            media: [
                "1", "2", "3"
            ],
            reactions: [2, 4, 7, 23]
        },
        {
            avater: "",
            name: "Abu huraira Shams",
            time: "Maruf title",
            text: "This is a demo text, you may read it for your own interest. But at the end it does not give you any faydah.",
            media: [
                "1", "2", "3"
            ],
            reactions: [2, 4, 7, 23]
        },
        {
            avater: "",
            name: "Huzaifa Aman",
            time: "Maruf title",
            text: "This is a demo text, you may read it for your own interest. But at the end it does not give you any faydah.",
            media: [
                "1", "2", "3"
            ],
            reactions: [2, 4, 7, 23]
        }
    ]

    return (
        <div className='ntcom nt-feeds'>
            {feeds.map((feed, index) => (
                <div key={"ntfd"+index} className="ntfd">
                    <div className="ntpi">
                        <div className="ntavtr">
                            <Avtr src="https://place-hold.it/300x500"/>
                        </div>
                        <div className="ntinf">
                            <h4>{feed.name}</h4>
                            <span>2 hours ago</span>
                        </div>
                        <button className="ntfe">...</button>
                    </div>
                    {/* nodes theme post information */}
                    <div className="ntft">
                        <p>{feed.text}</p>
                    </div>
                </div>
            ))}
            <div className="ntcf">
                <input className="ntcfi" type="text"/>
                <div className="ntfa">
                    
                </div>
            </div>
        </div>
    )
}

export default Feed