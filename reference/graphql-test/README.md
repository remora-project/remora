# GraphQL Test
> Ref: <https://medium.freecodecamp.org/how-to-set-up-a-graphql-server-using-node-js-express-mongodb-52421b73f474>

## Installation
### Node.js
- [Node.js 공식 홈페이지](https://nodejs.org)에서 LTS 버전 다운로드해서 설치

### MongoDB
- [MongoDB 다운로드 센터](https://www.mongodb.com/download-center/community)에서 Community Server 다운로드해서 설치
    - [Installation Guide](https://docs.mongodb.com/manual/administration/install-community/)
    - 설치 파일 다운로드가 잘 안됨
    - 다운로드 안된다고 홈페이지 가입할 필요 없음!
    - 참을성을 가지고 기다리자
- Windows 기준으로 .msi 파일로 설치할 때 *Custom*으로 설치하는 것을 추천
    - *Custom*으로 설치해야 MongoDB 설치 경로를 정할 수 있음
    - Compass라는 MongoDB GUI Client를 설치하지 않을 수 있음
- MongoDB 띄우기
    - MongoDB가 설치된 path를 환경변수로 설정하는 것을 추천
    - 맨 아래 처럼 `waiting for~` 이렇게 로그가 나오면 정상적으로 띄워진 것
    - **Caution!**: Compass를 설치했다면 이미 DB가 띄워져있어서 에러가 발생할 수 있음
```sh
cd $MONGO_PATH/bin
./mongod --dbpath "../data"

# 2019-04-15T09:42:25.386+0900 I NETWORK  [initandlisten] waiting for connections on port 27017
```
- 터미널에서 MongoDB 사용해보기
    - `mongo`를 입력하면 prompt가 나옴
    - 기본 명령어들은 [여기](https://velopert.com/457)에 잘 설명되어 있음
    - 서버를 통해서 수정하기 때문에 자주 쓰지는 않지만, DB에 반영되었는지 확인할 때 사용하므로 기본 명령어는 알아두자
```sh
cd $MONGO_PATH/bin
./mongo
```

### Getting Started
- module 설치
    - `package.json`이 있는 경로에서 아래 명령어 입력
    - **Caution!**: git pull 이후에 `package.json`이 수정되었다면 다시 명령어를 입력해야 함
```sh
npm install
```
> **Caution!**: 아래 처럼 security 에러가 발생할 수 있으나, 동작에는 문제가 없으므로 무시해도 좋음
> ```sh
> found 1 high severity vulnerability`
>   run `npm audit fix` to fix them, or `npm audit` for details
> ```

- Node.js 서버 띄우기
    - MongoDB가 띄워진 후에 실행해야 에러가 발생하지 않음
    - 아래 처럼 나와야 정상적으로 서버가 뜬 것
    - nodemon을 사용하여 코드가 변경되면 자동으로 서버를 내렸다가 다시 띄움
```sh
npm run server

# Server is running on port 3000
# MongoDB connected
```
- UI 코드 빌드하기
    - `package.json`이 있는 경로에서 아래 명령어 입력
    - `npm start`
        - webpack-dev-server를 이용하여 코드가 변경되면 자동으로 빌드와 새로고침을 해줌
        - 개발할 때 사용
    - `npm run build`
        - 배포할 때 사용
        - <http://localhost:3000> 접속
```sh
npm start
# or
npm run build
```
