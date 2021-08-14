export interface Product {
  id?: number;
  name: string;
  price?: number;
  description: string;
}

const iPhone: Product = {
  id: 1,
  name: 'iPhone',
  price: 1000,
  description: 'Apple Product'
};

const iPad: Product = {
  id: 2,
  name: 'iPad',
  description: 'Apple Product'
};

const Mac: Product = {
  id: 3,
  name: 'Mac',
  price: 3000,
  description: 'Apple Product'
};

export let products: Product[] = [];
products.push(iPhone, iPad, Mac);
