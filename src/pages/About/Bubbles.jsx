import Bubble from "../../components/bubble";

function Bubbles({parent_id}){
    return(
        <>
            <Bubble props={{section: "About", width: "60px", color:"var(--color-1)", top: "12px", left: "-47px"}} />
            <Bubble props={{section: "About", width: "20px", color:"var(--color-1)", top: "50px", left: "0px"}} />
            
            <Bubble props={{section: "About", width: "40px", color:"var(--color-4)", top: "2px", right: "-25px"}} />
            <Bubble props={{section: "About", width: "30px", color:"var(--color-4)", top: "32px", right: "-30px"}} />

            <Bubble props={{section: "About", width: "70px", color:"var(--color-4)", bottom: "200px", left: "-40px"}} />

            <Bubble props={{section: "About", width: "70px", color:"var(--color-2)", bottom: "16px", right: "-70px"}} />
            <Bubble props={{section: "About", width: "40px", color:"var(--color-2)", bottom: "68px", right: "-30px"}} />
        </>
    )
}

export default Bubbles;