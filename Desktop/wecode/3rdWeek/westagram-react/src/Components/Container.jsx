import React, { Component } from 'react'
import img from '../Images/profile.png';

export default class Container extends Component {
  constructor(){
    super();
    this.state = {
      commendValue : "",
      commendArr : [],
      storyPage : "0",
      rightBtn : "to-right-img-on",
      leftBtn : "to-left-img-off",
      storyActive : "",
      storyPosition : {
        transform: 'translateX(0%)',
      },
      submitColor : {color : "#B1D6F7",},
    }
  }
  scrollRight = () => {
    if(this.state.storyPage === "0"){
      this.setState({
        storyPage : "1",
        leftBtn : "to-left-img-on",
        storyActive : " active",
        storyPosition : {transform : 'translateX(-51%)'}, //인라인 스타일로 넣을경우 이렇게 객체로 넘겨줘야 한다 .
      })
    } else {
      this.setState({
        storyPage : "2",
        leftBtn : "to-left-img-on",
        rightBtn : "to-right-img-off",
        storyActive : " active",
        storyPosition : {transform : 'translateX(-70%)'},
      })
    }
  }

  scrollLeft = () => {
    if(this.state.storyPage === "2"){
      this.setState({
        storyPage : "1",
        rightBtn : "to-right-img-on",
        storyActive : " active",
        storyPosition : {transform : 'translateX(-51%)'},
      })
    } else {
      this.setState({
        storyPage : "0",
        leftBtn : "to-left-img-off",
        storyActive : " active",
        storyPosition : {transform : 'translateX(0%)'},
      })
    }
  }


  commendValueChange = (e) => {
    if(e.keyCode === 13 && e.target.value){
      this.setState({
        commendValue : "",
        commendArr : this.state.commendArr.concat(this.state.commendValue),
      })
    } else if(e.keyCode === 13){
      this.setState({
        commendValue : "",
      })
    } else if(!e.target.value) {
      this.setState({
        commendValue : "",
        submitColor : {color : "#B1D6F7"},
      })
    } else {
      this.setState({
        commendValue : e.target.value,
        submitColor : {color : "#0095F6"},
      })
    }
  }

  commendUp = () => {
    if(this.state.commendValue){
      this.setState({
        commendValue : "",
        commendArr : this.state.commendArr.concat(this.state.commendValue),
      })
    }
  }
  // commendValueChange = (e) => {
  //   if(e.key === 'Enter' && this.state.commendValue){
  //     let commends = this.state.commendArr;
  //     this.setState({
  //       commendValue : "",
  //       commendArr : commends.push(this.state.commendValue),
  //     })
  //   } else if(e.key === 'Enter'){
  //     this.setState({
  //       commendValue : "",
  //     })
  //   } else {
  //     this.setState({ commendValue : e.target.value });
  //   }
  // }
  submitNofresh = (e) => { {/*이거하니까 리프레쉬 안된다 ㅠㅠ 휴*/}
    e.preventDefault();
  }
  

