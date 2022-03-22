import EventList from '../components/events/event-list'
import { getFeaturedEvents } from '../dummy-data'

function HomePage() {
  //获取特色活动列表
  const featuredEvents = getFeaturedEvents()
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  )
}

export default HomePage
