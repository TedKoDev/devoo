import Link from "next/link"
import { Calendar } from "lucide-react"

export default function DevLogsPage() {
  return (
    <div className="py-6">
      <h1 className="text-2xl font-bold mb-6">개발일지</h1>

      <div className="grid gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <Link href={`/devlogs/${index + 1}`} key={index} className="block">
            <div className="section-card hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold">Devooup_hub 개발일지 #{index + 1}</h2>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Calendar className="h-4 w-4 mr-1" />
                <span>2023-05-{(index + 1).toString().padStart(2, "0")}</span>
              </div>
              <p className="text-gray-600 mt-3">
                {index === 0 && "부업/자영업자/개발자를 위한 실용 정보 플랫폼 개발 시작"}
                {index === 1 && "Next.js 13의 앱 라우터를 적용하면서 겪은 문제와 해결 방법"}
                {index === 2 && "금 시세, 환율 등 실시간 데이터 연동 방식 구현 과정"}
                {index === 3 && "반응형 디자인과 모바일 최적화 작업 진행 내용"}
                {index === 4 && "Zustand를 활용한 상태 관리 구현 방법"}
                {index === 5 && "React Query를 이용한 데이터 페칭 최적화"}
                {index === 6 && "사용자 인증 시스템 구현 과정"}
                {index === 7 && "검색 기능 구현 및 최적화"}
                {index === 8 && "댓글 시스템 개발 과정"}
                {index === 9 && "배포 및 성능 최적화 작업"}
              </p>
              <div className="flex mt-4">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {index % 3 === 0 && "개발"}
                  {index % 3 === 1 && "디자인"}
                  {index % 3 === 2 && "최적화"}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
