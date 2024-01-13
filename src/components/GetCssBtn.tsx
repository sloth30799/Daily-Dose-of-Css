"use client"

import { useDailyId } from "@/hooks/useDailyId"
import { useRouter } from "next/navigation"

const GetCssBtn = () => {
    const { push } = useRouter()
    const { dailyId, noMoreId, watched } = useDailyId()
    console.log("🚀 ~ file: GetCssBtn.tsx:7 ~ GetCssBtn ~ noMoreId:", noMoreId)
    console.log("🚀 ~ file: GetCssBtn.tsx:7 ~ GetCssBtn ~ dailyId:", dailyId)

    const goToTdyBlock = () => {
        const watchedArr = [...watched, dailyId.id]
        localStorage.setItem("watched", JSON.stringify(watchedArr))
        localStorage.setItem("today", JSON.stringify(dailyId))

        push(`/${dailyId.id}`)
    }
    // have to disable before the id is out

    return (
        <button className="btn primary-btn" onClick={goToTdyBlock}>
            GetCssBtn
        </button>
    )
}

export default GetCssBtn
