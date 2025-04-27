"use client";

import { ArrowUp, ArrowDown, RefreshCw } from "lucide-react";
import type { ExchangeRate } from "@/types/market";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

interface ExchangeRatesWidgetProps {
  data?: ExchangeRate[];
}

export default function ExchangeRatesWidget({ data }: ExchangeRatesWidgetProps) {
  // 데이터가 없을 경우 기본값 제공
  const defaultData: ExchangeRate[] = [
    {
      currency: "미국 달러",
      currencyCode: "USD",
      rate: 1350.25,
      change: 5.75,
    },
    {
      currency: "유로",
      currencyCode: "EUR",
      rate: 1456.8,
      change: 3.2,
    },
  ];

  // 데이터가 제공되지 않으면 기본값 사용
  const exchangeRates = data || defaultData;

  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");
  const [calculationDirection, setCalculationDirection] = useState<"toForeign" | "toKRW">("toForeign");
  // 간단한 UI를 위해 탭을 항상 rates로 설정
  const [activeTab, setActiveTab] = useState("rates");

  const selectedRate = exchangeRates.find((rate) => rate.currencyCode === selectedCurrency);

  const handleCalculation = () => {
    if (!selectedRate) return;

    if (calculationDirection === "toForeign") {
      // Convert KRW to foreign currency
      const krwAmount = Number.parseFloat(amount.replace(/,/g, ""));
      if (!isNaN(krwAmount)) {
        const foreignAmount = (krwAmount / selectedRate.rate).toFixed(2);
        setResult(foreignAmount);
      }
    } else {
      // Convert foreign currency to KRW
      const foreignAmount = Number.parseFloat(amount);
      if (!isNaN(foreignAmount)) {
        const krwAmount = (foreignAmount * selectedRate.rate).toLocaleString();
        setResult(krwAmount);
      }
    }
  };

  const switchCalculationDirection = () => {
    setCalculationDirection((prev) => (prev === "toForeign" ? "toKRW" : "toForeign"));
    setAmount("");
    setResult("");
  };

  return (
    <div className="widget-card h-full">
      <h3 className="text-sm font-medium mb-3">환율</h3>

      <div className="space-y-2">
        {exchangeRates.map((rate) => {
          const isPositive = rate.change > 0;

          return (
            <div key={rate.currencyCode} className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="font-medium mr-1">{rate.currencyCode}</span>
                <span className="text-xs text-gray-500">{rate.currency}</span>
              </div>
              <div className="flex flex-col items-end">
                <div className="text-sm font-medium">{rate.rate.toLocaleString()}원</div>
                <div className={`flex items-center text-xs ${isPositive ? "text-red-500" : "text-blue-500"}`}>
                  {isPositive ? <ArrowUp className="h-2 w-2 mr-0.5" /> : <ArrowDown className="h-2 w-2 mr-0.5" />}
                  <span>{Math.abs(rate.change).toFixed(2)}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
