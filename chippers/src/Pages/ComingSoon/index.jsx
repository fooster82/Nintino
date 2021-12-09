import React from 'react';
import './style.css';
import { Logo } from '../../Components/Logo';
import { Header } from '../../Layout/Header';

export function ComingSoon() {
    return (
    <div id="comingsoon-page">
        <div id="logo-container">
            <Logo />
        </div>

        <Header />

        <h1 className="bold-text">Coming soon!</h1>

        <h3 className="bold-text">Below are the future features the team are currently working on.</h3>

        <div id="newfeatures-container">
            <div className="comingsoon-container" id="modes-container">
                <h3 className="container-header">New checkers modes</h3>

                <p className="container-description">We'll first be planning to add some crazy new modes to our checkers game such as:</p>

                <ul>
                    <li className="container-list"><b>Queen frenzy</b> - Every piece starts as a Queen.</li>
                    <li className="container-list"><b>Rush</b> - Users only have 3 seconds to take their turn.</li>
                    <li className="container-list"><b>Mayhem !</b> - There are no turns...it's all down to who can move the quickest.</li>
                </ul>
            </div>

            <div className="comingsoon-container" id="stats-container">
                <h3 className="container-header">Stats pages</h3>

                <p className="container-description">We then plan to include a stats page for each user, providing statistics like:</p>

                <ul>
                    <li className="container-list">Wins/Losses.</li>
                    <li className="container-list">Win percentage.</li>
                    <li className="container-list">Overall ranking, to then be used for future matchmaking.</li>
                </ul>
            </div>

            <div className="comingsoon-container" id="games-container">
                <h3 className="container-header">New games</h3>

                <p className="container-description">We would love to then expand our games library with new games such as:</p>

                <ul>
                    <li className="container-list">Poker.</li>
                    <li className="container-list">Chess.</li>
                    <li className="container-list">Monopoly, with casinos for properties.</li>
                </ul>
            </div>
        </div>
    </div>
    )
}
