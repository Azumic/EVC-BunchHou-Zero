LevelEvents.tick(event => {
    // if(!event.level.isClientSide) return

    var moon_context = event.level.getLunarContext()
    var moon
    if (moon_context == null) {
        return;
    } else {
        moon = moon_context.lunarForecast.forecast[0]
    }

    let moon_type = moon.getLunarEventKey().path
    // 获取当前游戏天数(游戏日)
    let today = Math.trunc(event.level.dayTime() / event.level.TICKS_PER_DAY)
    // 获取最近事件月的计划日
    let scheduledDay = moon.scheduledDay()
    // 获取间隔
    let interval = (scheduledDay) - (today)
    // 获取当前游戏时间(用于计划任务)
    if (event.level.getDayTime() % event.level.TICKS_PER_DAY == 10) {
        console.log(`event.level.TICKS_PER_DAY: ${event.level.TICKS_PER_DAY}`);
        console.log(event.level.isClientSide());
        // event.server.runCommandSilent(`say ${`距离 ${moon_type} 还有 ${interval.toString()} 天`}`)

        event.server.tell(`距离 ${moon_type} 还有 ${interval.toString()} 天`)
    }
    // this.minecraft.level.getDayTime() / 24000L
})


// LevelEvents.