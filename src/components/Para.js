import React from 'react'

function Para() {
    const Data = [
        {
            id: 1,
            name: "pizza",
            img: "https://im.rediff.com/getahead/2020/sep/29burnt-garlic-chilli-maggi.jpg",
        },
        {
            id: 2,
            name: "Apple",
            img: "https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=",
        },
        {
            id: 3,
            name: "maggi",
            img: "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe-2-500x375.jpg"
        }
    ]
    const mystyle = {
        color: "white",
        // backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        width: "500px",
        height: "500px",
        display: "inline-block",
        borderRadius: "50px",
        alignSelf: "center",
        justifyContent: "center",
        display: "inline-flex"
    };
    const list = {
        fontSize: "30px",
        liststyle: "none",
        textAlign: "center",
        liststyle: "none",


    };
    return (
        // <div>Para</div>
        <>
            <div style={{ display: "block" }}>
                {
                    Data.map((item) =>
                        <div style={{ display: "block" }}>
                            <div style={{ justifyContent: "center", textAlign: "center", width: "50%" }}>

                                <p style={list}>{item.name}<img style={mystyle} src={item.img} /> </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Para