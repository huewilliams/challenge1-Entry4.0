## TS project settings

TypeScript 개발을 하기 위해서는 Node.js 와 NPM가 설치되어 있어야 한다.

### 1. TypeScript & TSC 설치하기

`npm i -g typescript`로 TypeScript 컴파일러를 전역으로 설치한다.

이후 tsc 명령어로 ts 파일들을 js 파일로 트랜스파일링 할 수 있다.

`npm i -g ts-node` 

tsc 와 node 명령어를 한번에 할 수 있다.

`npm i nodemon`

왜 nodemon을 사용하는 지는 [outsider 님의 포스팅](<https://blog.outsider.ne.kr/649>)을 보면 알 수 있다.



### 2. 프로젝트 구조 잡기

`mkdir <project-name>` : project dir 생성

`npm init` : package.json 생성

`tsc --init` : tsconfig.json 생성



### 3. tsconfig.json 설정하기

>  tsconfig.json

```json
{
  "compilerOptions": {
    "target": "es2015", 코드에서 사용할 ECMA 버전
    "module": "commonjs", 빌드 결과의 모듈 방식 지정
    "outDir": "./dist", 빌드 결과물 디렉토리
    
    "strict": true, 엄격한 타입 체크

    "moduleResolution": "node", 모듈 (검색)해석 방식 설덩
    "baseUrl": "./", 경로와 paths 옵션의 기준 디렉토리
    "paths": { baseUrl 옵션 기준으로 불러올 모듈 위치 설정
      "utils/*": ["src/utils/*"], 
      "controller/*": ["src/controller/*"]
    }, 
    "esModuleInterop": true,
	"sourceMap" : true, 디버깅을 위한 옵션
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}
```

tsconfig 파일을 내 프로젝트에 맞게 설정해야 한다.

`compile option`은 잘 정리된 [tsconfig compile option 정리](<https://vomvoru.github.io/blog/tsconfig-compiler-options-kr/>) 포스팅을 참고하자.

공식 [compier options](<https://www.typescriptlang.org/docs/handbook/compiler-options.html>)

`include` `exclude` 는 ts로 compile 할 시 포함할 파일과 아닌 파일을 구분할 수 있다.

또한 glob 와일드카드를 지원한다.

* `*` 0개 이상의 문자와 매칭
* `?` 한 문자와 매칭
* `**/` 반복적으로 모든 하위 디렉토리와 매칭



### 4. TSLint 적용하기

`npm i -D tslint `  : tslint 설치

`npm i -D tslint-config-standard` : JavaScript Standard Style을 tslint에 적용시키는 모듈 설치

설치한 tslint-config-standard 를 사용하도록 설정한다.

> tslint.json

```json
{
    "extends": "tslint-config-standard",
    "rules": {
        "space-before-function-paren": false //사용하지 않을 규칙을 지정
    }
}
```

이 규칙을 사용하려면 compilerOptions에서 strictNullChecks를 사용하도록 설정해야함

> tsconfig.json

```json
{
	"compilerOptions": {
		"strictNullChecks": true
	}
}
```



### 5. 실행 스크립트 작성하기

TS 개발 프로세스에는 여러 실행 스크립트가 필요하다.

다음과 같이 실행 스크립트를 작성할 수 있다.

> package.json

```json
"scripts": {
    "build": "tsc",
    "dev": "ts-node ./src/server.ts",
    "start": "nodemon ./dist/server.js",
    "prod": "npm run build && npm run start",
    "lint": "tslint -p.",
}
```

`npm run build` : src 파일들(compile option : include)의 ts파일을 js파일로 트랜스파일링 하여 dist 디렉토리(compile option : outDir)로 내보냄.

`npm run dev` : ts-node로 테스트 서버를 실행시킴

`npm run start` : nodemon 으로 빌드된 서버를 실행시킴

`npm run prod` : 배포 환경에서의 서버 실행

`npm run lint` : ts-lint를 실행

