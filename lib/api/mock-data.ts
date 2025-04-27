import type { StockMarket, GlobalIssue, OilPrice, GoldPrice, ExchangeRate, MarketEvent } from "@/types/market"

// 실시간 검색어 데이터
export function getMockSearchTrends() {
  return {
    google: [
      { keyword: "Next.js 14", trend: "up" },
      { keyword: "React Server Components", trend: "up" },
      { keyword: "TypeScript 5.0", trend: "down" },
      { keyword: "부업 아이디어", trend: "up" },
      { keyword: "프리랜서 개발자", trend: "up" },
      { keyword: "AI 개발 도구", trend: "up" },
      { keyword: "주식 시장 전망", trend: "down" },
      { keyword: "부동산 투자", trend: "down" },
      { keyword: "사이드 프로젝트", trend: "up" },
      { keyword: "온라인 마케팅", trend: "up" },
    ],
    nate: [
      { keyword: "주식 시장 전망", trend: "down" },
      { keyword: "부동산 투자", trend: "down" },
      { keyword: "사이드 프로젝트", trend: "up" },
      { keyword: "온라인 마케팅", trend: "up" },
      { keyword: "Next.js 14", trend: "up" },
      { keyword: "React Server Components", trend: "up" },
      { keyword: "TypeScript 5.0", trend: "down" },
      { keyword: "부업 아이디어", trend: "up" },
      { keyword: "프리랜서 개발자", trend: "up" },
      { keyword: "AI 개발 도구", trend: "up" },
    ],
    daum: [
      { keyword: "AI 개발 도구", trend: "up" },
      { keyword: "주식 시장 전망", trend: "down" },
      { keyword: "부동산 투자", trend: "down" },
      { keyword: "사이드 프로젝트", trend: "up" },
      { keyword: "온라인 마케팅", trend: "up" },
      { keyword: "Next.js 14", trend: "up" },
      { keyword: "React Server Components", trend: "up" },
      { keyword: "TypeScript 5.0", trend: "down" },
      { keyword: "부업 아이디어", trend: "up" },
      { keyword: "프리랜서 개발자", trend: "up" },
    ],
    zum: [
      { keyword: "프리랜서 개발자", trend: "up" },
      { keyword: "AI 개발 도구", trend: "up" },
      { keyword: "주식 시장 전망", trend: "down" },
      { keyword: "부동산 투자", trend: "down" },
      { keyword: "사이드 프로젝트", trend: "up" },
      { keyword: "온라인 마케팅", trend: "up" },
      { keyword: "Next.js 14", trend: "up" },
      { keyword: "React Server Components", trend: "up" },
      { keyword: "TypeScript 5.0", trend: "down" },
      { keyword: "부업 아이디어", trend: "up" },
    ],
    blogKeywords: [
      { keyword: "주식 투자 초보 가이드", trend: "up" },
      { keyword: "파이썬 데이터 분석", trend: "up" },
      { keyword: "부동산 시장 전망 2023", trend: "down" },
      { keyword: "재테크 노하우", trend: "up" },
      { keyword: "프론트엔드 개발 트렌드", trend: "up" },
      { keyword: "부업으로 월 100만원", trend: "up" },
      { keyword: "주식 배당금 투자", trend: "up" },
      { keyword: "AI 활용 사례", trend: "up" },
      { keyword: "블로그 수익화 방법", trend: "up" },
      { keyword: "디지털 노마드 생활", trend: "up" },
    ],
  }
}

// 주식 시장 데이터
export function getMockStockMarkets(): StockMarket[] {
  return [
    {
      name: "KOSPI",
      price: 2568.34,
      change: 12.45,
      changePercent: 0.49,
    },
    {
      name: "KOSDAQ",
      price: 876.21,
      change: -3.78,
      changePercent: -0.43,
    },
    {
      name: "NASDAQ",
      price: 14356.78,
      change: 145.67,
      changePercent: 1.02,
    },
    {
      name: "S&P 500",
      price: 4567.89,
      change: 34.56,
      changePercent: 0.76,
    },
    {
      name: "DOW",
      price: 35678.9,
      change: -123.45,
      changePercent: -0.35,
    },
  ]
}

// 추천 주식 데이터
export function getMockRecommendedStocks() {
  return {
    korean: [
      {
        name: "삼성전자",
        symbol: "005930",
        price: 72800,
        change: 1200,
        changePercent: 1.68,
      },
      {
        name: "SK하이닉스",
        symbol: "000660",
        price: 142000,
        change: 3000,
        changePercent: 2.16,
      },
      {
        name: "NAVER",
        symbol: "035420",
        price: 216500,
        change: -3500,
        changePercent: -1.59,
      },
      {
        name: "카카오",
        symbol: "035720",
        price: 56700,
        change: 1700,
        changePercent: 3.09,
      },
      {
        name: "LG에너지솔루션",
        symbol: "373220",
        price: 435000,
        change: 7000,
        changePercent: 1.64,
      },
    ],
    us: [
      {
        name: "Apple",
        symbol: "AAPL",
        price: 187.32,
        change: 1.23,
        changePercent: 0.66,
      },
      {
        name: "Microsoft",
        symbol: "MSFT",
        price: 378.85,
        change: 5.67,
        changePercent: 1.52,
      },
      {
        name: "Amazon",
        symbol: "AMZN",
        price: 145.68,
        change: -2.34,
        changePercent: -1.58,
      },
      {
        name: "Nvidia",
        symbol: "NVDA",
        price: 456.78,
        change: 12.45,
        changePercent: 2.8,
      },
      {
        name: "Tesla",
        symbol: "TSLA",
        price: 234.56,
        change: -5.67,
        changePercent: -2.36,
      },
    ],
  }
}

