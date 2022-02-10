import Prefooter from '../prefooter/Prefooter';
import './footer.css'

const Footer = () => {
    return (
        
        <>
            
        
            <Prefooter />
            <footer className="site-footer">
                <div className="container">
                    <div className="col-md-8 col-sm-6 col-xs-12 text">
                        <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
                            <span><a href="/">Vizemen</a></span>.
                        </p>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                        <li><a className="facebook" href="#"><i className="fab fa-facebook"></i></a></li>
                        <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a className="dribbble" href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a className="linkedin" href="#"><i className="fab fa-linkedin"></i></a></li>   
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
