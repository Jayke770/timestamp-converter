import Head from "next/head"
import { Card, List, ListInput, ListItem, Page } from "konsta/react"
import moment from 'moment'
import { useState } from 'react'
export default function Home() {
  const [timestamp, settimestamp] = useState('')
  return (
    <Page className="flex justify-center items-center p-4">
      <Head>
        <title>Timestamp Converter</title>
      </Head>
      <Card
        className="w-full md:w-[500px] !rounded-lg"
        header="Timestamp Converter">
        <List hairlines={false}>
          <ListInput
            floatingLabel
            label="Enter Timestamp"
            placeholder="Enter Timestamp"
            onInput={(e) => settimestamp(e.target.value)} />
          <ListItem
            title={"Date & Time"}
            subtitle={moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')} />
          <ListItem
            title="Calendar Time"
            subtitle={moment(timestamp).calendar()} />
          <ListItem
            title="Date from now"
            subtitle={moment(timestamp).fromNow()} />
        </List>
      </Card>
    </Page>
  )
}