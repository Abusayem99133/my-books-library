// import "./styles.css";

import { useEffect, useState } from "react";
import {
  BarChart as BarCH,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

import { filterDataBySavedBooks } from "../../utils/filterBook";

const colors = scaleOrdinal(schemeCategory10).range();

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
${x + width / 2}, ${y}
C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function BarChart() {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("./books.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  // console.log(datas);
  const daynamicData = localStorage.getItem("savedBooks");
  const booksArea = filterDataBySavedBooks(datas);
  // console.log(booksArea);
  return (
    <>
      <ResponsiveContainer height={500}>
        {booksArea?.length > 0 && (
          <BarCH
            width={500}
            height={300}
            data={booksArea}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="bookName" />
            <YAxis />
            <Tooltip></Tooltip>
            <Bar
              dataKey="totalPages"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {booksArea.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarCH>
        )}
      </ResponsiveContainer>
    </>
  );
}
