import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";

export const BalanceBarChart = () => {
  const BalancePerformanceData = [
    { name: "Jan", receitas: 8000, despesas: 2400 },
    { name: "Fev", receitas: 6000, despesas: 1398 },
    { name: "Mar", receitas: 4800, despesas: 2800 },
    { name: "Abr", receitas: 2780, despesas: 908 },
    { name: "Mai", receitas: 10000, despesas: 4800 },
  ];

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Receitas vs Despesas
      </h2>
      <div style={{ width: "100%", height: 500 }}>
        <ResponsiveContainer>
          <BarChart data={BalancePerformanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey="receitas" fill="#10B981" />
            <Bar dataKey="despesas" fill="#c42121" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
