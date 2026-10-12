import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { validateProduct, filterProducts, toProductView } from '../src/features/products/domain/productDomain';
import { startTestServer } from './testUtils';

describe('1. Pruebas Unitarias de Dominio', () => {
  it('validateProduct debe detectar campos con errores', () => {
    const invalid = validateProduct({ name: '', price: -50, category: 'Inexistente', stock: -1 });
    expect(invalid.length).toBeGreaterThan(0);
  });

  it('toProductView debe formatear stock correctamente', () => {
    const view = toProductView({ id: 1, name: 'Item', price: 1000, category: 'Snacks', stock: 0 });
    expect(view.stockLabel).toBe('Agotado');
  });
});

describe('2. Pruebas de Integración API Express', () => {
  let server, baseUrl;

  beforeAll(async () => {
    const instance = await startTestServer();
    server = instance.server;
    baseUrl = instance.baseUrl;
  });

  afterAll(async () => {
    if (server) await server.close();
  });

  it('POST /api/products debe retornar 400 si el payload es inválido', async () => {
    const res = await fetch(`${baseUrl}/api/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: '' })
    });
    expect(res.status).toBe(400);
    const json = await res.json();
    expect(json).toHaveProperty('details');
  });

  it('GET /api/products/:id debe retornar 404 si el producto no existe', async () => {
    const res = await fetch(`${baseUrl}/api/products/99999`);
    expect(res.status).toBe(404);
  });
});