// 글로벌 이슈 데이터
export function getMockGlobalIssues(): GlobalIssue[] {
  return [
    {
      id: "1",
      title: "미 연준, 기준금리 동결 결정",
      summary:
        "미국 연방준비제도(Fed)가 기준금리를 현 수준에서 동결하기로 결정했습니다. 이는 인플레이션 압력이 완화되고 있다는 신호로 해석됩니다.",
      date: "2023-05-15",
      category: "경제",
      impact: "positive",
      relatedStocks: [
        {
          name: "JP모건",
          symbol: "JPM",
          price: 156.78,
          change: 3.45,
          changePercent: 2.25,
        },
        {
          name: "골드만삭스",
          symbol: "GS",
          price: 345.67,
          change: 5.67,
          changePercent: 1.67,
        },
      ],
    },
    {
      id: "2",
      title: "중국, 경기 부양책 발표",
      summary:
        "중국 정부가 경기 침체를 막기 위한 대규모 경기 부양책을 발표했습니다. 이는 글로벌 공급망과 원자재 시장에 긍정적인 영향을 미칠 것으로 예상됩니다.",
      date: "2023-05-14",
      category: "경제",
      impact: "positive",
      relatedStocks: [
        {
          name: "포스코",
          symbol: "005490",
          price: 378500,
          change: 12500,
          changePercent: 3.42,
        },
        {
          name: "현대차",
          symbol: "005380",
          price: 187500,
          change: 4500,
          changePercent: 2.46,
        },
      ],
    },
    {
      id: "3",
      title: "유럽 에너지 위기 심화",
      summary:
        "유럽의 에너지 위기가 심화되면서 천연가스 가격이 급등하고 있습니다. 이는 유럽 기업들의 생산 비용 증가로 이어질 것으로 우려됩니다.",
      date: "2023-05-13",
      category: "에너지",
      impact: "negative",
      relatedStocks: [
        {
          name: "한국전력",
          symbol: "015760",
          price: 19850,
          change: -650,
          changePercent: -3.17,
        },
        {
          name: "SK이노베이션",
          symbol: "096770",
          price: 156000,
          change: 4500,
          changePercent: 2.97,
        },
      ],
    },
  ]
}

// 유가 데이터
export function getMockOilPrice(): OilPrice {
  return {
    price: 1650,
    change: -25,
    changePercent: -1.49,
    updatedAt: "2023-05-15 15:30:00",
  }
}

// 금 가격 데이터
export function getMockGoldPrice(): GoldPrice {
  return {
    price: 98750,
    change: 1250,
    changePercent: 1.28,
    updatedAt: "2023-05-15 15:30:00",
  }
}

// 환율 데이터
export function getMockExchangeRates(): ExchangeRate[] {
  return [
    {
      currency: "미국 달러",
      currencyCode: "USD",
      rate: 1350.25,
      change: 5.75,
    },
    {
      currency: "중국 위안",
      currencyCode: "CNY",
      rate: 186.42,
      change: -0.58,
    },
    {
      currency: "일본 엔",
      currencyCode: "JPY",
      rate: 8.95,
      change: 0.12,
    },
    {
      currency: "유로",
      currencyCode: "EUR",
      rate: 1456.8,
      change: 3.2,
    },
  ]
}

// 기존 함수들은 유지하고 getMockMarketEvents 함수를 추가합니다
export function getMockMarketEvents(): MarketEvent[] {
  return [
    {
      id: "1",
      title: "미국 FOMC 회의",
      date: "2023-05-20",
      time: "03:00",
      country: "미국",
      importance: "high",
      category: "policy",
      description: "미 연준의 기준금리 결정 회의",
      impact: "neutral",
    },
    {
      id: "2",
      title: "한국 GDP 발표",
      date: "2023-05-21",
      time: "09:00",
      country: "한국",
      importance: "high",
      category: "economic",
      description: "1분기 국내총생산(GDP) 발표",
      impact: "positive",
    },
    {
      id: "3",
      title: "애플 실적 발표",
      date: "2023-05-22",
      time: "05:30",
      country: "미국",
      importance: "high",
      category: "earnings",
      description: "애플 2분기 실적 발표",
      impact: "positive",
    },
    {
      id: "4",
      title: "삼성전자 배당금 지급",
      date: "2023-05-23",
      country: "한국",
      importance: "medium",
      category: "dividend",
      description: "삼성전자 1분기 배당금 지급일",
      impact: "positive",
    },
    {
      id: "5",
      title: "미국 실업률 발표",
      date: "2023-05-24",
      time: "21:30",
      country: "미국",
      importance: "medium",
      category: "economic",
      description: "주간 실업 지표 발표",
      impact: "neutral",
    },
    {
      id: "6",
      title: "유럽중앙은행 통화정책 회의",
      date: "2023-05-25",
      time: "20:45",
      country: "유럽",
      importance: "high",
      category: "policy",
      description: "ECB 기준금리 결정 회의",
      impact: "neutral",
    },
    {
      id: "7",
      title: "테슬라 신규 공장 발표",
      date: "2023-05-26",
      country: "미국",
      importance: "medium",
      category: "economic",
      description: "테슬라 신규 공장 건설 계획 발표",
      impact: "positive",
    },
    {
      id: "8",
      title: "카카오뱅크 IPO",
      date: "2023-05-27",
      country: "한국",
      importance: "high",
      category: "ipo",
      description: "카카오뱅크 기업공개(IPO) 일정",
      impact: "positive",
    },
  ]
}
