import { motion } from "framer-motion";
import { Header } from "../components/common/Header";
import { StatCard } from "../components/common/StatCard";
import { AlertTriangle, Banknote, Repeat, ShoppingCart } from "lucide-react";
import { ExpensesTable } from "../components/expenses/ExpensesTable";
import { ExpensesGrowth } from "../components/expenses/ExpensesGrowth";
import { ExpensesTypesBar } from "../components/expenses/ExpensesTypesBar";
import { ButtonAdd } from "../components/common/ButtonAdd";
import { PieExpensesChart } from "../components/overview/PieExpensesChart";

export function UsersPage() {
  const expensesStats = {
    totalExpenses: 20845,
    fixedExpenses: 243,
    variableExpenses: 98520,
    pendingExpenses: 109,
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Despesas">
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
            icon={Banknote}
            value={new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(expensesStats.totalExpenses)}
            color="#ef4444"
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

        <ExpensesTable />

        {/* USER CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 mb-8">
          <ExpensesGrowth />
          <ExpensesTypesBar />
        </div>

        <PieExpensesChart />
      </main>
    </div>
  );
}
