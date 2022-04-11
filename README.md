<h1>Kidsney Shop</h1><br/><br/><br/>
<h2>Introduction</h2>


* 프로젝트 진행 기간 : 3월 28일 ~ 4월 8일
* 프로젝트 주제 : 커머스 웹사이트 클론 코딩하기
* 클론 코딩한 웹사이트 : 디즈니샵 https://www.shopdisney.com
* 구성 : Front-end 3명, Back-end 2명


<h2>Demo</h2>

<img width="1424" alt="image" src="https://user-images.githubusercontent.com/90507720/162644315-d2510c11-e306-4621-94a7-4dcfda959894.png">
<img width="1283" alt="스크린샷 2022-04-11 오전 8 25 21" src="https://user-images.githubusercontent.com/90507720/162644398-2feb9df0-6c0c-4da7-b0ff-63a2d17ed4d7.png">

![](https://velog.velcdn.com/images/hoje15v/post/e5347a1b-9a8e-4e45-b90c-dfd4af836bfb/image.gif)

![제품필터링](https://velog.velcdn.com/images/gonkang_jeondosa/post/3eea78f7-fbc3-4543-88e8-38011b8e6ef3/image.gif)

![ezgif com-gif-maker (13)](https://user-images.githubusercontent.com/90507720/162644439-45e38047-e494-446b-b350-9edf35ef769f.gif)

![ezgif com-gif-maker (4)](https://user-images.githubusercontent.com/90507720/162644465-04a13653-648a-4dbd-8be2-74fb3822380d.gif)

![결제](https://velog.velcdn.com/images/gonkang_jeondosa/post/2ba03bd0-b2c6-4cbc-a62d-6d1098f6c4cd/image.gif)

<h2>Technologies</h2>

* 공통 : Git, github
* Front-End : ReactJS, sass
* Back-End : Python, Django web

<h2>구현 기능</h2>

#### 1. 로그인 / 회원가입

- 로그인 / 회원가입 모달창
- 로그인 / 회원가입 유효성 검사
- localStorage 와 useState Hook을 사용한 로그인 전역관리




#### 2. 상품리스트 

- 쿼리 파라미터를 활용한 다양한 기능구현
    - 다중필터 : 의류타입, 브랜드 , 사이즈별 필터링
    - 가격순 / 최신상품순 정렬
    - 페이지네이션 : Limit & Offset 활용
   
#### 3. 제품 상세 페이지

- 상품리스트에서 상품이미지를 클릭하면 해당 상품 이미지로 이동
- 데이터베이스로 부터 사이즈 별 재고를 받아와 품절된 상품의 버튼은 비활성화
- 썸네일 사진 클릭 시 메인 페이지 보여준다.

#### 4. 위시리스트

- 위시리스트(찜) 기능 구현 : 좋아요 버튼 클릭시 데이터베이스로 해당 위시리스트 상품 전송. 페이지를 새로고침 했을 때도 좋아요 버튼 클릭 상태 유지

#### 5. 장바구니

- 장바구니 기능 구현: 상품 상세페이지 내에서 add to bag 클릭 시 데이터베이스로 해당 상품 전송. 이후 장바구니 모달창을 통해 업데이트 된 상품 리스트 렌더링
- 장바구니 상품 삭제 기능 구현: fetch(Delete 메소드) 활용
- 장바구니 상품 수정 기능 구현: fetch(Patch 메소드) 활용

#### 6. 리뷰

- 상품 상세페이지 내 해당 상품에 대한 리뷰 컴포넌트 구현
- 리뷰 작성 및 삭제 기능

#### 7. 결제

- 결제 기능 구현 : fetch(Get, Patch 메소드) 활용한 마일리지 차감 및 사용자 배송정보 업데이트

#### 8. 상품 검색

- 상품 검색 기능 구현: 쿼리 파라미터를 활용한 Like검색 

<h2>Reference</h2>

* 이 프로젝트는 디즈니샵 사이트를 참조하여 학습목적으로 만들었습니다.
* 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다. 

