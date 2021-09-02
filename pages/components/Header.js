import styles from "../../sass/header.module.sass";
import Page from "./PageLink";
import React from 'react';



const Header = () => {

    return (
        <>
            <div className={styles.navbar}>
                <Page text={'Главная'} href={'/'}/>
                <Page text={'Игра'} href={'/games'}/>
            </div>
        </>
    )
}

export default Header