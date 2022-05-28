import React from "react";
import "./Header.css"

function Header() {
    return(
        <div className="header">
           Hi from header section.
            <div className="header_left">

            <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/150px-Facebook_f_logo_%282021%29.svg.png"
            alt="logo"


            />

            </div>
            <div className="header_middle">

                <input type="text"
                placeholder="search facebook"
                       className="header_input_text"

                />


            </div>
            <div className="header_reight">



            </div>

        </div>

    )

}
export default Header