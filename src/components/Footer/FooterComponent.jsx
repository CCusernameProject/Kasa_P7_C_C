import LogoKasa from '../../assets/icons/logoIcons'

const FooterComponent = (props) => {
    return (
        <footer id='Footer' className="Footer">
            <LogoKasa width="122" height="39.44px" fill="white" />
            <p className='Footer--text'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default FooterComponent