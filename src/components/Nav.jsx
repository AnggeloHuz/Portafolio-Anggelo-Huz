import { Link } from "react-router-dom";
import Button from "./utilities/Button";
import Linea from "./utilities/Linea";
import useSound from 'use-sound';
import sound from "../assets/sounds/links.mp3"

export default function Nav() {
    const [playSound] = useSound(sound)
    const links = [{
        path: '/sobre',
        title: 'BIOGRAFÍA'
    },
    {
        path: '/educacion',
        title: 'EDUCACIÓN'
    },
    {
        path: '/experiencia',
        title: 'EXPERIENCIA'
    },
    {
        path: '/proyecto',
        title: 'PROYECTO'
    },
    {
        path: '/contacto',
        title: 'CONTACTO'
    }]

    return (
        <>
            <header className="bg-negro pt-8 pb-8 flex gap-8 px-10 w-full items-center justify-center">
                <Link to={`/`}>
                    <Button className={'py-2'} />
                </Link>
                <nav className="flex list-none">
                    <ul className="flex gap-8">
                        {links.map((link, id) => (
                            <li key={id} className="text-blanco font-mono text-md">
                                <Link to={`${link.path}`} onMouseOver={playSound} className="relative overflow-hidden inline-block after:content-[''] after:absolute after:top-auto after:bottom-0 after:left-auto after:-right-full after:w-full after:h-[1px] after:bg-azul after:transition-all before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-[1px] before:bg-azul before:transition-all hover:after:right-0 hover:before:left-0 after:duration-500 before:duration-500 hover:text-azul transition duration-500">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Linea />
            </header>
        </>
    );
}