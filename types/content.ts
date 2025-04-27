export interface HotIssue {
  id: string
  title: string
  date: string
  thumbnail?: string
  tags: string[]
}

export interface Tool {
  id: string
  name: string
  description: string
  icon?: string
  rating: number
}

export interface SideHustle {
  id: string
  title: string
  category: string
  incomeRange: string
  description: string
  thumbnail?: string
}

export interface DevLog {
  id: string
  title: string
  date: string
  summary: string
}

export interface ToolRequest {
  id: string
  name: string
  description: string
  votes: number
  status: "requested" | "in_progress" | "completed"
  requestedBy: string
  requestedAt: string
  completedAt?: string
}
