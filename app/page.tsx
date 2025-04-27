"use client";

import { Suspense, useEffect, useState } from "react";
import CustomizableWidgetGrid from "@/components/home/CustomizableWidgetGrid";
import MainSections from "@/components/home/MainSections";
import WidgetSkeleton from "@/components/widgets/WidgetSkeleton";
import SectionSkeleton from "@/components/sections/SectionSkeleton";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/store/useUserStore";
import {
  getMockSearchTrends,
  getMockStockMarkets,
  getMockRecommendedStocks,
  getMockGlobalIssues,
  getMockMarketEvents,
  getMockOilPrice,
  getMockGoldPrice,
  getMockExchangeRates,
} from "@/lib/api/mock-data";

// 임시 로그인 상태 컴포넌트
function LoginStatus() {
  const { isLoggedIn, user, login, logout } = useUserStore();

  const handleLogin = () => {
    login({
      id: "temp-user-123",
      username: "임시사용자",
    });
  };

  return (
    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md mb-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium">임시 로그인 상태</h3>
          <p className="text-sm text-gray-600">{isLoggedIn ? `현재 "${user?.username}" 계정으로 로그인되어 있습니다.` : "현재 로그인되어 있지 않습니다."}</p>
        </div>
        {isLoggedIn ? (
          <Button variant="outline" onClick={logout}>
            로그아웃
          </Button>
        ) : (
          <Button onClick={handleLogin}>임시 로그인</Button>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  // 클라이언트 사이드에서 데이터 로드
  const [data, setData] = useState({
    searchTrends: null as any,
    stockMarkets: null as any,
    recommendedStocks: null as any,
    globalIssues: null as any,
    marketEvents: null as any,
    oilPrice: null as any,
    goldPrice: null as any,
    exchangeRates: null as any,
  });

  useEffect(() => {
    // 클라이언트 사이드에서 데이터 로드
    setData({
      searchTrends: getMockSearchTrends(),
      stockMarkets: getMockStockMarkets(),
      recommendedStocks: getMockRecommendedStocks(),
      globalIssues: getMockGlobalIssues(),
      marketEvents: getMockMarketEvents(),
      oilPrice: getMockOilPrice(),
      goldPrice: getMockGoldPrice(),
      exchangeRates: getMockExchangeRates(),
    });
  }, []);

  // 데이터가 로드되지 않았으면 로딩 상태 표시
  if (!data.searchTrends) {
    return (
      <div className="py-6">
        <WidgetSkeleton />
      </div>
    );
  }

  return (
    <div className="py-6">
      <LoginStatus />

      <CustomizableWidgetGrid
        searchTrends={data.searchTrends}
        stockMarkets={data.stockMarkets}
        recommendedStocks={data.recommendedStocks}
        globalIssues={data.globalIssues}
        marketEvents={data.marketEvents}
        oilPrice={data.oilPrice}
        goldPrice={data.goldPrice}
        exchangeRates={data.exchangeRates}
      />

      <Suspense fallback={<SectionSkeleton />}>
        <MainSections />
      </Suspense>
    </div>
  );
}
