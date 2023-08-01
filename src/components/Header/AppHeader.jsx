import styles from "./AppHeader.module.css";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const AppHeader  = (props) => {
    return (<div {...props}>
      <header className={styles.main}>       
          <span className={styles.constructor}>
            <BurgerIcon type="primary" />
            <a href="/" className={styles.link}>
            Конструктор
            </a>
          </span>
          <span className={styles.orders}>
            <ListIcon type="primary" />
            <a href="/" className={styles.link}>
            Лента заказов
            </a>
          </span>
          <span className={styles.logo}><Logo /></span>
          <span className={styles.account}>
            <ProfileIcon type="primary" />
            <a href="/" className={styles.link}>
            Личный кабинет
            </a>
          </span>        
       
      </header>
      </div>);
  };