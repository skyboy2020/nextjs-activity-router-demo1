import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { getEventById } from '../../dummy-data'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from '../../components/ui/error-alert'
import Button from '../../components/ui/button'

//获取单个路由参数，根据eventId查询显示活动
function EventDetailPage() {
  const router = useRouter()
  const eventId = router.query.eventId
  const event = getEventById(eventId)

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>查到不到活动详情！</p>
        </ErrorAlert>

        <div className="center">
          <Button link="/events">查看所有活动</Button>
        </div>
      </Fragment>
    )
  }
  return (
    <Fragment>
      {/* 活动标题 */}
      <EventSummary title={event.title} />
      {/* 活动摘要 */}
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      {/* 活动内容 */}
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}

export default EventDetailPage
