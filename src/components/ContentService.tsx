import React, {useEffect, useState} from "react";
import {IPublication} from "./main-content/publication/Publication.module";
import {ICategory} from "./main-content/sidebar/categories/ICategory";
import {ISocialMedia} from "./main-content/sidebar/social-media/ISocialMedia";
import {ITag} from "./main-content/sidebar/tags/ITag";
import {IInstagramWidget} from "./instagram-block/InstagramBlock";

// region import photo
import bitmap_0 from '../images/posts/Bitmap (0).png';
import bitmap_1 from '../images/posts/Bitmap (1).png';
import bitmap_2 from '../images/posts/Bitmap (2).png';
import bitmap_3 from '../images/posts/Bitmap (3).png';
import bitmap_4 from '../images/posts/Bitmap (4).png';
import bitmap_5 from '../images/posts/Bitmap (5).png';
import bitmap_6 from '../images/posts/Bitmap (6).png';
import bitmap_7 from '../images/posts/Bitmap (7).png';
import bitmap_8 from '../images/posts/Bitmap (8).png';
import bitmap_9 from '../images/posts/Bitmap (9).png';
import bitmap_10 from '../images/posts/Bitmap (10).png';
import bitmap_11 from '../images/posts/Bitmap (11).png';
import bitmap_12 from '../images/posts/Bitmap (12).png';
import bitmap_13 from '../images/posts/Bitmap (13).png';
import bitmap_14 from '../images/posts/Bitmap (14).png';
import bitmap_15 from '../images/posts/Bitmap (15).png';
import bitmap_16 from '../images/posts/Bitmap (16).png';
import bitmap_17 from '../images/posts/Bitmap (17).png';
import bitmap_18 from '../images/posts/Bitmap (18).png';
import bitmap_19 from '../images/posts/Bitmap (19).png';
import bitmap_20 from '../images/posts/Bitmap (20).png';
// endregion

// region import icos
import facebookIco from '../images/ico/simple/facebook.svg';
import pinterestIco from '../images/ico/simple/pinterest.svg';
import vIco from '../images/ico/simple/v.svg';
import globIco from '../images/ico/simple/glob.svg';
import twitterIco from '../images/ico/simple/twitter.svg';
import behanceIco from '../images/ico/simple/behance.svg';
import instagramIco from '../images/ico/simple/instagram.svg';
import youtubeIco from '../images/ico/simple/youtube.svg';
import googlePlusIco from '../images/ico/simple/google_plus.svg';
// endregion


export const fetchGetRandomQuote = (): Promise<any> => {
    return fetch(
        `http://api.forismatic.com/api/1.0/?method=getQuote&format=json`
    ).then((response) => response.json());
};

export class ContentService {

