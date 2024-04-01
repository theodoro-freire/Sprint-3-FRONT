import styles from "./MainContent.module.css"

function MainContent () {
    return (
    <main id="mainContent">
        <div className={styles.MainContent}>
            <div>
                <h2>Bem vindo ao nosso projeto!</h2>
                <p>Em 18 de setembro de 2023, foi apresentado aos estudantes do curso de Análise e Desenvolvimento de Sistemas da FIAP o desafio de conceber um novo portal para a empresa Salesforce, com ênfase na acessibilidade.</p>
                <button>Saiba mais</button>
            </div>
            <div >
                <img src={"https://blog.brq.com/wp-content/uploads/sites/3/2023/11/brq_salesforce-o-que-e.webp"} alt="Logo FIAP" />
            </div>
        </div>
    </main>
    );
}

export default MainContent;