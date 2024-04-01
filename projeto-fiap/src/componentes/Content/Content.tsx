import styles from "./Content.module.css"

function Content(){
    return (
       <div className={styles.content} id="about">
        <h3>Mais sobre esse entregável</h3>
        <p>Na Sprint 3 de Desenvolvimento Web com React, nós, alunos, fomos desafiados a construir uma variedade de componentes utilizando esta biblioteca JavaScript. Enfrentando obstáculos, entregamos componentes dinâmicos e interativos, demonstrando nosso domínio do React. 
            Este avanço nos prepara para enfrentar desafios mais complexos e criar aplicações web modernas e intuitivas.</p>
       </div>
    );
}

export default Content;