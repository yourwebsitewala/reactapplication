import './chart.scss';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    Total: '1000',
    Demo:'500',
  },
  {
    name: 'February',
    Total: '1200',
    Demo:'2500',
  },
  {
    name: 'March',
    Total: '3150',
    Demo:'500',
  },
  {
    name: 'April',
    Total: '1000',
    Demo:'2000',
  },
  {
    name: 'May',
    Total: '5000',
    Demo:'500',
  },
  {
    name: 'June',
    Total: '1005',
    Demo:'500',
  }
];

const Chart = () => {
  return (
    <div className='chart'>
      <div className='title'>Last 6 months (Data)</div>
      <ResponsiveContainer width="100%" aspect={2/1}>
        <AreaChart width={730} height={250} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke='gray'/>
          {/* <YAxis /> */}
          <CartesianGrid strokeDasharray="3 3" className='chartGrid'/>
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
          <Area type="monotone" dataKey="Demo" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Chart;