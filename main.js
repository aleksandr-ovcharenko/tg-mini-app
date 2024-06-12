import { Telegraf, Markup } from "telegraf"
import { message } from "telegraf/filters"

const token = '7422134402:AAG5FexZlksmRk_SKNy-cnEPvEv-091cdUg'
const webAppUrl = 'https://mypr-aleks.web.app'
const bot = new Telegraf(token)

bot.command('start', (ctx) => {
        ctx.reply(
        'Привет, нажми кнопку ниже для начала!',
        Markup.keyboard([
            Markup.button.webApp(
                'Отправить Сообщение', webAppUrl + '/feedback/'
            )
        ])
    )
})

bot.on(message('web_app_data'), async ctx => {
    const data = ctx.webAppData.data.json()
    ctx.reply(`Ваше сообщение отправлено: ${data?.feedback}` ?? 'empty message')
})

bot.launch()