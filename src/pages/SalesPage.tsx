import { Header } from "../components/common/Header";
import { motion } from "framer-motion";
import { StatCard } from "../components/common/StatCard";
import { DollarSign, Package, TrendingUp, HandCoins } from "lucide-react";
import { SalesTable } from "../components/sales/SalesTable";
import { PieCourseChart } from "../components/overview/PieCourseChart";
import { SalesTrendChart } from "../components/sales/SalesTrendChart";
import { ButtonAdd } from "../components/common/ButtonAdd";
import { SalesTypesBar } from "../components/sales/SalesTypesBar";

export function SalesPage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Vendas">
        <ButtonAdd titleButton="Adicionar Venda" />
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
            name="Total de cursos"
            icon={Package}
            value="20"
            color="#6366f1"
          />
          <StatCard
            name="Média de vendas"
            icon={TrendingUp}
            value="R$12,345"
            color="#10b981"
          />
          <StatCard
            name="Valor Bruto"
            icon={DollarSign}
            value="R$543,210"
            color="#f59e0b"
          />
          <StatCard
            name="Valor Líquido"
            icon={HandCoins}
            value="R$432,210"
            color="#8b5cf6"
          />
        </motion.div>

        <SalesTable />

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesTrendChart />
          <SalesTypesBar />
        </div>
        <PieCourseChart />
      </main>
    </div>
  );
}
