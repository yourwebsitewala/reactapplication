import './widget.scss';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Widget = ({type}) => {

    let data;

    //temporary data
    const amount=250;
    const diff =20;
    switch (type) {
        case "worker":
            data = {
                title: "WORKERS",
                isMoney: false,
                link: "See all workers",
                icon: <PeopleOutlineIcon className='icon' style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)"}}/>,
            };
            break;
        case "project":
            data = {
                title: "PROJECTS",
                isMoney: false,
                link: "See all projects",
                icon: <PrecisionManufacturingIcon className='icon' style={{color:"brown",backgroundColor:"rgba(165,42,42,0.3)"}}/>,
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "See all earnings",
                icon: <CurrencyRupeeIcon className='icon' style={{color:"green",backgroundColor:"rgba(0,255,0,0.3)"}}/>,
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See all balance",
                icon: <AccountBalanceWalletIcon className='icon' style={{color:"purple",backgroundColor:"rgba(169,43,100,0.3)"}}/>,
            };
            break;
        default: break;
    }

    return (
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && "$"}{amount}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
                <div className='percentage positive'>
                    <KeyboardDoubleArrowUpIcon />
                    {diff} %
                </div>
                 {data.icon} 
            </div>
        </div>
    );
}

export default Widget;