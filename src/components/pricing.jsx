import React from 'react';
import '../styles/pricing.css';

const Pricing = () => {
return (
    <div className="pricing_container">
        <h2 className="pricing_title">Pricing</h2>
        <div className="pricing_cards">
            <div className="pricing_card">
                <h3 className="card_type">Free</h3>
                <p className="card_price"><span className="price">0€</span> / month</p>
                <a href="#get-started" className="card_button get_started">Get Started for free</a>
                <ul className="card_features">
                    <li><span className="checkmark">✓</span> Unlimited workflows</li>
                    <li><span className="checkmark">✓</span> 5 supported technologies</li>
                    <li><span className="checkmark">✓</span> Self-hosted runner support</li>
                    <li><span className="checkmark">✓</span> Docker support</li>
                    <li><span className="checkmark">✓</span> Workflow summary</li>
                </ul>
            </div>
            <div className="pricing_card">
                <h3 className="card_type">Business</h3>
                <p className="card_price"><span className="price">-€</span> / Flexible pricing</p>
                <button className="card_button">Contact sales</button>
                <ul className="card_features">
                    <li><span className="checkmark">✓</span> Everything from Free +</li>
                    <li><span className="checkmark">✓</span> Custom-Fit Workflows</li>
                    <li><span className="checkmark">✓</span> AI auto changelog (coming soon)</li>
                    <li><span className="checkmark">✓</span> Notify Slack, MS Teams and more...</li>
                    <li><span className="checkmark">✓</span> Custom cloud deployments</li>
                    <li><span className="checkmark">✓</span> Unlock all GitHub Actions triggers</li>
                </ul>
            </div>
        </div>
    </div>
);
};

export default Pricing;