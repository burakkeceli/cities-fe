export class CityComment {
    cityId: number;
    userId: number;
    userName: string;
	comment: Comment;
}

export class Comment {
    id: number;
    text: string;
    createdTime: string;
}