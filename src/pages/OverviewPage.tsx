import { Header } from "../components/common/Header";
import { motion } from "framer-motion";
import { StatCard } from "../components/common/StatCard";
import {
  BanknoteArrowDown,
  BanknoteArrowUp,
  PiggyBank,
  TrendingUp,
} from "lucide-react";
import { SalesOverviewChart } from "../components/overview/SalesOverviewChart";
import { SalesCoursePie } from "../components/sales/SalesCoursePie";
import { BalanceLineChart } from "../components/overview/BalanceLineChart";
import { BalanceBarChart } from "../components/overview/BalanceBarChart";

export function OverviewPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Dashboard Principal" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total de vendas"
            icon={BanknoteArrowUp}
            value="R$12,345"
            color="#10b981"
          />
          <StatCard
            name="Total de despesas"
            icon={BanknoteArrowDown}
            value="R$1,234"
            color="#eb1a1a"
          />
          <StatCard
            name="Balanço"
            icon={PiggyBank}
            value="R$ 1.234,56"
            color="#205bff"
          />
          <StatCard
            name="Média de vendas"
            icon={TrendingUp}
            value="R$ 1.234,56"
            color="#ec4899"
          />
        </motion.div>

        {/* CHARTS */}
        <div className="mb-8">
          <SalesCoursePie />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <BalanceBarChart />
          <BalanceLineChart />
        </div>

        <div className="mt-6 flex flex-col gap-6">
          <SalesOverviewChart />
        </div>
      </main>
    </div>
  );
}
