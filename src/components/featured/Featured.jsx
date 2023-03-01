import './featured.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css"
const Featured = () => {
    return (
        <div className='featured'>
            <div className='top'>
                <h1 className='title'>Total Revenue</h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className='bottom'>
                <div className='featuredChart'>
                    <img className='ConstImg' src='https://static.vecteezy.com/system/resources/thumbnails/004/832/728/small_2x/construction-worker-carrying-wooden-beam-and-paint-bucket-concept-free-vector.jpg' />
                    {/* <CircularProgressbar value={65} text={"65%"} strokeWidth={5} /> */}
                </div>
                {/* <p className='title'>Total profit made today</p>
                    <p className='amount'>$420</p> */}
                    <p className='desc'>lorem ipsum dolor set elorid capsium lorem</p>
                {/* <div className='summary'>
                        <div className='item'>
                            <div className='itemTitle'>Target</div>
                            <div className='itemResult'>
                                <div className='resultAmount'>
                                    $12.4k
                                </div>
                            </div>
                        </div>
                    </div> */}
            </div>

        </div>
    );
}
export default Featured;