    readonly _publications: IPublication[] = [
        {
            postId: 16,
            title: 'One of Saturn’s largest rings may be newer than anyone',
            datePublication: 'June 6, 2019',
            userName: 'Rickie Baroch',
            tag: 'Tourism',
            photoUrl: bitmap_0,
            countComments: 10,
            annotation: "Sed ut perspiciatis unde omnis iste natus error sit\n" +
                "voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus\n" +
                "error sit voluptatem accusantium doloremque laudantium, totam rem"
        },
        {
            postId: 1,
            title: 'One of Saturn’s largest rings may be newer than anyone',
            datePublication: 'June 6, 2019',
            userName: 'Rickie Baroch',
            tag: 'sport',
            photoUrl: bitmap_1,
            countComments: 10,
            annotation: "Sed ut perspiciatis unde omnis iste natus error sit\n" +
                "voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus\n" +
                "error sit voluptatem accusantium doloremque laudantium, totam rem"
        },
        {
            postId: 2,
            title: 'One of Saturn’s largest rings may be newer than anyone',
            datePublication: 'June 6, 2019',
            userName: 'Rickie Baroch',
            tag: 'fashion',
            photoUrl: bitmap_2,
            countComments: 20,
            annotation: "Sed ut perspiciatis unde omnis iste natus error sit\n" +
                "voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus\n" +
                "error sit voluptatem accusantium doloremque laudantium, totam rem"
        },
        {
            postId: 3,
            title: 'One of Saturn’s largest rings may be newer than anyone',
            datePublication: 'June 6, 2019',
            userName: 'Rickie Baroch',
            tag: 'clothes',
            photoUrl: bitmap_3,
            countComments: 10,
            annotation: "Sed ut perspiciatis unde omnis iste natus error sit\n" +
                "voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus\n" +
                "error sit voluptatem accusantium doloremque laudantium, totam rem"
        },
        {
            postId: 4,
            title: 'One of Saturn’s largest rings may be newer than anyone',
            datePublication: 'June 6, 2019',
            userName: 'Rickie Baroch',
            tag: 'clothes',
            photoUrl: bitmap_4,
            countComments: 80,
            annotation: "Sed ut perspiciatis unde omnis iste natus error sit\n" +
                "voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus\n" +
                "error sit voluptatem accusantium doloremque laudantium, totam rem"
        },
        {
            postId: 5,
            title: 'One of Saturn’s largest rings may be newer than anyone',
            datePublication: 'June 6, 2019',
            userName: 'Rickie Baroch',
            tag: 'fashion',
            photoUrl: bitmap_5,
            countComments: 70,
            annotation: "Sed ut perspiciatis unde omnis iste natus error sit\n" +
                "voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus\n" +
                "error sit voluptatem accusantium doloremque laudantium, totam rem"
        },
        {
            postId: 6,
            title: 'One of Saturn’s largest rings may be newer than anyone',
            datePublication: 'June 6, 2019',
            userName: 'Rickie Baroch',
            tag: 'Summer',
            photoUrl: bitmap_6,
            countComments: 6,
            annotation: "Sed ut perspiciatis unde omnis iste natus error sit\n" +
                "voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus\n" +
                "error sit voluptatem accusantium doloremque laudantium, totam rem"
        },
        {
            postId: 7,
            title: 'One of Saturn’s largest rings may be newer than anyone',
            datePublication: 'June 6, 2019',
            userName: 'Rickie Baroch',
            tag: 'Autumn',
            photoUrl: bitmap_7,
            countComments: 50,
            annotation: "Sed ut perspiciatis unde omnis iste natus error sit\n" +
                "voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus\n" +
                "error sit voluptatem accusantium doloremque laudantium, totam rem"
        },
        {
            postId: 8,
            title: 'One of Saturn’s largest rings may be newer than anyone',
            datePublication: 'June 6, 2019',
            userName: 'Rickie Baroch',
            tag: 'clothes',
            photoUrl: bitmap_8,
            countComments: 30,
            annotation: "Sed ut perspiciatis unde omnis iste natus error sit\n" +
                "voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus\n" +
                "error sit voluptatem accusantium doloremque laudantium, totam rem"
        },
        {
            postId: 9,
            title: 'One of Saturn’s largest rings may be newer than anyone',
            datePublication: 'June 6, 2019',
            userName: 'Rickie Baroch',
            tag: 'summer',
            photoUrl: bitmap_9,
            countComments: 20,
            annotation: "Sed ut perspiciatis unde omnis iste natus error sit\n" +
                "voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus\n" +
                "error sit voluptatem accusantium doloremque laudantium, totam rem"
        },
        {
            postId: 10,
            title: 'One of Saturn’s largest rings may be newer than anyone',
            datePublication: 'June 6, 2019',
            userName: 'Rickie Baroch',
            tag: 'summer',
            photoUrl: bitmap_10,
            countComments: 10,
            annotation: "Sed ut perspiciatis unde omnis iste natus error sit\n" +
                "voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus\n" +
                "error sit voluptatem accusantium doloremque laudantium, totam rem"
        }
    ];
    readonly _featuredPublications: IPublication[] = [
        {
            postId: 11,
            title: 'One of Saturn’s largest rings may be newer than anyone',
            datePublication: 'June 6, 2019',
            userName: 'Rickie Baroch',
            tag: 'jeans',
            photoUrl: bitmap_11,
            countComments: 12,
            annotation: "Sed ut perspiciatis unde omnis iste natus error sit\n" +
                "voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus\n" +
                "error sit voluptatem accusantium doloremque laudantium, totam rem"
        },
        {
            postId: 13,
            title: 'One of Saturn’s largest rings may be newer than anyone',
            datePublication: 'June 6, 2019',
            userName: 'Rickie Baroch',
            tag: 'City',
            photoUrl: bitmap_13,
            countComments: 20,
            annotation: "Sed ut perspiciatis unde omnis iste natus error sit\n" +
                "voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus\n" +
                "error sit voluptatem accusantium doloremque laudantium, totam rem"
        },
        {
            postId: 14,
            title: 'One of Saturn’s largest rings may be newer than anyone',
            datePublication: 'June 6, 2019',
            userName: 'Rickie Baroch',
            tag: 'Photography',
            photoUrl: bitmap_14,
            countComments: 10,
            annotation: "Sed ut perspiciatis unde omnis iste natus error sit\n" +
                "voluptatem accusantium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus\n" +
                "error sit voluptatem accusantium doloremque laudantium, totam rem"
        }
    ];
    readonly _aboutAuthorPublications: IPublication[] = [
        {
            postId: 15,
            title: 'One of Saturn’s largest rings may be newer than anyone',
            datePublication: 'June 6, 2019',
            userName: 'Kate Willems',
            tag: 'Food & cooking bloger',
            photoUrl: bitmap_12,
            countComments: 40,
            annotation: "Hi, I'm Sonia. Cooking is the way I express my creative\n" +
                "side to the world. Welcome to my Kitchen Corner on…"
        }
    ];
    readonly _categories: ICategory[] = [
        {
            categoryId: 0,
            name: 'Fashion',
            count: 23
        },
        {
            categoryId: 1,
            name: 'Style & clothes',
            count: 7
        },
        {
            categoryId: 2,
            name: 'Minimalism',
            count: 16
        },
        {
            categoryId: 3,
            name: 'Black & White',
            count: 5
        },
        {
            categoryId: 4,
            name: 'Modern clothes',
            count: 12
        },
    ];
    readonly _socialMedia: ISocialMedia[] = [
        {
            socialMediaId: 0,
            icoUrl: facebookIco,
            countLikes: 32000 ,
            color: '#3b5998'
        },
        {
            socialMediaId: 1,
            icoUrl: pinterestIco,
            countLikes: 32000 ,
            color: '#E60023'
        },
        {
            socialMediaId: 2,
            icoUrl: vIco,
            countLikes: 32000 ,
            color: '#ddd739'
        },
        {
            socialMediaId: 3,
            icoUrl: globIco,
            countLikes: 32000 ,
            color: '#1cff'
        },
        {
            socialMediaId: 4,
            icoUrl: twitterIco,
            countLikes: 32000 ,
            color: '#1FAEE9'
        },
        {
            socialMediaId: 5,
            icoUrl: behanceIco,
            countLikes: 32000 ,
            color: '#131418'
        },
        {
            socialMediaId: 6,
            icoUrl: instagramIco,
            countLikes: 32000 ,
            color: '#E1306C'
        },
        {
            socialMediaId: 7,
            icoUrl: youtubeIco,
            countLikes: 32000 ,
            color: '#c4302b'
        },
        {
            socialMediaId: 8,
            icoUrl: googlePlusIco,
            countLikes: 32000 ,
            color: '#dd4b39'
        },
    ];
    readonly _tags: ITag[] = [
        {
            tagId: 0,
            name: 'Business'
        },
        {
            tagId: 1,
            name: 'Freelance'
        },
        {
            tagId: 2,
            name: 'Money'
        },
        {
            tagId: 3,
            name: 'Experience'
        },
        {
            tagId: 4,
            name: 'Lifestyle'
        },
        {
            tagId: 5,
            name: 'SEO'
        },
        {
            tagId: 6,
            name: 'Wordpress'
        },
        {
            tagId: 7,
            name: 'Marketing'
        },
        {
            tagId: 8,
            name: 'UX'
        },
        {
            tagId: 9,
            name: 'Modern'
        },
        {
            tagId: 10,
            name: 'Success'
        },
        {
            tagId: 11,
            name: 'Nature'
        }
    ];
    readonly _instagramWidgets: IInstagramWidget[] = [
        {
            instagramWidgetId: 0,
            photoUrl: bitmap_15
        },
        {
            instagramWidgetId: 1,
            photoUrl: bitmap_16
        },
        {
            instagramWidgetId: 2,
            photoUrl: bitmap_17
        },
        {
            instagramWidgetId: 3,
            photoUrl: bitmap_18
        },
        {
            instagramWidgetId: 4,
            photoUrl: bitmap_19
        },
        {
            instagramWidgetId: 5,
            photoUrl: bitmap_20
        }
    ];
    readonly defaultPublication: IPublication = {
        postId: 0,
        title: 'Упс, пост с таким айди не найден...',
        datePublication: 'June 6, 2019',
        userName: 'Нет пользователя',
        tag: 'Отсутствует',
        photoUrl: '',
        countComments: 0,
        annotation: "Такой публикации нет!"
    }


