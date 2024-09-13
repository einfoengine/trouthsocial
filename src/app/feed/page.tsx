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
            <div className="ntcf">
                <Avtr src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                <span className="ntcfi">Whats in your mind? Let the people know...</span>
                {/* <div className="ntfa">
                    
                </div> */}
            </div>
            {feeds.map((feed, index) => (
                <div key={"ntfd"+index} className="ntfd">
                    <div className="ntpi">
                        <div className="ntavtr">
                            <Avtr src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                        </div>
                        <div className="ntpinf">
                            <h4>{feed.name}</h4>
                            <span>2 hours ago</span>
                        </div>
                        <button className="ntpe">...</button>
                    </div>
                    {/* nodes theme post information */}
                    <div className="ntft">
                        <p>{feed.text}</p>
                        <div className="ntac">
                            <span>View {feed.reactions[0]}</span>
                            <span>Impression {feed.reactions[1]}</span>
                            <span>Shared {feed.reactions[2]}</span>
                            <span>Comment {feed.reactions[3]}</span>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default Feed