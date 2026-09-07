export interface VinylRecord {
  id: string;
  title: string;
  artist: string;
  price: number;
  compareAtPrice?: number;
  genre: string;
  catalogNumber: string;
  cover: string;
  year?: number;
  label?: string;
  description?: string;
  tracklist?: string[];
}
 
export interface CartItem {
  record: VinylRecord;
  quantity: number;
}
