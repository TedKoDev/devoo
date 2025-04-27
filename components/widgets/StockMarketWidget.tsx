import { ArrowUp, ArrowDown } from "lucide-react"
import type { StockMarket } from "@/types/market"

interface StockMarketWidgetProps {
  data: StockMarket[]
}

export default function StockMarketWidget({ data }: StockMarketWidgetProps) {
  return (
    <div className="widget-card">
      <h3 className="text-sm font-medium mb-3">주요 증시</h3>
      <div className="space-y-2">
        {data.map((market) => {
          const isPositive = market.change > 0

          return (
            <div key={market.name} className="flex justify-between items-center">
              <div className="font-medium">{market.name}</div>
              <div className="flex flex-col items-end">
                <div className="text-sm font-medium">{market.price.toLocaleString()}</div>
                <div className={`flex items-center text-xs ${isPositive ? "text-red-500" : "text-blue-500"}`}>
                  {isPositive ? <ArrowUp className="h-2 w-2 mr-0.5" /> : <ArrowDown className="h-2 w-2 mr-0.5" />}
                  <span>{Math.abs(market.change).toFixed(2)}</span>
                  <span className="ml-1">({Math.abs(market.changePercent).toFixed(2)}%)</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
