import React from 'react';
import logo from './logo.svg';
import './global.css';
import './App.css';

function App() {
    return (
        <>
        <div id="app">
            <aside>
                <strong>Cadastrar</strong>
                <form>
                    <div className="input-block">
                        <label htmlFor="username_github">Usuúario do Github</label>
                        <input id="username_github" type="text" name="username_github" required />
                    </div>

                    <div className="input-block">
                        <label htmlFor="techs">Tecnologias</label>
                        <input id="techs" type="text" name="techs" required />
                    </div>

                    <div className="input-group">
                        <div className="input-block">
                            <label htmlFor="latitude">Latitude</label>
                            <input id="latitude" type="text" name="latitude" required />
                        </div>

                        <div className="input-block">
                            <label htmlFor="longitude">Longitude</label>
                            <input id="longitude" type="text" name="longitude" required />
                        </div>
                    </div>

                    <button type="submit">Salvar</button>
                </form>
            </aside>
            <main></main>
        </div>
        </>
    );
}

export default App;
