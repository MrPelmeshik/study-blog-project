export {PostL} from './PostL';
export {PostM} from './PostM';
export {PostS} from './PostS';
export {PostSAboutAuthor} from './PostSAboutAuthor';

export interface IPublication {
    postId: number;
    title: string;
    datePublication: string;
    userName: string;
    tag: string;
    photoUrl: string;
    countComments: number;
    annotation: string;
}