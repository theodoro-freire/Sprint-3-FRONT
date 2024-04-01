import styles from "./Team.module.css"
import imgTheodoro from "../../assets/Theodoro.png"
import imgMatheus from "../../assets/Matheus.png"
import imgGustavo from "../../assets/Gustavo.png"

function Team () {
    return (
    
        <div className={styles.Team} id="team">
            <section>
            <img src={imgGustavo} alt="Logo FIAP" />
            <h4>Gustavo Rocha Caxias</h4>
            <p><b>RM:</b> 553310</p>
            </section>
            <section>
            <img src={imgMatheus} alt="Logo FIAP" />
            <h4>Matheus Tenreiro Rodrigues</h4>
            <p><b>RM:</b> 553734</p>
            </section>
            <section>
            <img src={imgTheodoro} alt="Logo FIAP" />
            <h4>Theodoro Freire de Lima</h4>
            <p><b>RM:</b> 552903</p>
            </section>
        </div>
    );
}

export default Team;