import s from "./Day.page.module.css";
import cn from "classnames";
import { useParams } from "react-router";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const DAY_TASK: Record<string, { text: string }> = {
  "23": {
    text: `## **🔥 День 1: разогрев**
    \nПривет! Вот и первый день advent календаря.
    \nПравил очень простые. Возьми блокно и ручку или записывай все из заданий себе в заметки.
    \nЧтоб войти в **Новый год** с понимание, как мы хотим его провести, стоит сначала немного вспомнить прошлый.
    
    \nМы часто любим обесценивать свои достижения (я так часто делаю 😅)
    
    \nПоэтому важно вспомнить все, что было в этом году. Даже если тебе кажется, что ничего не произошло, то поверь, у каждого за год найдется чего вспомнить.
    \nНачнем с самого простого.
    
    \n### Задание
    \nВспомни и выпиши **три самых ярких** события этого года.
    \nЭто может как крупные достижения, так и просто приятные события. Например, поездка, встреча, новый навык или даже просто тёплый вечер дома. Напиши, почему они остались в твоей памяти.
    
    \n#### Подсказка
    \nСначала можешь выписывать вообще все, что приходит в голову. Выпиши 5-10 событий. А из них уже легче выбрать 3 самые важные
    
    \n Не теря свои заметки и увидимся завтра 😉
    `,
  },
};

export const DayPage = () => {
  const { day } = useParams();

  const currentDayIssue = day ? DAY_TASK[day] : undefined;

  return (
    <div className={cn(s.container, s.pageAnimation)}>
      <div className={s.title}>{day} January</div>
      <Markdown remarkPlugins={[remarkGfm]} className={s.text}>
        {currentDayIssue ? currentDayIssue.text : "Something went wrong"}
      </Markdown>
    </div>
  );
};
