import { Link } from "react-router-dom";
import {
  BarChart as BChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const BarChart = () => {
  return (
    <div className="bg-slate-500">
      <Link to="/pages">
        <BChart></BChart>
      </Link>
    </div>
  );
};

export default BarChart;
