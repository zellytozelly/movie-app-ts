# Movie App
- Movie API로 영화를 검색하고 즐겨찾기로 등록할 수 있는 React App

## 배포
https://movie-app-ts-one.vercel.app/favorite

## 개발환경
- React 18.1.0
- Typescript | eslint | SASS & CSS Module | Recoil

## 주요기능
- 검색
  - 무한 스크롤
    - Intersection Observer API

- 즐겨찾기 추가/해제
  - localStorage 저장 (store.js)
    
- 검색 | 즐겨찾기 탭 전환
  - react-router-dom: 6.3.0

## 

## 구조

```
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┗ 📂modal
 ┃ ┃ ┣ 📜modal.module.scss
 ┃ ┃ ┗ 📜Modal.tsx
 ┣ 📂hooks	                      //Custom hook
 ┣ 📂routes
 ┃ ┣ 📂Movie
 ┃ ┃ ┣ 📂MoviePage
 ┃ ┃ ┃ ┣ 📜MovieFavorite.tsx
 ┃ ┃ ┃ ┣ 📜MovieList.tsx
 ┃ ┃ ┃ ┗ 📜MoviePage.module.scss
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜Movie.module.scss
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜Routes.module.scss
 ┣ 📂services	                    //API
 ┃ ┗ 📜movie.ts
 ┣ 📂states	                      //Atom
 ┃ ┗ 📜movieAtom.ts
 ┣ 📂styles
 ┣ 📂types	                      //Type
 ┃ ┗ 📜movie.d.ts
```