import s from "./Day.page.module.css";
import cn from "classnames";
import { useNavigate, useParams } from "react-router";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Day } from "../../components/Day.tsx";
import CalendarIcon from "../../assets/icons/calendar.svg?react";

const DAY_TASK: Record<string, string> = {
  "23": `## 🔥 День 1: благодарность
  \nХо-Хо! Вот и первый день Advent-календаря.
  
  ### ✍️ Правила очень простые:
  \nвозьми блокнот и ручку или записывай всё в заметки на телефоне, когда выполняешь задания.
  
  \nЛюди, которые нас окружают, — это самая важная ценность, благодаря которой нам тепло и легко. Поэтому начнём этот день с благодарности.
  
  \n### Задание
  
  
  \n 1\\. Выпиши 3–5 человек, которые повлияли на тебя больше всего в этом году.
  
  \n 2\\. Напиши, как именно каждый из них на тебя повлиял
  
  *P.S.* Это не обязательно должно быть что-то грандиозное. Порой важно просто то, чтоб с нами кто-то был.
  
  
  -----
  
  \n Когда все запишешь, сохрани это где-нибудь, чтобы не потерять — это пригодится нам в дальнейшем.
  \n Увидимся завтра ☀️
  `,
  "24": `## **День 2**
    \nПривет! Переходим ко второму дню. Если ты не выполнил задание первого дня — не переживай, ты можешь вернуться к нему позже.
    \nПравил все теже: возьми блокнот и ручку или записывай всё из заданий себе в заметки.
    \nЧтобы войти в **Новый год** с пониманием, как мы хотим его провести, стоит сначала немного вспомнить прошлый.
    
    \nМы часто склонны обесценивать свои достижения (я так часто делаю 😅).  
    
    \nНо важно вспомнить всё, что было в этом году. Даже если тебе кажется, что ничего не произошло, поверь, у каждого за год найдётся что вспомнить.
    
    \n### Задание
    \nВспомни и выпиши **три самых ярких** события этого года.  
    \nЭто могут быть как крупные достижения, так и просто приятные события. Например, поездка, встреча, новый навык или даже просто тёплый вечер дома. Напиши, почему они остались в твоей памяти.
    
    \n#### Подсказка
    \nСначала можешь выписать вообще всё, что приходит в голову. Запиши 5–10 событий. А из них уже легче выбрать 3-5 самых важных.
    
    \nНу все, мне пора бежать и готовить подарки 🎁.
    \nНе теряй свои заметки и увидимся завтра 😉
    `,
};

const FIRST_CALENDAR_DAY = 23;
const LAST_CALENDAR_DAY = 31;

export const DayPage = () => {
  const { day: dayFromParam } = useParams();
  const navigate = useNavigate();
  const day = Number(dayFromParam);

  const currentDay = new Date().getDate();
  const isNextDayAvaliable =
    day && currentDay > Number(day) && Number(day) !== LAST_CALENDAR_DAY;

  const isPrevDayAvailable = Number(day) !== FIRST_CALENDAR_DAY;

  const currentDayIssue = day ? DAY_TASK[day] : undefined;

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className={cn(s.container, s.pageAnimation)}>
      <div className={s.title}>
        <button onClick={handleBack} className={s.buttonBack}>
          Back
        </button>
        {day} Декабря
      </div>
      <Markdown remarkPlugins={[remarkGfm]} className={s.text}>
        {currentDayIssue ? currentDayIssue : "Something went wrong"}
      </Markdown>
      <>
        {isNextDayAvaliable && <p className={s.text}>А завтра уже наступило</p>}
        <div className={s.footerControls}>
          {isPrevDayAvailable && (
            <Day
              className={s.buttonNextDay}
              text={"Вчера"}
              day={Number(day) - 1}
              size={"double"}
              color={"dark-green"}
              isButton
            />
          )}
          {isNextDayAvaliable && (
            <Day
              className={s.buttonNextDay}
              text={"Завтра"}
              day={Number(day) + 1}
              size={"double"}
              color={"gradient"}
              isButton
            />
          )}
        </div>
      </>
    </div>
  );
};
