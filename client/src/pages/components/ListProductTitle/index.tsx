import styles from "./styles.module.scss";

interface IProps {
  title: string;
  sub_title?: string;
  url_img_sub_title?: string;
}
const ListProductTitle: React.FC<IProps> = ({
  title,
  sub_title,
  url_img_sub_title,
}) => {
  const _renderTitle = () => {
    if (title) return <h2>{title}</h2>;
    return;
  };

  const _renderSubTitle = () => {
    if (sub_title) return <p>{sub_title}</p>;
    return;
  };

  const _renderImg = () => {
    if (url_img_sub_title) return <img src={url_img_sub_title} alt={url_img_sub_title} />;
    return;
  };

  return (
    <div className={styles.wrapListProductTitle}>
      {_renderTitle()}
      {_renderImg()}
      {_renderSubTitle()}
    </div>
  );
};

export default ListProductTitle;
