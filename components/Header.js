import Page from "./PageLink";
import React from 'react';



const Header = () => {

    return (
        <>
            <div className="navbar">
                <Page text={'Главная'} href={'/'}/>
                <Page text={'Матрица'} href={'/games'}/>

            </div>
        </>
    )
}

export default Header