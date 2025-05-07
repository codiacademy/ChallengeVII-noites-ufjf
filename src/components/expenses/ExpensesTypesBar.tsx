import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from "recharts";
import { motion } from "framer-motion";
import { expensesData } from "../../data/ExpensesData";
import { getExpensesTypesData } from "../../utils/expenseAggregations";
import { TimeRange } from "../../types/types";

interface ExpensesTypesBarProps {
  timeRange: TimeRange;
}

export const ExpensesTypesBar = ({ timeRange }: ExpensesTypesBarProps) => {
  const expenseBarData = getExpensesTypesData(expensesData, timeRange);

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-xl font-semibold text-gray-100 mb-4">
        Tipos de Despesas
      </h2>
      <div style={{ width: "100%", height: 300 }}>
        {expenseBarData[0] &&
        (expenseBarData[0].fixas > 0 || expenseBarData[0].variaveis > 0) ? (
          <ResponsiveContainer>
            <BarChart
              data={expenseBarData}
              style={{ background: "transparent" }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <YAxis
                stroke="#9CA3AF"
                tickFormatter={(value) =>
                  new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 0,
                  }).format(value)
                }
              />
              <Tooltip
                itemStyle={{ color: "#E5E7EB" }}
                formatter={(value: number, name: string) => {
                  if (value <= 0) return null;
                  return [
                    new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(value),
                    name === "fixas" ? "Despesas Fixas" : "Despesas Variáveis",
                  ];
                }}
                content={(props) => {
                  if (!props.payload || props.payload.length === 0) return null;
                  const items = props.payload
                    .filter((entry) => (entry.value ?? 0) > 0)
                    .map((entry) => (
                      <div key={entry.dataKey} className="mb-1">
                        {entry.dataKey === "fixas"
                          ? "Despesas Fixas"
                          : "Despesas Variáveis"}
                        :{" "}
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(entry.value ?? 0)}
                      </div>
                    ));
                  return items.length > 0 ? (
                    <div
                      style={{
                        backgroundColor: "rgba(31, 41, 55, 0.9)",
                        borderRadius: "4px",
                        border: "1px solid #4B5563",
                        padding: "8px",
                        color: "#E5E7EB",
                      }}
                    >
                      {items}
                    </div>
                  ) : null;
                }}
              />
              <Legend
                content={({ payload }) => (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "nowrap",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "2rem",
                    }}
                  >
                    {(payload ?? []).map((entry, index) => (
                      <span
                        key={`item-${index}`}
                        className="text-gray-300 flex items-center"
                      >
                        <span
                          style={{
                            display: "inline-block",
                            width: "10px",
                            height: "10px",
                            backgroundColor: entry.color,
                            marginRight: "4px",
                          }}
                        />
                        {entry.dataKey === "fixas"
                          ? "Despesas Fixas"
                          : "Despesas Variáveis"}
                      </span>
                    ))}
                  </div>
                )}
              />
              <Bar dataKey="fixas" fill="#c42121" name="Despesas Fixas" />
              <Bar
                dataKey="variaveis"
                fill="#f09023"
                name="Despesas Variáveis"
              />
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Nenhuma despesa encontrada para o período selecionado.
          </div>
        )}
      </div>
    </motion.div>
  );
};