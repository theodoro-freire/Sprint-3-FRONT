import styles from "./MainContent.module.css"

function MainContent () {
    return (
    <div className={styles.MainContent}>
        <div>
            <h2>Bem vindo ao nosso projeto!</h2>
            <p>Em 18 de setembro de 2023, foi apresentado aos estudantes do curso de Análise e Desenvolvimento de Sistemas da FIAP o desafio de conceber um novo portal para a empresa Salesforce, com ênfase na acessibilidade.</p>
        </div>
        <div >
            <img src={"https://play-lh.googleusercontent.com/S70rI7VrwLic7_p-ax7iAOOopQhcPCzmqyLe5RLJmApTpkgTRaCwWsTNN1Uv1t_t3Pp5"} alt="Logo FIAP" />
        </div>
    </div>
    );
}

export default MainContent;