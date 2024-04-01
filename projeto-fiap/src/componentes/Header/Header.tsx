import styles from "./Header.module.css"

function Header(){
    return (
        <header className={styles.header}>
            <span>Salesforce</span>
            <nav>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Equipe</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;