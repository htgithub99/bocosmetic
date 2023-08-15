import { getPostById } from "api/post";
import sharp from "assets/images/sharp.png";
import MainContainer from "components/MainContainer";
import { ReactQueryKey } from "constants/constant";
import { LIST_CONTACT_INFO } from "constants/json";
import BannerHeaderPage from "pages/components/BannerHeaderPage";
import ListProductTitle from "pages/components/ListProductTitle";
import SliderListPost from "pages/components/SliderListPost";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import usePost from "utils/hooks/usePost";
import styles from "./styles.module.scss";

const Blog = () => {
  const { blogId } = useParams();
  const { data: items } = useQuery(
    [ReactQueryKey.GET_POST_DETAIL_KEY, blogId],
    () => getPostById(blogId || "")
  );
  const { data: postData } = usePost({
    payload: {
      pageIndex: 1,
      pageSize: 20,
    },
    enabled: true,
  });

  const _renderContentInfo = () =>
    LIST_CONTACT_INFO.map((item) => (
      <>
        <div className={styles.info___title}>
          <h4>{item.title}</h4>
        </div>
        <ul className={styles.info___content}>
          {item.content.map((sub) => (
            <li>
              <span>{sub.sub_title}</span>
              {sub.sub_content}
            </li>
          ))}
        </ul>
      </>
    ));

  return (
    <div className={styles.wrapBlog}>
      <section className={styles.blog_header}>
        <div className={styles.header__banner}>
          <BannerHeaderPage />
        </div>
        <ListProductTitle
          title="BÀI VIẾT"
          url_img_sub_title={sharp}
          sub_title={items?.data?.title}
        />
      </section>
      <MainContainer>
        <section className={styles.blog_content}>
          <div className={styles.content__description}>
            <div
              dangerouslySetInnerHTML={{
                __html: items?.data?.content,
              }}
            />
          </div>
          <div className={styles.content__info}>{_renderContentInfo()}</div>
        </section>
        <section className={styles.blog_slider}>
          <div className={styles.slider__title}>
            <h4>Bài viết liên quan</h4>
          </div>
          <div className={styles.slider__content}>
            <SliderListPost data={postData?.data} />
          </div>
        </section>
      </MainContainer>
    </div>
  );
};

export default Blog;
