import './footer.css'
import davis_logo from '../icons/ucdavis_logo_gold.png'
import ins_logo from '../icons/instagram.svg'
import facebook_logo from '../icons/facebookicon.svg'
import twitter_logo from '../icons/twittericon.svg'

function Footer() {

    return (
        <div>
            <section className="footer_background_calendar">
                <div className="davis_logo"> <img src={davis_logo} className="davis_logo"/></div>
                <div className="social_handle_icon_container">
                    <img src={facebook_logo} className="social_handle_icon"/>
                    <img src={ins_logo} className="social_handle_icon"/>
                    <img src={twitter_logo} className="social_handle_icon"/>
                </div>
                <section className="footer_text_container">
                    <div className="footer_font">
                        Questions or Comments? Follow Us @ucdavishousing & @ucdavisdiningservices for more updated info!
                    </div>
                    <div className="footer_font">
                        Copyright © HackDavis Team C1. All rights reserved.
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Footer