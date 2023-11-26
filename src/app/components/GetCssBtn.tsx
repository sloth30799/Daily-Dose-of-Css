"use client"

import { useDailyId } from "@/hooks/useDailyId"

const GetCssBtn = () => {
    const { dailyId, noMoreId } = useDailyId()

    return <button>GetCssBtn</button>
}

export default GetCssBtn
