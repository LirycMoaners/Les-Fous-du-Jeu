export interface Contest {
  id: string;
  title: string;
  description: string;
  publicationDate: Date;
  mainImage: string;
  picturesSmall: string[];
  picturesLarge: string[];
  prizesId: string;
}
