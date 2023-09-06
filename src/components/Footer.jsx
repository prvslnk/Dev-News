import React from 'react'


const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex flex-column align-items-start mx-5">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">

                    <img style={{ userSelect: 'none', touchAction: 'none', width: '145px' }} src="https://i.imgur.com/5T3Ypyd.png" alt="dev_news" />

                </a>
                <span className="mb-3 mb-md-0 text-muted">&copy; 2023, Made By Pravas.</span>
            </div>
            <div class="vr"></div>

            <div className="col-md-5 offset-md-1 m-1">
                <form style={{
                    margin: '1rem',
                    border: '1px solid',
                    padding: '29px',
                    borderRadius: '20px',
                }}>
                    <h5>Subscribe to our newsletter</h5>
                    <p>Monthly digest of what's new and exciting from us.</p>
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                        <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                        <input type="email" id="email" className="form-control" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" required placeholder="Email address" />
                        <button id="sendEmail" className="btn btn-primary" type="button">Subscribe</button>
                    </div>
                </form>
            </div>
        </footer>
    );

}

export default Footer;
