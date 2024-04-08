import s from "./page.module.css";
import { getHome } from "@/api/home";
import { BASE_FILE_URL } from "@/utils/api";

export const revalidate = 5;

export default async function Home() {
  const home = await getHome();
  console.log(home.data?.attributes.Image?.data.attributes.url);

  return (
    <main className={s.main}>
      <h1 className={s.title}>{home.data?.attributes.Title}</h1>
      <img
        className={s.titleImg}
        src={BASE_FILE_URL + home.data?.attributes.Image?.data?.attributes.url}
      />
      <h2 className={s.subTitle}>{home.data?.attributes.SubTitle}</h2>

      <div className={s.grid}>
        <div className={s.gridEl}>
          <h3>{home.data?.attributes.CabinetTitle}</h3>
          <p>{home.data?.attributes.CabinetDescription}</p>
          <a href={home.data?.attributes.CabinetLink}>
            {home.data?.attributes.CabinetButton}
          </a>
        </div>

        <div className={s.gridEl}>
          <h3>{home.data?.attributes.AccountTitle}</h3>
          <p>{home.data?.attributes.AccountDescription}</p>
          <a href={home.data?.attributes.AccountLink}>
            {home.data?.attributes.AccountButton}
          </a>
        </div>
      </div>

      <div className={s.quote}>
        <h3 className={s.quoteTitle}>{home.data?.attributes.QuoteTitle}</h3>
        <p className={s.quoteSubtitle}>{home.data?.attributes.QuoteSubTitle}</p>

        <div className={s.quoteInner}>
          <blockquote>
            <cite>{home.data?.attributes.QuoteAuthor}</cite>
            <p className={s.quoteText}>{home.data?.attributes.Quote}</p>
          </blockquote>

          <img
            className={s.quoteImg}
            src={
              BASE_FILE_URL +
              home.data?.attributes.QuoteImage?.data?.attributes.url
            }
          />
        </div>
      </div>
    </main>
  );
}
