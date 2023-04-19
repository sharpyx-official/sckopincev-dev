export interface DateRange {
  fromDate: Date
  endDate: Date
}

export interface WorkItem {
  company: string
  role: string
  dateRange: DateRange
  description: string
}