    public getPosts = async ({set}: { set: any }) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {method: 'GET'});
        const jsonData: any[] = await response.json();
        if (jsonData) {
            set(jsonData.map(post => {
                const mockPublication = this.getPublicationsById(post.id);
                return {
                    postId: post.id,
                    title: post.title,
                    datePublication: mockPublication.datePublication,
                    userName: mockPublication.userName,
                    tag: mockPublication.tag,
                    photoUrl: mockPublication.photoUrl,
                    countComments: mockPublication.countComments,
                    annotation: mockPublication.annotation
                }
            }))
        }
        else {
            set(this.defaultPublication)
        }
    };

    public getPostById = async ({postId, set}: { postId: number | null, set: any }) => {
        if(!postId)
            return null;

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {method: 'GET'});
        const post: any = await response.json();
        if (post) {
            const mockPublication = this.getPublicationsById(post.id);
            set({
                    postId: post.id,
                    title: post.title,
                    datePublication: mockPublication.datePublication,
                    userName: mockPublication.userName,
                    tag: mockPublication.tag,
                    photoUrl: mockPublication.photoUrl,
                    countComments: mockPublication.countComments,
                    annotation: mockPublication.annotation
                }
            )
        }
        else {
            set(this.defaultPublication)
        }
    };


    public getPublications(count: number) {
        let publications: IPublication[] = [];
        for (let i = 0; i < count; i++) {
            publications.push(this._publications[i])
        }
        return publications;
    }

    public getPublicationsById(id: number) {
        return this._publications.filter(publication => publication.postId === id)[0] ??
            this._featuredPublications.filter(publication => publication.postId === id)[0] ??
            this._aboutAuthorPublications.filter(publication => publication.postId === id)[0] ??
            this.defaultPublication;
    }

    public getFeaturedPublications(count: number) {
        let publications: IPublication[] = [];
        for (let i = 0; i < count; i++) {
            publications.push(this._featuredPublications[i])
        }
        return publications;
    }

    public getAboutAuthor(count: number) {
        let publications: IPublication[] = [];
        for (let i = 0; i < count; i++) {
            publications.push(this._aboutAuthorPublications[i])
        }
        return publications;
    }

    public getCategories(count: number) {
        let categories: any[] = [];
        for (let i = 0; i < count; i++) {
            categories.push(this._categories[i])
        }
        return categories;
    }

    public getAllCategories() {
        let categories: ICategory[] = [];
        this._categories.forEach(category => categories.push(category));
        return categories;
    }

    public getAllSocialMedia() {
        let socialMediaList: ISocialMedia[] = [];
        this._socialMedia.forEach(socialMedia => socialMediaList.push(socialMedia));
        return socialMediaList;
    }

    public getAllTags() {
        let tagList: ITag[] = [];
        this._tags.forEach(tag => tagList.push(tag));
        return tagList;
    }

    public getInstagramWidgets(count: number) {
        let instagramWidgets: IInstagramWidget[] = [];
        for (let i = 0; i < count; i++) {
            instagramWidgets.push(this._instagramWidgets[i])
        }
        return instagramWidgets;
    }
}