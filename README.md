# Movie App
- 영화를 검색하고 즐겨찾기로 등록할 수 있는 React App

## 개발환경
- React 18.1.0
- Typescript | eslint | SASS | Recoil

## 주요기능
- 검색
- 즐겨찾기



## 구조

```
📦src
 ┣ 📂assets
 ┃ ┗ 📂svgs
 ┣ 📂hooks
 ┣ 📂routes
 ┃ ┣ 📂Movie
 ┃ ┃ ┣ 📂MoviePage
 ┃ ┃ ┃ ┣ 📜MovieFavorite.tsx
 ┃ ┃ ┃ ┣ 📜MovieList.tsx
 ┃ ┃ ┃ ┗ 📜moviePage.module.scss
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜movie.module.scss
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜routes.module.scss
 ┣ 📂services
 ┃ ┗ 📜movie.ts
 ┣ 📂states
 ┃ ┗ 📜movieAtom.ts
 ┣ 📂styles
 ┣ 📂types
 ┃ ┗ 📜movie.d.ts
 ┣ 📂utils
```