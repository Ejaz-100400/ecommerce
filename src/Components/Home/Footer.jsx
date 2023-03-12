export default function Footer(){
    return(
        <div>
            <footer className="footer-section p-4">
                <div className="footer-desc d-flex justify-content-around mt-4">
                    <div className="text-light text-center d-flex flex-column gap-2 px-3">
                        <h5>About Frend_Web</h5>
                        <h5>Refund & Cancellation</h5>
                    </div>
                    <div className="text-light text-center d-flex flex-column gap-2 px-3">
                        <h5>Contact Us</h5>
                        <h5>Help & Support</h5>
                    </div>
                    <div className="text-light text-center d-flex flex-column gap-2 px-3">
                        <h5>Partner with Us</h5>
                        <h5>Terms & Conditions</h5>
                    </div>
                </div>
            </footer>
        </div>
    )
}