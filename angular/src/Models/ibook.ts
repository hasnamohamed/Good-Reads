export interface IBook {
    _id?:string;
    rating?:{
      rate:number,
      totalVotes: number,
      totalPoints: number,
    }
    title:string;
    description:string;
    image:string;
    authorId:string
    catId:string
  }