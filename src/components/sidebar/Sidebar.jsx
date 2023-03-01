import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PsychologyIcon from '@mui/icons-material/Psychology';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className='logo'>Admin Panel</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className='title'>MAIN</p>
                    <li>
                        <DashboardIcon />
                        <span>Dashboard</span>
                    </li>
                    <p className='title'>LISTS</p>
                    <li>
                        <ContentPasteSearchIcon />
                        <span>User</span>
                    </li>
                    <li>
                        <ContentPasteSearchIcon />
                        <span>Projects</span>
                    </li>
                    <li>
                        <PrecisionManufacturingIcon />
                        <span>Products</span>
                    </li>                   
                    <p className='title'>USEFUL</p>
                    <li>
                        <CircleNotificationsIcon />
                        <span>Notification</span>
                    </li>
                    <li>
                        <SettingsSuggestIcon />
                        <span>System</span>
                    </li>
                    <p className='title'>SERVICE</p>
                    <li>
                        <PsychologyIcon />

                        <span>Logs</span>
                    </li>
                    <p className='title'>USER</p>
                    <li>
                        <PersonOutlineIcon />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutIcon />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
};
export default Sidebar;