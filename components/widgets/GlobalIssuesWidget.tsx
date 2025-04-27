import Link from "next/link"
import { ArrowRight, TrendingUp, TrendingDown, Minus } from "lucide-react"
import type { GlobalIssue } from "@/types/market"

interface GlobalIssuesWidgetProps {
  data?: GlobalIssue[]
}

export default function GlobalIssuesWidget({ data = [] }: GlobalIssuesWidgetProps) {
  return (
    <div className="widget-card">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-medium">글로벌 이슈</h3>
        <Link href="/finance/global-issues" className="text-xs text-primary flex items-center">
          더보기 <ArrowRight className="h-3 w-3 ml-1" />
        </Link>
      </div>

      <div className="space-y-3">
        {data.slice(0, 3).map((issue) => (
          <Link href={`/finance/global-issues/${issue.id}`} key={issue.id}>
            <div className="hover:bg-gray-50 p-2 rounded-md -mx-2">
              <div className="flex items-start gap-2">
                <div
                  className={`mt-1 p-1 rounded-full ${
                    issue.impact === "positive"
                      ? "bg-green-100 text-green-600"
                      : issue.impact === "negative"
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {issue.impact === "positive" ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : issue.impact === "negative" ? (
                    <TrendingDown className="h-3 w-3" />
                  ) : (
                    <Minus className="h-3 w-3" />
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-medium line-clamp-1">{issue.title}</h4>
                  <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{issue.summary}</p>
                  <div className="flex items-center text-xs text-gray-400 mt-1">
                    <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-500">{issue.category}</span>
                    <span className="mx-1">•</span>
                    <span>{issue.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
