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
  
  export const SalesTypesBar = () => {
    const expensesData = [
      { name: "Jan", online: 8000, presencial: 2400 },
      { name: "Fev", online: 6000, presencial: 1398 },
      { name: "Mar", online: 4800, presencial: 2800 },
      { name: "Abr", online: 2780, presencial: 908 },
      { name: "Mai", online: 10000, presencial: 4800 },
    ];
  
    return (
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-xl font-semibold text-gray-100 mb-4">
          Tipos de cursos
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
              <Bar dataKey="online" fill="#6ff019" />
              <Bar dataKey="presencial" fill="#1584ec" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    );
  };
  