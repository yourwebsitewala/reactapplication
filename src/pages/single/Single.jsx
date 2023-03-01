import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import List from "../../components/table/Table";

const Single = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Worker Information</h1>
                        <div className="item">
                            <img
                                src="https://img.freepik.com/free-photo/smiling-young-male-engineer-wearing-uniform-holding-safety-helmet-looking-camera-showing-thumb-up-isolated-white-background_141793-133146.jpg?size=626&ext=jpg&ga=GA1.1.1492660095.1671433329&semt=ais"
                                alt="profile"
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">Suresh Rajput</h1>
                                <div className="detailItems">
                                    <div className="ListA">
                                        <div className="detailItem">
                                            <span className="itemKey">User Name: </span>
                                            <span className="itemValue">Worker 1</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Email: </span>
                                            <span className="itemValue">worker1sureshrajput@gmail.com</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Phone: </span>
                                            <span className="itemValue">+919876927102</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Address: </span>
                                            <span className="itemValue">B.h.complex, Nr Utkarsh Petrol Pump</span>
                                        </div>

                                    </div>
                                    <div className="ListB">
                                        <div className="detailItem">
                                            <span className="itemKey">Country: </span>
                                            <span className="itemValue">India</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Projects: </span>
                                            <span className="itemValue">5</span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Current Location: </span>
                                            <span className="itemValue">Near Prabhat </span>
                                        </div>
                                        <div className="detailItem">
                                            <span className="itemKey">Age: </span>
                                            <span className="itemValue">28 years old</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="bottom">
                    <h1 className="title">Project Information</h1>
                    <List />
                </div>
            </div>
        </div>
    )
}

export default Single;