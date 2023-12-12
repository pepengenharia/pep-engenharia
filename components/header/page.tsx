import './page.css';

import HeaderNav from './header-nav/page';

export default function Header(){
    return(
        <header className='bg-white'>
            <div className="container-global container-header flex justify-between items-center">
                <div>
                    <h1>Logo</h1>
                </div>
                <div>
                    <HeaderNav/>
                </div>
            </div>
        </header>
    );
}