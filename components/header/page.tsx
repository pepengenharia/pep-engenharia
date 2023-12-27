import './page.css';
import Image from 'next/image';

import HeaderNav from './header-nav/page';

export default function Header(){
    return(
        <header className='bg-white'>
            <div className="container-global container-header flex justify-between items-center">
                <div>
                    <a href="/"><Image src="/images/logo/logo-pep.png" alt='logo' width={200} height={0}></Image></a>
                </div>
                <div>
                    <HeaderNav/>
                </div>
            </div>
        </header>
    );
}