import './Main.scss';

const MainHeeyeon = () => {
  return (
    <div className="full-page-cover">
      <header className="header">
        <Nav />
      </header>
      <div className="main-contents-container">
        <LeftArticle />
        <RightSection />
      </div>
    </div>
  );
};
export default MainHeeyeon;

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="navli1">
        <a href="" className="nav-logo">
          <div className="logoimg" />
        </a>
        <div className="nav-title">westagram</div>
      </div>
      <div className="input-wrapper">
        <input className="input-search" type="search" placeholder="검색" />
      </div>
      <NavMenus />
    </nav>
  );
};

export const NavMenus = () => {
  return (
    <div className="navli3">
      <a href="">
        <img src="/images/explore.png" className="nav-img" alt="" />
      </a>
      <a href="">
        <img src="/images/heart.png" className="nav-img" alt="" />
      </a>
      <a href="">
        <img src="/images/profile.png" className="nav-img" alt="" />
      </a>
    </div>
  );
};

export const LeftArticle = () => {
  return (
    <div className="article-container">
      <article className="artc-wrapper">
        <div className="artc-header">
          <div className="artc-profile">
            <div>
              <img
                src="/images/roonz-nl-ATgfRqpFfFI-unsplash 1.png"
                className="personal-profile"
                alt=""
              />
            </div>
            <div>wannagohome</div>
          </div>
          <div>
            <i className="fas fa-ellipsis-h" />
          </div>
        </div>
        <div style={{ lineHeight: 0 }}>
          <img src="/images/home1.png" alt="" />
        </div>
        <div className="react-section">
          <div className="react-left">
            <img
              src="/images/reaction_heart.png"
              className="react-img"
              alt=""
            />
            <img src="/images/speech.png" className="react-img" alt="" />
            <img src="/images/upload.png" className="react-img" alt="" />
          </div>
          <div className="react-right">
            <img src="/images/ribbon.png" className="react-img" alt="" />
          </div>
        </div>
        <div className="show-like">
          <img src="/images/like_profile.png" alt="" className="like-profile" />
          <div>masego님 외 10명이 좋아합니다</div>
        </div>
        <div className="post-info">
          <div>wannagohome</div>
          <div>집에 가고싶다...</div>
        </div>
        <div className="show-time">42분 전</div>
        <div className="comment-form-wrapper">
          <input
            type="text"
            placeholder="댓글 달기..."
            className="comment-box"
          />
          <button className="btn-post-comment">게시</button>
        </div>
      </article>
    </div>
  );
};

export const RightSection = () => {
  return (
    <div className="div-right">
      <div className="div-right-wrapper">
        <div className="me-profile">
          <div>
            <img src="/images/me-img.png" className="me-profile-img" alt="" />
          </div>
          <div className="me-profile-info">
            <div className="me-profile-id">patataco</div>
            <div className="me-profile-desc">45기 | 김희연</div>
          </div>
        </div>
        <div className="friends-list-wrapper">
          <div className="friends-list-header">
            <div className="font-color-gray">스토리</div>
            <div>모두 보기</div>
          </div>
          <ul className="friends-list">
            <li className="friends-info">
              <img src="/images/friends1.png" alt="" className="friends-img" />
              <div>
                <div>sweetpotato</div>
                <div className="showTime">16분 전</div>
              </div>
            </li>
            <li className="friends-info">
              <img src="/images/friends2.png" alt="" className="friends-img" />
              <div>
                <div>chickenbreast</div>
                <div className="showTime">3시간 전</div>
              </div>
            </li>
            <li className="friends-info">
              <img src="/images/friends3.png" alt="" className="friends-img" />
              <div>
                <div>vegetables</div>
                <div className="showTime">20시간 전</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="friends-list-wrapper">
          <div className="friends-list-header">
            <div className="font-color-gray">회원님을 위한 추천</div>
            <div>모두 보기</div>
          </div>
          <ul className="friends-list">
            <li className="friends-info follow-replace">
              <div className="friends-main-info">
                <img
                  src="/images/friends1.png"
                  alt=""
                  className="friends-img"
                />
                <div>
                  <div>chewchew</div>
                  <div className="showTime">rachel_님 외 2명이...</div>
                </div>
              </div>
              <div className="font-color-blue">팔로우</div>
            </li>
            <li className="friends-info follow-replace">
              <div className="friends-main-info">
                <img
                  src="/images/friends2.png"
                  alt=""
                  className="friends-img"
                />
                <div>
                  <div>tteokbokki</div>
                  <div className="showTime">juicy_j님 외 10...</div>
                </div>
              </div>
              <div className="font-color-blue">팔로우</div>
            </li>
            <li className="friends-info follow-replace">
              <div className="friends-main-info">
                <img
                  src="/images/friends3.png"
                  alt=""
                  className="friends-img"
                />
                <div>
                  <div>Lasagna</div>
                  <div className="showTime">mmjmje님 외 6명이...</div>
                </div>
              </div>
              <div className="font-color-blue">팔로우</div>
            </li>
          </ul>
        </div>
        <div className="font-color-gray text-setting">
          <div>
            instagram 정보 ∙ 지원 ∙ 홍보 센터 ∙ API ∙ 채용 정보 ∙
            개인정보처리방침 ∙ 약관 ∙ 디렉터리 ∙ 프로필 ∙ 해시태그 ∙ 언어
          </div>
          <div>© 2019 INSTAGRAM</div>
        </div>
      </div>
    </div>
  );
};
