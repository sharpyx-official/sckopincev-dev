import { t } from 'i18next'

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
export const HistoryOfWorkDb: WorkItem[] = [
  {
    company: 'ООО "Лайтап Д"',
    role: 'Ведущий Android разработчик',
    dateRange: {
      fromDate: new Date('2016-10-01'),
      endDate: new Date('2017-10-01')
    },
    description: t('work.history.liteup.description')
  },
  {
    company: 'ООО "Мастер Кит"',
    role: 'TeamLead Android разработчик',
    dateRange: {
      fromDate: new Date('2017-11-01'),
      endDate: new Date('2019-12-01')
    },
    description: t('work.history.masterkit.description')
  },
  {
    company: 'ООО "ТКО-Информ"',
    role: 'TeamLead Android разработчик',
    dateRange: {
      fromDate: new Date('2020-03-01'),
      endDate: new Date('2021-07-01')
    },
    description: t('work.history.tko.description')
  },
  {
    company: 'ООО "Мобайл АП"',
    role: 'TechLead Android разработчик',
    dateRange: {
      fromDate: new Date('2021-11-01'),
      endDate: new Date('2023-02-01')
    },
    description: t('work.history.mobileup.description')
  }
]
