export const userColumns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
        field: 'user', headerName: 'User', width: 230,
        renderCell: (params) => {
            return (
                <>
                    <div className="cellWithImg">
                        <img className="cellImg" src={params.row.img} alt="profile" />
                        {params.row.username}
                    </div>
                </>
            )
        }
    },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'project', headerName: 'Projects', width: 90 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'status',
        headerName: 'Status',
        width: 90,
        renderCell: (params) => {
          return <div className={`cellWithStatus ${params.row.status}`}>
                {params.row.status}
            </div>
        }
    },
    // {
    //     field: 'fullName',
    //     headerName: 'Full name',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 160,
    //     renderCell: (params) => {
    //         return (
    //             <>
    //                 <span>{params.row.firstName}</span>
    //                 <p>{params.row.lastName}</p>
    //             </>
    //         )
    //     }
    // },
]

//temporaray data 
export const userRows = [
    {
        id: 1,
        username: "Worker1",
        img: "https://img.freepik.com/free-photo/young-builder-man-construction-uniform-safety-helmet-sideways-pointing-with-index-finger-something-someone-with-serious-frowning-face_141793-28648.jpg?size=626&ext=jpg&ga=GA1.2.1492660095.1671433329&semt=ais",
        status: "active",
        email: "1worker@gmail.com",
        project:"4",
        age: "35",
    },
    {
        id: 2,
        username: "Worker2",
        img: "https://img.freepik.com/free-photo/young-builder-man-construction-uniform-safety-helmet-sideways-pointing-with-index-finger-something-someone-with-serious-frowning-face_141793-28648.jpg?size=626&ext=jpg&ga=GA1.2.1492660095.1671433329&semt=ais",
        status: "pending",
        email: "2worker@gmail.com",
        project:"1",
        age: "40",
    },
    {
        id: 3,
        username: "Worker3",
        img: "https://img.freepik.com/free-photo/young-builder-man-construction-uniform-safety-helmet-sideways-pointing-with-index-finger-something-someone-with-serious-frowning-face_141793-28648.jpg?size=626&ext=jpg&ga=GA1.2.1492660095.1671433329&semt=ais",
        status: "passive",
        email: "3worker@gmail.com",
        project:"3",
        age: "33",
    },
    {
        id: 4,
        username: "Worker4",
        img: "https://img.freepik.com/free-photo/young-builder-man-construction-uniform-safety-helmet-sideways-pointing-with-index-finger-something-someone-with-serious-frowning-face_141793-28648.jpg?size=626&ext=jpg&ga=GA1.2.1492660095.1671433329&semt=ais",
        status: "active",
        email: "4worker@gmail.com",
        project:"2",
        age: "34",
    },
    {
        id: 5,
        username: "Worker5",
        img: "https://img.freepik.com/free-photo/young-builder-man-construction-uniform-safety-helmet-sideways-pointing-with-index-finger-something-someone-with-serious-frowning-face_141793-28648.jpg?size=626&ext=jpg&ga=GA1.2.1492660095.1671433329&semt=ais",
        status: "active",
        email: "5worker@gmail.com",
        project:"5",
        age: "55",
    },
    {
        id: 6,
        username: "Worker6",
        img: "https://img.freepik.com/free-photo/young-builder-man-construction-uniform-safety-helmet-sideways-pointing-with-index-finger-something-someone-with-serious-frowning-face_141793-28648.jpg?size=626&ext=jpg&ga=GA1.2.1492660095.1671433329&semt=ais",
        status: "pending",
        email: "6worker@gmail.com",
        project:"4",
        age: "36",
    },
    {
        id: 7,
        username: "Worker7",
        img: "https://img.freepik.com/free-photo/young-builder-man-construction-uniform-safety-helmet-sideways-pointing-with-index-finger-something-someone-with-serious-frowning-face_141793-28648.jpg?size=626&ext=jpg&ga=GA1.2.1492660095.1671433329&semt=ais",
        status: "active",
        email: "7worker@gmail.com",
        project:"1",
        age: "37",
    },
    {
        id: 8,
        username: "Worker8",
        img: "https://img.freepik.com/free-photo/young-builder-man-construction-uniform-safety-helmet-sideways-pointing-with-index-finger-something-someone-with-serious-frowning-face_141793-28648.jpg?size=626&ext=jpg&ga=GA1.2.1492660095.1671433329&semt=ais",
        status: "active",
        email: "8worker@gmail.com",
        project:"3",
        age: "38",
    },
    {
        id: 9,
        username: "Worker9",
        img: "https://img.freepik.com/free-photo/young-builder-man-construction-uniform-safety-helmet-sideways-pointing-with-index-finger-something-someone-with-serious-frowning-face_141793-28648.jpg?size=626&ext=jpg&ga=GA1.2.1492660095.1671433329&semt=ais",
        status: "active",
        email: "9worker@gmail.com",
        project:"3",
        age: "39",
    },
    {
        id: 10,
        username: "Worker10",
        img: "https://img.freepik.com/free-photo/young-builder-man-construction-uniform-safety-helmet-sideways-pointing-with-index-finger-something-someone-with-serious-frowning-face_141793-28648.jpg?size=626&ext=jpg&ga=GA1.2.1492660095.1671433329&semt=ais",
        status: "passive",
        email: "10worker@gmail.com",
        project:"1",
        age: "30",
    },
]