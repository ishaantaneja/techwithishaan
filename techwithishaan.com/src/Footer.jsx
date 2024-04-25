
function Footer(){
    return(
        <footer>
        <div className="footer">
            <div className="endinginfo">
                <img src="" alt="IShaan Taneja"></img>
                <div className="information">
                    <div className="social">
                        <h3>Socials</h3>
                        <ul>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                    <div className="other">
                        <h3>Other</h3>
                        <ul>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                    <div className="resources">
                        <h3>Resources</h3>
                        <ul>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>© {new Date().getFullYear()} Ishaan Taneja. All rights reserved. </p>
            </div>
        </div>
        </footer>
    );
}


export default Footer