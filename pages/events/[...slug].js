import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'
import ResultsTitle from '../../components/events/results-title'
import Button from '../../components/ui/button'
import ErrorAlert from '../../components/ui/error-alert'
function FilteredEventPage() {
  const router = useRouter()

  const filterData = router.query.slug
  // console.log(filterData)

  //第一次渲染时，没有获取到页面多层路由参数slug，显示页面加载中
  if (!filterData) {
    return <p className="center">页面加载中...</p>
  }

  //处理捕获的路由参数
  const filteredYear = filterData[0]
  const filteredMonth = filterData[1]

  const numYear = +filteredYear
  const numMonth = +filteredMonth

  //判断是否为有效年份
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2022 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>无效查询，请重新选择过滤时间！</p>
        </ErrorAlert>

        <div className="center">
          <Button link="/events">查看所有活动</Button>
        </div>
      </Fragment>
    )
  }

  //根据年份和月份，过滤活动
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>抱歉，查找不到该日期的活动内容！</p>
        </ErrorAlert>

        <div className="center">
          <Button link="/events">查看所有活动</Button>
        </div>
      </Fragment>
    )
  }

  //日期格式化
  const date = new Date(numYear, numMonth - 1)
  return (
    <div>
      {/* 日期标题 */}
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  )
}

export default FilteredEventPage
