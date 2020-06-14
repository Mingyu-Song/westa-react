import React, { Component } from 'react'

export default class More extends Component {
    render() {
        return (
    <div class="more-page" id="more-page">
      <div class="more-page-bg">
        <ul class="more-page-ul">
          <li class="more-page-li"><span>부적절한 콘텐츠 신고</span></li>
          <li class="more-page-li"><span>팔로우 취소</span></li>
          <li class="more-page-li"><span>게시물로 이동</span></li>
          <li class="more-page-li"><span>공유하기</span></li>
          <li class="more-page-li"><span>링크 복사</span></li>
          <li class="more-page-li"><span>퍼가기</span></li>
          <li class="more-page-li"><a href="#"><span>취소</span></a></li>
        </ul>
      </div>
    </div>
        )
    }
}
