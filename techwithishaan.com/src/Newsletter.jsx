
function Newsletter(){
    return(
        <div className="newsletter">
            <div className="info">
                <h2>Join the newsletter</h2>
                <p>Get the latest insights and updates straight to your inbox</p>
            </div>
            <form className="info">
                <div className="email">
                    <div className="dialog">
                        <input placeholder="Enter your email"></input>
                    </div>
                    <button>Subscribe</button>
                </div>
                <p>Your privacy is important. I never share your email.</p>
            </form>
        </div>
    );
}

export default Newsletter