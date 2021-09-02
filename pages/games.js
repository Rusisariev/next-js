import Footer from "./components/Footer";
import Header from "./components/Header";
import sass from "../sass/games.module.sass"


export default function Games() {
    return <>
        <Header/>
        <div className={sass.container}>

            <h1 className={sass.areYoufoodie}>ты пидор</h1>

        </div>
        <Footer/>
    </>
}

