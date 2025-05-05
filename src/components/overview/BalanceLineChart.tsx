import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const BalanceLineChart = () => {
  const revenueData = [
    { month: "Jan", receitas: 4000, despesas: 3800 },
    { month: "Fev", receitas: 3000, despesas: 3200 },
    { month: "Mar", receitas: 5000, despesas: 4500 },
    { month: "Abr", receitas: 4500, despesas: 4200 },
    { month: "Mai", receitas: 6000, despesas: 5500 },
    { month: "Jun", receitas: 5500, despesas: 5800 },
    { month: "Jul", receitas: 7000, despesas: 6500 },
  ];

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Receitas vs Despesas
        </h2>
      </div>

      <div style={{ width: "100%", height: 500 }}>
        <ResponsiveContainer>
          <AreaChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="receitas"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="despesas"
              stroke="#c42121"
              fill="#c42121"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
