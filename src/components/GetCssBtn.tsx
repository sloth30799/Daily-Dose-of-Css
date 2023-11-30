"use client"

import { useDailyId } from "@/hooks/useDailyId"

const GetCssBtn = () => {
    const { dailyId, noMoreId } = useDailyId()

    const handleClick = () => {
        // update the localstorage
        // redirect to the page
    }

    return <button className="primary-btn">GetCssBtn</button>
}

export default GetCssBtn
