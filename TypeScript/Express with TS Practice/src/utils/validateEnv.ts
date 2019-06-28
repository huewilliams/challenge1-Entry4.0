/*
    상대 경로가 아닌 모듈 불러오기를 할 경우
    "moduleResolution": "node" - tsconfig.json 에 적용해야함
    classic 설정은 현재 디렉토리에서 루트디렉토리까지 모듈을 검색하지만
    node 설정은 node_modules 폴더를 찾아 모듈을 검색한다.
*/
import { cleanEnv, port, str } from 'envalid';

// 환경 변수 설정을 잊었거나 , 틀린 타입으로 정의되었을경우 에러를 throw 한다.
function validateEnv() {
    cleanEnv(process.env, {
        MONGO_PASSWORD: str(),
        MONGO_PATH: str(),
        MONGO_USER: str(),
        PORT: port(),
    });
}

export default validateEnv;
