import s from "./page.module.css";
import { getHome } from "@/api/home";
import Icon from "@/components/Icon";
import { BASE_FILE_URL } from "@/utils/api";

export const revalidate = 5;

export default async function Home() {
  const home = await getHome();

  return (
    <main className={s.main}>
      <h1 className={s.title}>{home.data?.attributes.Title}</h1>
      <img
        className={s.titleImg}
        src={BASE_FILE_URL + home.data?.attributes.Image?.data?.attributes.url}
      />

      <div className={s.approach}>
        <h2 className={s.approachTitle}>
          {home.data?.attributes.ApproachTitle}
        </h2>
        <h2 className={s.approachSubtitle}>
          {home.data?.attributes.ApproachSubtitle}
        </h2>
      </div>

      <div className={s.grid}>
        <div className={s.gridEl}>
          <div className={s.gridIcon}>
            <Icon name={home.data?.attributes.CabinetIcon} />
          </div>
          <h3 className={s.quoteTitle}>{home.data?.attributes.CabinetTitle}</h3>
          <p className={s.quoteSubtitle}>
            {home.data?.attributes.CabinetDescription}
          </p>
          <a href={home.data?.attributes.CabinetLink} className={s.quoteLink}>
            {home.data?.attributes.CabinetButton}
            <Icon name="IconArrowGoToBold" className={s.quoteLinkArrow} />
          </a>
        </div>

        <div className={s.gridEl}>
          <div className={s.gridIcon}>
            <Icon name={home.data?.attributes.AccountIcon} />
          </div>
          <h3 className={s.quoteTitle}>{home.data?.attributes.AccountTitle}</h3>
          <p className={s.quoteSubtitle}>
            {home.data?.attributes.AccountDescription}
          </p>
          <a href={home.data?.attributes.AccountLink} className={s.quoteLink}>
            {home.data?.attributes.AccountButton}
            <Icon name="IconArrowGoToBold" className={s.quoteLinkArrow} />
          </a>
        </div>
      </div>
    </main>
  );
}
