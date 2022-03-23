// import Link from 'next/link'
import DateIcon from '../icons/date-icon'
import AddressIcon from '../icons/address-icon'
import ArrowRightIcon from '../icons/arrow-right-icon'
import Button from '../ui/button'
import classes from './event-item.module.css'

function EventItem(props) {
  const { id, title, image, date, location } = props

  //日期格式化
  const humanReadableDAte = new Date(date).toLocaleDateString('zh-CN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  //动态路由uri补充
  const exploreLink = `/events/${id}`

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDAte}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{location}</address>
          </div>
        </div>
        <div className={classes.actions}>
          {/* <Link href={exploreLink}>查看活动详情</Link> */}
          <Button link={exploreLink}>
            <span>查看活动详情</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem
