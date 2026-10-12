export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
}

export function formatCOP(value: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(value);
}

export function toProductView(product: Product) {
  let stockLabel = 'Disponible';
  if (product.stock === 0) stockLabel = 'Agotado';
  else if (product.stock < 5) stockLabel = 'Pocas unidades';

  return {
    ...product,
    formattedPrice: formatCOP(product.price),
    stockLabel
  };
}

export function validateProduct(product: Partial<Product>): string[] {
  const errors: string[] = [];
  if (!product.name || product.name.trim() === '' || product.name.length > 60) {
    errors.push('El nombre es obligatorio y debe tener máximo 60 caracteres.');
  }
  if (product.price === undefined || typeof product.price !== 'number' || product.price <= 0) {
    errors.push('El precio debe ser un número mayor a 0.');
  }
  if (!product.category || !['Bebidas', 'Snacks', 'Aseo', 'Hogar'].includes(product.category)) {
    errors.push('La categoría debe ser una de: Bebidas, Snacks, Aseo, Hogar.');
  }
  if (product.stock === undefined || !Number.isInteger(product.stock) || product.stock < 0) {
    errors.push('El stock debe ser un entero mayor o igual a 0.');
  }
  return errors;
}

export function filterProducts(products: Product[], search: string, category: string): Product[] {
  return products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'Todas' || p.category === category;
    return matchesSearch && matchesCategory;
  });
}
