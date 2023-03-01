import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import MessageIcon from '@mui/icons-material/Message';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className='search'>
                    <input type="text" placeholder='Search here' />
                    <SearchIcon />
                </div>
                <div className='items'>
                    <div className='item'>
                        <GTranslateIcon className="icon" />
                        English
                    </div>
                    <div className='item'>
                        <DarkModeIcon className="icon" />
                    </div>
                    <div className='item'>
                        <FullscreenExitIcon className="icon" />
                    </div>
                    <div className='item'>
                        <NotificationsActiveIcon className="icon" />
                        <div className="counter">5</div>
                    </div>
                    <div className='item'>
                        <MessageIcon className="icon" />
                        <div className="counter">4</div>
                    </div>
                    <div className='item'>
                        <MenuIcon className="icon" />
                    </div>
                    <div className='item'>
                        <img src="https://wallpapers.com/images/featured/4co57dtwk64fb7lv.jpg" alt="" className="avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Navbar;