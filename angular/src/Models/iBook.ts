export interface IBook {
    title: string;
    rating: {
      rate: number;
      totalVotes: number;
      totalPoints: number;
    };
    image: string;
    description: string;
    authorId: string;
    catId: string;
  }