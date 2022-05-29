import React from "react";

import "./Header.css"


function Header() {
    return(
        <div className = "header">
            <div className = "header_left">
                <img
                    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/100px-Facebook_f_logo_%282019%29.svg.png"
                    alt = "FB-Logo"
                />
                <div className = "header_input">
                    <img src = "https://cdn-icons.flaticon.com/png/512/954/premium/954591.png?token=exp=1653783135~hmac=ede7a5b222de077c785a624e8fa85e20" height={25} width={25}   />
                    <input type = "text" placeholder = "search facebook" className = "header__input__text" />
                </div>
            </div>
            <div className = "header_middle">
                <div className = "header_options">
                    <img src = "https://cdn-icons-png.flaticon.com/512/1946/1946488.png" height={25} width={25}  />
                </div>
                <div className = "header_options">
                    <img src = "https://cdn-icons.flaticon.com/png/128/2814/premium/2814368.png?token=exp=1653782731~hmac=6190bdd0a15cf8ab861f686188ccf806" height={25} width={25}   />
                </div>
                <div className = "header_options">
                    <img src = "https://cdn-icons-png.flaticon.com/512/1077/1077046.png" height={25} width={25}   />
                </div>
                <div className = "header_options">
                    <img src = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png" height={25} width={25}   />
                </div>
                <div className = "header_options">
                    <img src = "https://cdn-icons-png.flaticon.com/512/1077/1077063.png"height={25} width={25} />
                </div>
            </div>
            <div className="header_reight">
                <div className="header_info">
                    <img src = "https://cdn-icons.flaticon.com/png/512/4140/premium/4140048.png?token=exp=1653783943~hmac=41de97e8f1b80dcb08636d0bc6959770"height={25} width={25}  />
                    <h4> Mohammed</h4>
                    <div/>
                    <div ><img src = "https://cdn-icons.flaticon.com/png/512/1665/premium/1665629.png?token=exp=1653783650~hmac=6e546367fac78add2deadcff845e7354"height={25} width={25}  /></div>
                    <div >    <img src = "https://cdn-icons.flaticon.com/png/512/2058/premium/2058148.png?token=exp=1653783703~hmac=18be8dbf0af1459d256143ecc9d77bbe"height={25} width={25}  /></div>
                        <div >    <img src = "https://cdn-icons.flaticon.com/png/512/1306/premium/1306155.png?token=exp=1653783745~hmac=1f6f5efacf25bbd8397b99b0252e5f6d"height={25} width={25}  /></div>
                            <div >    <img src = "https://cdn-icons-png.flaticon.com/512/271/271210.png"height={40} width={40} />




                </div>

            </div>


        </div>
        </div>

    )

}
export default Header;