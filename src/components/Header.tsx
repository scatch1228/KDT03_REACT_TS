import { Link } from "react-router-dom"
import { loggedin} from "../LoginAtom"
import { useAtomValue } from "jotai"

export default function Header() {
    const logged = useAtomValue(loggedin);
    if (logged == false) {
        console.log(logged);
        return (<header className='bg-blue-500 text-white shadow-md'>
            <div className='text-2xl font-bold text-blue-50'>KDT03</div>
            </header>);
    }
    else {
        console.log(logged);
        return (
            <header className='bg-blue-500 text-white shadow-md'>
                <nav className='container h-20 mx-auto flex justify-between items-center'>
                    <div className='text-2xl font-bold text-blue-50'>KDT03</div>
                    <ul className='flex space-x-4'>
                        <li className='hover:font-bold hover:cursor-pointer'>
                            <Link to="/">Home</Link>
                        </li>
                        <li className='hover:font-bold hover:cursor-pointer'>
                            <Link to="/Lotto">Lotto</Link>
                        </li>
                        <li className='hover:font-bold hover:cursor-pointer'>
                            <Link to="/Festival">Festival</Link>
                        </li>
                        <li className='hover:font-bold hover:cursor-pointer'>
                            <Link to="/TodoList">할일 목록</Link>
                        </li>
                    </ul>
                </nav>

            </header>
        )
    }
}
