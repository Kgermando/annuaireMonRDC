export interface Business {
    $key: string;
    business_name: string;
    category: string;
    description: string;
    province: string;
    ville: string;
    commune: string;
    adress: string;
    telephone: number;
    email: string;
    website: string;
    image: string;
    publication_date: Date;
}
