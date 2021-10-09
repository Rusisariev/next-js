import Page from "./PageLink";
import React from 'react';



const Header = () => {

    return (
        <>
            <div className="navbar">
                <Page text={'Главная'} href={'/'}/>
                <Page text={'Игра'} href={'/games'}/>
                <Page text={'Матрица'} href={'/rainMatrix'}/>
            </div>
        </>
    )
}

export default Header