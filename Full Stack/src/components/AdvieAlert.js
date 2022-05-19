import React from 'react'
import { Button } from 'react-bootstrap';
import './AdviceAlert.css'
function AdvieAlert() {
    const sentences = [
        '“CREATE WHAT WORKS FOR YOU”',
        '“GETTING AT LEAST SEVEN HOURS OF QUALITY SLEEP PER NIGHT”',
        '“DOING SOMETHING PHYSICALLY ACTIVE EVERY DAY”',
        '“EATING A SUSTAINABLE HEALTH DIET”',
        '“LIMIT YOUR ALCOHOL INTAKE”'
    ]
    function renderSentence() {
        const sentence = sentences[Math.floor(Math.random() * sentences.length)];
        return sentence
    }
    return (
        // <div  className='advice'>
        //     {/* <p>Daily advice: {renderSentence()}</p> */}
        //     <p>Are you ready to start your health journey:<br/>
        //         - Tracking over time<br/>
        //         - Monthly report<br/>
        //         - See how each individual habit affects you<br/>
        //         - habit building</p>
        //         <button>Sign Up Now!</button>
        // </div>
        <div class="main-container">
            <div class="heading">
                <h1 class="heading__title">Daily advice</h1>
                <p class="heading__credits"><a class="heading__link" target="_blank" href="https://dribbble.com/sl">{renderSentence()}</a></p>
            </div>
            <div class="cards">
                <div class="card card-1">
                    <div class="card__icon"><i class="fas fa-bolt"></i></div>
                    <p class="card__exit"><i class="fas fa-times"></i></p>
                    <h2 class="card__title">Are you ready to start your health journey:<br />
                        - Tracking over time<br />
                        - Monthly report<br />
                        - See how each individual habit affects you<br />
                        - habit building</h2>
                    <p class="card__apply">
                        <a class="card__link" href="#">Sign up now! <i class="fas fa-arrow-right"></i></a>
                    </p>
                </div>
            </div>
        </div>

    )
}

export default AdvieAlert