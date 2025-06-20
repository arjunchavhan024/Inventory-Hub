export interface Item {
  id: string;
  name: string;
  type: string;
  description: string;
  coverImage: string;
  additionalImages: string[];
  createdAt: Date;
}

export interface ItemFormData {
  name: string;
  type: string;
  description: string;
  coverImage: File | null;
  additionalImages: File[];
}
