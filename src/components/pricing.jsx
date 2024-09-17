import React from 'react';
import '../styles/pricing.css';

const Pricing = () => {
return (
    <div className="pricing_container">
        <h2 className="pricing_title">Pricing</h2>
        <p className="pricing_subtitle">
        Get Started for Free, Then Explore Premium Options with Our Team
        </p>
        <div className="pricing_cards">
            <div className="pricing_card">
                <h3 className="card_type">Free</h3>
                <p className="card_price"><span className="price">0€</span> / month</p>
                <a href="#get-started" className="card_button get_started">Get Started for free</a>
                <ul className="card_features">
                    <li><span className="checkmark">✓</span> Free unlimited workflows</li>
                    <li><span className="checkmark">✓</span> Slack & Discord notifications</li>
                    <li><span className="checkmark">✓</span> Auto Tag & Release</li>
                    <li><span className="checkmark">✓</span> Self-hosted runner support</li>
                    <li><span className="checkmark">✓</span> Sonar Cloud Analysis</li>
                    <li><span className="checkmark">✓</span> Workflow summary</li>
                    <li><span className="checkmark">✓</span> Secure open-source built</li>
                    <li><span className="checkmark">✓</span> No credit card</li>
                </ul>
            </div>
            <div className="pricing_card">
                <h3 className="card_type">Business</h3>
                <p className="card_price"><span className="price">-€</span> / Flexible pricing</p>
                <a href="mailto:gawg@lvrpiz.com?subject=Let's%20Talk%20About%20GAWG%20🚀&body=Hi%20there!%20I'm%20interested%20in%20learning%20more%20about%20GAWG.%20Could%20you%20help%20answer%20some%20questions%20or%20provide%20details%20about%20the%20Business%20Plan?" className="contact_link">
                <button className="card_button get_started">Contact sales</button>
                </a>
                <ul className="card_features">
                    <li><span className="checkmark">✓</span> Everything from Free +</li>
                    <li><span className="checkmark">✓</span> Custom-Fit Workflows</li>
                    <li><span className="checkmark">✓</span> AI auto changelog (coming soon)</li>
                    <li><span className="checkmark">✓</span> Notify MS Teams, Email, Telegram...</li>
                    <li><span className="checkmark">✓</span> Custom cloud deployments</li>
                    <li><span className="checkmark">✓</span> Custom Security analysis</li>
                </ul>
            </div>
        </div>
    </div>
);
};

export default Pricing;