import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from '../../datablesource';
const Datatable = () => {
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: () => {
                return (
                    <div className='cellAction'>
                        <div className='viewButton'>View</div>
                        <div className='deleteButton'>Delete</div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className='datatable'>
            <DataGrid
                rows={userRows}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[10]}
                checkboxSelection
            />
        </div>
    )
}
export default Datatable;