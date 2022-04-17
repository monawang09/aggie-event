import './footer.css'
import davis_logo from '../icons/ucdavis_logo_gold.png'
import ins_logo from '../icons/instagram.svg'
import facebook_logo from '../icons/facebookicon.svg'
import twitter_logo from '../icons/twittericon.svg'

function Footer() {

    return (
        <div>
            <section className="footer_background">
                <div className="davis_logo"> <img src={davis_logo} style="width: 270px; height: auto"/></div>
            </section>
        </div>
    )
}

export default Footer