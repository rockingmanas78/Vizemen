import "./prefooter.css"

const Prefooter = () => {
    return (
        <div className="prefooter">
            <div className="prefooterPic">
                <img src="https://media-exp1.licdn.com/dms/image/C560BAQHedB8m8O-Wfg/company-logo_200_200/0/1624817598764?e=1649894400&v=beta&t=3jlZE9k6gzG3I1nMSUlfPSITNWRT_VDVWYez-BFlmSc" className="prefooterImg" alt="" />
            </div>
            <div className="prefooterInfo">
                <div className="prefooterInfoWrapper">
                    <h1>CONTACT US</h1>
                    <p>Leave us a note and we will get back to you</p>

                    <ul>
                        <li><span><i class="fas fa-phone-square"></i></span>  +91-9534136595</li>
                        <li><span><i class="fas fa-envelope-square"></i></span>  info@vizemen.com</li>
                        <li><span><i class="fas fa-home"></i></span>  Birla Institute of Technology, Mesra, Ranchi, Jharkhand, India</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Prefooter