  render() {
    let commendStyle = {
      marginBottom : "3px",
      width : "100%",
      wordBreak : "normal"
    }
    let userStyle = {
      fontWeight : "600",
    }

    console.log(this.state.commendArr)
    return (
        <main className="main-container">
          <div className="main-box">
            <div className="feeds">
              <div className="storys-container">
                <div className="left-right-container">
                  <button onClick={this.scrollLeft} className="to-left">
                    <div className={this.state.leftBtn}></div>
                  </button>
                  <button onClick={this.scrollRight} className="to-right">
                    <div className={this.state.rightBtn}></div>
                  </button>
                </div>
                <ul className={`storys${this.state.storyActive}`} style={this.state.storyPosition}>
                  <li className="story">
                    <div className="story-image">
                      <div className="story-image-cover">
                        <img src={img} width="53px" height="53px" alt="사진"/>
                      </div>
                    </div>
                    <div className="story-name">송민규1</div>
                  </li>
                  <li className="story">
                    <div className="story-image">
                      <div className="story-image-cover">
                        <img src={img} width="53px" height="53px" alt="사진"/>
                      </div>
                    </div>
                    <div className="story-name">송민규2</div>
                  </li>
                  <li className="story">
                    <div className="story-image">
                      <div className="story-image-cover">
                        <img src={img} width="53px" height="53px" alt="사진"/>
                      </div>
                    </div>
                    <div className="story-name">송민규3</div>
                  </li>
                  <li className="story">
                    <div className="story-image">
                      <div className="story-image-cover">
                        <img src={img} width="53px" height="53px" alt="사진"/>
                      </div>
                    </div>
                    <div className="story-name">송민규4</div>
                  </li>
                  <li className="story">
                    <div className="story-image">
                      <div className="story-image-cover">
                        <img src={img} width="53px" height="53px" alt="사진"/>
                      </div>
                    </div>
                    <div className="story-name">송민규5</div>
                  </li>
                  <li className="story">
                    <div className="story-image">
                      <div className="story-image-cover">
                        <img src={img} width="53px" height="53px" alt="사진"/>
                      </div>
                    </div>
                    <div className="story-name">송민규6</div>
                  </li>
                  <li className="story">
                    <div className="story-image">
                      <div className="story-image-cover">
                        <img src={img} width="53px" height="53px" alt="사진"/>
                      </div>
                    </div>
                    <div className="story-name">송민규7</div>
                  </li>
                  <li className="story">
                    <div className="story-image">
                      <div className="story-image-cover">
                        <img src={img} width="53px" height="53px" alt="사진"/>
                      </div>
                    </div>
                    <div className="story-name">송민규8</div>
                  </li>
                  <li className="story">
                    <div className="story-image">
                      <div className="story-image-cover">
                        <img src={img} width="53px" height="53px" alt="사진"/>
                      </div>
                    </div>
                    <div className="story-name">송민규9</div>
                  </li>
                  <li className="story">
                    <div className="story-image">
                      <div className="story-image-cover">
                        <img src={img} width="53px" height="53px" alt="사진"/>
                      </div>
                    </div>
                    <div className="story-name">송민규10</div>
                  </li>
                  <li className="story">
                    <div className="story-image">
                      <div className="story-image-cover">
                        <img src={img} width="53px" height="53px" alt="사진"/>
                      </div>
                    </div>
                    <div className="story-name">송민규11</div>
                  </li>
                  <li className="story">
                    <div className="story-image">
                      <div className="story-image-cover">
                        <img src={img} width="53px" height="53px" alt="사진"/>
                      </div>
                    </div>
                    <div className="story-name">송민규12</div>
                  </li>
                  <li className="story">
                    <div className="story-image">
                      <div className="story-image-cover">
                        <img src={img} width="53px" height="53px" alt="사진"/>
                      </div>
                    </div>
                    <div className="story-name">송민규13</div>
                  </li>
                  <li className="story">
                    <div className="story-image">
                      <div className="story-image-cover">
                        <img src={img} width="53px" height="53px" alt="사진"/>
                      </div>
                    </div>
                    <div className="story-name">송민규14</div>
                  </li>
                  <li className="story">
                    <div className="story-image">
                      <div className="story-image-cover">
                        <img src={img} width="53px" height="53px" alt="사진"/>
                      </div>
                    </div>
                    <div className="story-name">송민규15</div>
                  </li>
                  <li className="story">
                    <div className="story-image">
                      <div className="story-image-cover">
                        <img src={img} width="53px" height="53px" alt="사진"/>
                      </div>
                    </div>
                    <div className="story-name">송민규16</div>
                  </li>
                  <li className="story">
                    <div className="story-image">
                      <div className="story-image-cover">
                        <img src={img} width="53px" height="53px" alt="사진"/>
                      </div>
                    </div>
                    <div className="story-name">송민규END</div>
                  </li>
                </ul>
              </div>
              <article>
                <div className="post">
                  <div className="post-who">
                    <div className="post-who-img"></div>
                    <span className="post-who-name">S.O.N.G.M.G</span>
                    <a href="#more-page" className="post-who-more">
                      <svg className="post-who-more-img " fill="#262626" height="16" viewBox="0 0 48 48" width="16">
                        <circle cx="8" cy="24" r="4.5"></circle>
                        <circle cx="24" cy="24" r="4.5"></circle>
                        <circle cx="40" cy="24" r="4.5"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="post-photo">
                  <img src={img} width="614px" height="614px"/>
                </div>
                <div className="post-about">
                  <div className="post-do">
                    <div className="post-doLeft">
                      <div className="post-do-like"></div>
                      <div className="post-do-commend"></div>
                      <div className="post-do-share"></div>
                    </div>
                    <div className="post-do-bookmark"></div>
                  </div>
                  <div className="post-who-like">
                    <a href="#">dooreplay</a>님 <a href="#">여러 명</a>이 좋아합니다
                  </div>
                  <div className="post-description">
                    <a className="post-description-name">S.O.N.G.M.G </a><span>로그인창 라벨 올리기, 비밀번호 표시, 스토리 넘기기, ∙∙∙ 모달창, 댓글추가, 좋아요 하트, 검색창 라벨 이동</span>
                  </div>
                  <div className="commend">{this.state.commendArr.map(x => <div style={commendStyle}><span style={userStyle}>corini </span>{x}</div>)}</div> 
                  <div className="post-time">2시간 전</div>
                  <div className="commend-container">
                    <form className="commend-box" onSubmit={this.submitNofresh}>{/*폼태그 했는데 계속 엔터시 리로드됨*/}
                      <input onChange={this.commendValueChange} value={this.state.commendValue} className="commend-article" placeholder="댓글 달기..."/>
                      <button type="submit" onClick={this.commendUp} style={this.state.submitColor} className="commend-upload">게시</button>
                    </form>
                  </div>
                </div>
              </article>
            </div>
            <div className="main-right">
              <div className="my-profile">
                <div className="my-profile-img"></div>
                <div className="my-profile-txt">
                  <div className="my-profile-id">S.O.N.G.M.G</div>
                  <div className="my-profile-name">송민규</div>
                </div>
              </div>
    
              <div className="recommend">
                <div className="recommend-nav">
                  <div className="recommend-title">회원님을 위한 추천</div>
                  <a href="#" className="recommend-all">모두 보기</a>
                </div>
                <div className="recommend-profiles">
                  <div className="rcmd-profile">
                    <div className="rcmd-left">
                      <div className="rcmd-img"></div>
                      <div className="rcmd-txt">
                        <div className="rcmd-id">두리님</div>
                        <div className="rcmd-know">회원님을 팔로우합니다.</div>
                      </div>
                    </div>
                    <button type ="button" className="rcmd-follow">팔로우</button>
                  </div>
                  <div className="rcmd-profile">
                    <div className="rcmd-left">
                      <div className="rcmd-img"></div>
                      <div className="rcmd-txt">
                        <div className="rcmd-id">예리님</div>
                        <div className="rcmd-know">회원님을 팔로우합니다.</div>
                      </div>
                    </div>
                    <button type ="button" className="rcmd-follow">팔로우</button>
                  </div>
                  <div className="rcmd-profile">
                    <div className="rcmd-left">
                      <div className="rcmd-img"></div>
                      <div className="rcmd-txt">
                        <div className="rcmd-id">은우님</div>
                        <div className="rcmd-know">회원님을 팔로우합니다.</div>
                      </div>
                    </div>
                    <button type ="button" className="rcmd-follow">팔로우</button>
                  </div>
                  <div className="rcmd-profile">
                    <div className="rcmd-left">
                      <div className="rcmd-img"></div>
                      <div className="rcmd-txt">
                        <div className="rcmd-id">준식님</div>
                        <div className="rcmd-know">dooreplay님 외 11명이 팔로우합니다.</div>
                      </div>
                    </div>
                    <button type ="button" className="rcmd-follow">팔로우</button>
                  </div>
                  <div className="rcmd-profile">
                    <div className="rcmd-left">
                      <div className="rcmd-img"></div>
                      <div className="rcmd-txt">
                        <div className="rcmd-id">승현님</div>
                        <div className="rcmd-know">dooreplay님 외 11명이 팔로우합니다.</div>
                      </div>
                    </div>
                    <button type ="button" className="rcmd-follow">팔로우</button>
                  </div>
                </div>
              </div>
    
              <div className="footer">
                <ul className="footer-list">
                  <li>소개</li>
                  <li>도움말</li>
                  <li>홍보 센터</li>
                  <li>API</li>
                  <li>채용 정보</li>
                  <li>개인정보처리방침</li>
                  <li>약관</li>
                  <li>위치</li>
                  <li>인기계정</li>
                  <li>해시태그</li>
                  <li>언어</li>
                </ul>
                <div className="copyright">© 2020 INSTAGRAM FROM FACEBOOK</div>
              </div>
            </div>
          </div>
        </main>
      )
  }
}





