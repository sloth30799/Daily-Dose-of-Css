"use client"
import { fetcher } from "@/services/request"
import { useEffect, useState } from "react"
import useSWR from "swr"

export const useDailyId = () => {
    const [dailyId, setDailyId] = useState(null)
    const [watched, setWatched] = useState([])
    const [noMoreId, setNoMoreId] = useState(false)

    const { data } = useSWR("/api/pool", fetcher)

    const generateTdyId = async () => {
        const unwatchedSet = new Set([...watched, ...data.pools])
        const unwatchedArr = [...unwatchedSet]
        if (unwatchedArr.length <= 0) {
            setNoMoreId(true)
            return null
        }
        const randomIndex = Math.floor(Math.random() * unwatchedArr.length)
        return unwatchedArr[randomIndex]
    }

    const fetchWatchedFromLocalStorage = () => {
        const retrievedArrayJSON: string | null =
            localStorage.getItem("watched")

        const watchedArr = retrievedArrayJSON
            ? JSON.parse(retrievedArrayJSON)
            : []

        setWatched(watchedArr)
    }

    const fetchTodayId = () => {
        const retrievedJSON: string | null = localStorage.getItem("today")

        const today = retrievedJSON ? JSON.parse(retrievedJSON) : {}

        const todayDate = new Date()

        if (today.date !== todayDate) {
            today.date = todayDate
            today.id = generateTdyId()

            setDailyId(today.id)
        } else {
            setDailyId(today.id)
        }
    }

    useEffect(() => {
        if (data) {
            fetchWatchedFromLocalStorage()
            fetchTodayId()
        }
    }, [data])

    return {
        noMoreId,
        dailyId,
    }
}
