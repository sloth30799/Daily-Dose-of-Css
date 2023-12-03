"use client"

import { useEffect, useState } from "react"

import { fetchIdPool } from "@/services/actions"
import { IdPool } from "@/types"

type watchIdPool = {
    [key: string]: boolean
}

type Today = {
    id?: string | null
    date?: Date
}

export const useDailyId = () => {
    const [dailyId, setDailyId] = useState<Today>({})
    const [watched, setWatched] = useState([])
    const [noMoreId, setNoMoreId] = useState(false)

    const fetchWatchedFromLocalStorage = () => {
        const retrievedArrayJSON: string | null =
            localStorage.getItem("watched")

        const watchedArr = retrievedArrayJSON
            ? JSON.parse(retrievedArrayJSON)
            : []

        setWatched(watchedArr)
    }

    const generateTdyId = async () => {
        const watchedIds: watchIdPool = {}

        for (const id of watched) {
            watchedIds[id] = true
        }

        const data = await fetchIdPool()
        const allIds: IdPool = data.pool
        const unwatchedIDs = allIds.filter((id) => !(id in watchedIds))

        if (unwatchedIDs.length <= 0) {
            setNoMoreId(true)
            return null
        }

        const randomIndex = Math.floor(Math.random() * unwatchedIDs.length)

        return unwatchedIDs[randomIndex]
    }

    const fetchTodayId = async () => {
        const retrievedJSON: string | null = localStorage.getItem("today")
        const today: Today = retrievedJSON ? JSON.parse(retrievedJSON) : {}

        const todayDate = new Date()
        if (today.date !== todayDate) {
            today.date = todayDate
            today.id = await generateTdyId()

            console.log(today)
            setDailyId(today)
        } else {
            setDailyId(today)
        }
    }

    useEffect(() => {
        const fetch = async () => {
            await fetchWatchedFromLocalStorage()
            await fetchTodayId()
        }

        fetch()
    }, [])

    return {
        noMoreId,
        watched,
        dailyId,
    }
}
