import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "../components/common/Header";
import { StatCard } from "../components/common/StatCard";
import {
  AlertTriangle,
  BanknoteArrowDown,
  Repeat,
  ShoppingCart,
} from "lucide-react";
import { ExpensesTable } from "../components/expenses/ExpensesTable";
import { ExpensesGrowth } from "../components/expenses/ExpensesGrowth";
import { ExpensesTypesBar } from "../components/expenses/ExpensesTypesBar";
import { ButtonAdd } from "../components/common/ButtonAdd";
import { expensesData } from "../data/ExpensesData";
import { filterExpensesByTime } from "../utils/expenseAggregations";
import { TimeRange } from "../types/types";

export function ExpensesPage() {
  const [timeRange, setTimeRange] = useState<TimeRange>("all");

  // filtrando os dados pelo time range
  const filteredExpenses = filterExpensesByTime(expensesData, timeRange);

  const expensesStats = {
    totalExpenses: filteredExpenses.reduce(
      (sum, expense) => sum + expense.value,
      0
    ), // total de despesas
    fixedExpenses: filteredExpenses
      .filter((expense) => expense.category === "Fixa")
      .reduce((sum, expense) => sum + expense.value, 0), // total de despesas fixas
    variableExpenses: filteredExpenses
      .filter((expense) => expense.category === "Variavel")
      .reduce((sum, expense) => sum + expense.value, 0), // total de despesas variaveis
    pendingExpenses: filteredExpenses
      .filter((expense) => expense.status === "Pendente")
      .reduce((sum, expense) => sum + expense.value, 0), // total de despesas pendentes
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header
        title="Despesas"
        showTimeRange={true}
        onTimeRangeChange={setTimeRange}
      >
        <ButtonAdd titleButton="Adicionar Despesa" />
      </Header>

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total de Despesas"
            icon={BanknoteArrowDown}
            value={new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(expensesStats.totalExpenses)}
            color="#eb1a1a"
          />
          <StatCard
            name="Despesas Fixas"
            icon={Repeat}
            value={new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(expensesStats.fixedExpenses)}
            color="#10b981"
          />
          <StatCard
            name="Despesas Variáveis"
            icon={ShoppingCart}
            value={new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(expensesStats.variableExpenses)}
            color="#f59e0b"
          />
          <StatCard
            name="Contas Pendentes"
            icon={AlertTriangle}
            value={new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(expensesStats.pendingExpenses)}
            color="#ef4444"
          />
        </motion.div>

        <ExpensesTable expenses={filteredExpenses} />

        {/* GRAFICOS DE DESPESAS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 mb-8">
          <ExpensesGrowth timeRange={timeRange} />
          <ExpensesTypesBar timeRange={timeRange} />
        </div>
      </main>
    </div>
  );
}
