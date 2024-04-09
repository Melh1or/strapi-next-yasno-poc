import { HtmlCssTemplateProps } from "@/types";

const HtmlCssTemplate = ({ Css, Html }: HtmlCssTemplateProps) => {
  return (
    <div>
      <style>{Css}</style>
      <div
        dangerouslySetInnerHTML={{
          __html: Html,
        }}
      />
    </div>
  );
};

export default HtmlCssTemplate;
