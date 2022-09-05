import * as C from "./styles";

type TitleProps = {
  iconName: "pencil" | "list" | "chart" | "completed";
  text: string;
};

const Title = ({ iconName, text }: TitleProps) => {
  const imgUrl = new URL(`/src/assets/icon-${iconName}.svg`, import.meta.url)
    .href;

  return (
    <C.Container>
      <C.Icon>
        <img src={imgUrl} width="24" height="24" alt={iconName} />
      </C.Icon>
      <C.Title>{text}</C.Title>
    </C.Container>
  );
};

export default Title;
