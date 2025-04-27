"use client"

import { useQuery } from "@tanstack/react-query"
import { fetchHotIssues, fetchRecommendedTools, fetchPopularSideHustles, fetchDevLogs } from "@/lib/api/content"
import HotIssuesSection from "@/components/sections/HotIssuesSection"
import RecommendedToolsSection from "@/components/sections/RecommendedToolsSection"
import PopularSideHustlesSection from "@/components/sections/PopularSideHustlesSection"
import DevLogsSection from "@/components/sections/DevLogsSection"
import SectionSkeleton from "@/components/sections/SectionSkeleton"

export default function MainSections() {
  const { data: hotIssues, isLoading: isLoadingHotIssues } = useQuery({
    queryKey: ["hotIssues"],
    queryFn: fetchHotIssues,
  })

  const { data: recommendedTools, isLoading: isLoadingRecommendedTools } = useQuery({
    queryKey: ["recommendedTools"],
    queryFn: fetchRecommendedTools,
  })

  const { data: popularSideHustles, isLoading: isLoadingPopularSideHustles } = useQuery({
    queryKey: ["popularSideHustles"],
    queryFn: fetchPopularSideHustles,
  })

  const { data: devLogs, isLoading: isLoadingDevLogs } = useQuery({
    queryKey: ["devLogs"],
    queryFn: fetchDevLogs,
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {isLoadingHotIssues ? <SectionSkeleton /> : <HotIssuesSection data={hotIssues} />}

      {isLoadingRecommendedTools ? <SectionSkeleton /> : <RecommendedToolsSection data={recommendedTools} />}

      {isLoadingPopularSideHustles ? <SectionSkeleton /> : <PopularSideHustlesSection data={popularSideHustles} />}

      {isLoadingDevLogs ? <SectionSkeleton /> : <DevLogsSection data={devLogs} />}
    </div>
  )
}
