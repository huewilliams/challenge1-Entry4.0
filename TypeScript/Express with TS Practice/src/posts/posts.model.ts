import mongoose from 'mongoose';
import Post from './post.interface';

const postSchema = new mongoose.Schema({
    author: String,
    content: String,
    title: String,
});

/*
    교차 타입 (Intersection Types)
    교차 타입은 다양한 타입을 하나로 결합합니다.
    기존 타입을 추가하여 모든 기능을 갖춘 단일 타입을 얻을 수 있다.
    Post & mongoose.Document : Post 와 mongoose.Document 의 모든 멤버를 가지게 된다.
 */
// post interface 에 있는 모든 필드를 모델에서 사용할 수 있음
const postModel = mongoose.model<Post & mongoose.Document>('Post', postSchema);

export default postModel;
