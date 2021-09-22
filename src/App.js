import React from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
    return (
        <>



            <h1>Fruitmand bezorgservice</h1>
            <p>Je mag toch niet naar buiten</p>


            <fieldset>

                {" Aardbeien "}
                <Counter> { " 0 " } </Counter>


            </fieldset>
            <fieldset>

                {" Bananen "}
                <Counter> { " 0 " } </Counter>

            </fieldset>
            <fieldset>

                {" Appels "}
                <Counter> { " 0 " } </Counter>

            </fieldset>
            <fieldset>

                {" Kiwi's "}
                <Counter> { " 0 " } </Counter>

            </fieldset>


            <button type="onClick" id="reset">Reset</button>


            <form onSubmit="return false">

                Voornaam<input type="text" id="firstname"/>


                <label htmlFor="form-voornaam">Voornaam
                    <input type="text"
                           id="form-voornaam"
                    />
                </label>


                <label htmlFor="form-achternaam">Achternaam
                    <input type="text"
                           id="form-achternaam"
                    />
                </label>

                <label htmlFor="form-leeftijd">Leeftijd
                    <input type="text"
                           id="form-leeftijd"
                           placeholder="0"
                    />
                </label>

                <label htmlFor="form-postcode">Postcode
                    <input type="text"
                           id="form-postcode"
                    />
                </label>

                <p>Bezorgfrequentie</p>
                <div>
                    <select name="frequentie" id="frequentie">
                        <option value="iedere week">iedere week</option>
                        <option value="om de week">om de week</option>
                        <option value="elke maand">elke week</option>
                    </select>
                </div>

                <form>
                    <input type="radio" name="tijd" id="savonds"/>overdag
                    <input type="radio" name="tijd" id="savonds"/>'s avonds
                </form>


                <span>Opmerking</span>
                <br/>
                <textarea id="form-mening" rows="4"/>


                <label htmlFor="checkbox">
                    <input type="checkbox"/>
                    ik ga akkoord met de voorwaarden
                </label>

                <button onClick="sendMessage();">Verzend</button>


            </form>


        </>
    );
}

export default App;
