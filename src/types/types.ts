export interface Expense {
  id: number;
  date: string; // Formato YYYY-MM-DD para o parsing
  description: string;
  createdAt: string;
  category: "Fixa" | "Variavel";
  value: number;
  status: "Pago" | "Pendente";
}

export type TimeRange =
  | "lastWeek"
  | "thisMonth"
  | "lastThreeMonths"
  | "thisYear"
  | "all";