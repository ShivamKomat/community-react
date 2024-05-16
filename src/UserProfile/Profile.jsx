import React, { useEffect, useState } from 'react';
import './Profile.css'; // Import your CSS file
import { Image1, Image2, Image3 } from '../media';
import { PieChart, Pie,Tooltip, Sector,ResponsiveContainer } from "recharts";

const data = [
  { name: "Wins", value: 100 },
  { name: "Top 10", value: 200 },
  { name: "Top5", value: 300 },
  { name: "Top25", value: 500 }
];
// const data1 = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
//   { name: 'Group E', value: 278 },
//   { name: 'Group F', value: 189 },
// ];
const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];
const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];




const Profile = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const onPieEnter = (data, index) => {
    setActiveIndex(index);
  };
  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";

    const colors = ["green", "blue", "red", "yellow"]; // Colors for sectors

    const sectorFill = colors[payload.index % colors.length];
    
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={sectorFill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={sectorFill}
        />
        {/* <path
          d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
          stroke={sectorFill}
          fill={sectorFill}
        /> */}
        {/* <circle cx={ex} cy={ey} r={2} fill={sectorFill} stroke="none" /> */}
        <text className='pic1'
          x={ex + (cos >= 0 ? 1 : -1) - 12}
          y={ey}
          textAnchor={textAnchor}
          fill="green"
        >{`PV ${value}`}</text>
        <text
          x={ex + (cos >= 0 ? 1 : -1) - 12}
          y={ey}
          dy={18}
          textAnchor={textAnchor}
          fill="red"
        >
          {`(Kill Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };
  
  return (
    <div>
      <div className="avatar">
        <div className="nav">
          <h1>AVATARS</h1>
        </div>
        <div className="slider">
          <div className="image-slider scroller">
            <div className="images">
              <img src={Image1} alt="Image1" />
              <img src={Image2} alt="Image2" />
              <img src={Image3} alt="Image3" />
              <img src={Image1} alt="Image4" />
              <img src={Image2} alt="Image5" />
              <img src={Image3} alt="Image6" />
            </div>
          </div>
        </div>
      </div>

      <div className="Statistics">
        <div className="heading">
          <h1>Statistics</h1>
        </div>
        <div className="container" id="container">
          <div className="card_heading">
            <div className="card card_1">
              <h2>Career</h2>
              <hr />
              <div className="time_card">
                <div className="time">
                  <h1>0d 9h 22m</h1>
                  <p>Time Played</p>
                </div>
                <div className="time">
                  <h1>28</h1>
                  <p>Games Played</p>
                </div>
              </div>
              <hr />
              <div className="time_card">
                <div className="time">
                  <h1>3.96</h1>
                  <p>Kills/Game</p>
                </div>
                <div className="time">
                  <h1>203</h1>
                  <p>Score Per minute</p>
                </div>
              </div>
              <hr />
              <div className="picchart">
                <div className="card1">
                <PieChart width={300} height={300} className='pic'>
                <Pie className='pic'
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={data}
                  cx={140}
                  cy={100}
                  innerRadius={40}
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  onMouseEnter={onPieEnter}
                />
              </PieChart>
                </div>
                {/* <div className="card1"></div> */}
              </div>
            </div>
            <h1>Career</h1>
          </div>
          <div className="card_heading">
            <div className="card card_2">
              <div className="card_inner">
           


      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
                {/* Add your Last Game content here */}
              </div>
            </div>
            <h1>Last Game</h1>
          </div>
        </div>
      </div>
      {/* <div className="graph">
      
      </div> */}

     
    </div>
  );
};

export default Profile;
