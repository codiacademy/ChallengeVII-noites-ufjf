import { Header } from "../components/common/Header";
import { motion } from "framer-motion";
import { StatCard } from "../components/common/StatCard";
import { DollarSign, Package, TrendingUp, HandCoins } from "lucide-react";
import { SalesTable } from "../components/sales/SalesTable";
import { SalesCoursePie } from "../components/sales/SalesCoursePie";
import { SalesGrowth } from "../components/sales/SalesGrowth";
import { ButtonAdd } from "../components/common/ButtonAdd";
import { SalesTypesBar } from "../components/sales/SalesTypesBar";
import { useState } from "react";
import { TimeRange } from "@/types/types";
import { filterSalesByTime } from "@/utils/salesAggregations";
import { salesData } from "@/data/SalesData";

export function SalesPage() {
  const [timeRange, setTimeRange] = useState<TimeRange>("all");

  // filtrando os dados pelo time range
  const filteredSales = filterSalesByTime(salesData, timeRange);

  const salesStats = {
    totalCourses: filteredSales.length, // total de cursos
    avarageSales:
      filteredSales.length > 0
        ? filteredSales.reduce((sum, sale) => sum + sale.finalPrice, 0) /
          filteredSales.length
        : 0,
    grossValue: filteredSales.reduce((sum, sale) => sum + sale.course.price, 0), // valor bruto
    netValue: filteredSales.reduce((sum, sale) => sum + sale.finalPrice, 0), // valor líquido
  };

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header
        title="Vendas"
        showTimeRange={true}
        onTimeRangeChange={setTimeRange}
      >
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
            name="Total de cursos vendidos"
            icon={Package}
            value={salesStats.totalCourses.toString()}
            color="#6366f1"
          />
          <StatCard
            name="Média de vendas"
            icon={TrendingUp}
            value={new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(salesStats.avarageSales)}
            color="#ec4899"
          />
          <StatCard
            name="Valor Bruto"
            icon={DollarSign}
            value={new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(salesStats.grossValue)}
            color="#f59e0b"
          />
          <StatCard
            name="Valor Líquido"
            icon={HandCoins}
            value={new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(salesStats.netValue)}
            color="#8b5cf6"
          />
        </motion.div>

        <SalesTable sales={filteredSales} />

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <SalesCoursePie timeRange={timeRange} />
          <SalesTypesBar timeRange={timeRange} />
        </div>
        <SalesGrowth timeRange={timeRange} />
      </main>
    </div>
  );
}
