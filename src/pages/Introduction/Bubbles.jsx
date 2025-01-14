import Bubble from "../../components/bubble";

function Bubbles(){
    return(
        <>
            <Bubble props={{section: "Introduction", width: "50px", color:"var(--color-1)", top: "12px", left: "7px"}} />
            <Bubble props={{section: "Introduction", width: "20px", color:"var(--color-1)", top: "50px", left: "45px"}} />
            <Bubble props={{section: "Introduction", width: "15px", color:"var(--color-1)", top: "0px", left: "40px"}} />
            <Bubble props={{section: "Introduction", width: "10px", color:"var(--color-1)", top: "80px", left: "80px"}} />
            <Bubble props={{section: "Introduction", width: "15px", color:"var(--color-1)", top: "100px", left: "52px"}} />

            <Bubble props={{section: "Introduction", width: "40px", color:"var(--color-4)", top: "2px", right: "20px"}} />
            <Bubble props={{section: "Introduction", width: "30px", color:"var(--color-4)", top: "32px", right: "10px"}} />
            <Bubble props={{section: "Introduction", width: "18px", color:"var(--color-4)", top: "32px", right: "45px"}} />
            <Bubble props={{section: "Introduction", width: "12px", color:"var(--color-4)", top: "18px", right: "6px"}} />
            <Bubble props={{section: "Introduction", width: "15px", color:"var(--color-4)", top: "65px", right: "90px"}} />

            <Bubble props={{section: "Introduction", width: "70px", color:"var(--color-4)", bottom: "16px", left: "26px"}} />
            <Bubble props={{section: "Introduction", width: "35px", color:"var(--color-4)", bottom: "8px", left: "86px"}} />
            <Bubble props={{section: "Introduction", width: "25px", color:"var(--color-4)", bottom: "24px", left: "12px"}} />
            <Bubble props={{section: "Introduction", width: "25px", color:"var(--color-4)", bottom: "68px", left: "18px"}} />

            <Bubble props={{section: "Introduction", width: "70px", color:"var(--color-2)", bottom: "16px", right: "14px"}} />
            <Bubble props={{section: "Introduction", width: "10px", color:"var(--color-2)", bottom: "70px", right: "80px"}} />
            <Bubble props={{section: "Introduction", width: "20px", color:"var(--color-2)", bottom: "16px", right: "0px"}} />
            <Bubble props={{section: "Introduction", width: "40px", color:"var(--color-2)", bottom: "68px", right: "6px"}} />
        </>
    )
}

export default Bubbles;