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

export const ExpensesTypesBar = () => {
  const expensesData = [
    { name: "Jan", fixas: 8000, variaveis: 2400 },
    { name: "Fev", fixas: 6000, variaveis: 1398 },
    { name: "Mar", fixas: 4800, variaveis: 2800 },
    { name: "Abr", fixas: 2780, variaveis: 908 },
    { name: "Mai", fixas: 10000, variaveis: 4800 },
  ];

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Tipos de despesas
      </h2>
      <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
          <BarChart data={expensesData}>
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
            <Bar dataKey="fixas" fill="#c42121" />
            <Bar dataKey="variaveis" fill="#f09023" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
