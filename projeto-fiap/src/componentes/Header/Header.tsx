import styles from "./Header.module.css"

function Header(){
    return (
        <header className={styles.header}>
            <span>SALESFORCE</span>
            <nav>
                <ul>
                    <li><a href="#mainContent">Início</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#team">Equipe</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;