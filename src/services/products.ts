import { supabase } from '../lib/supabase';
import type { Product } from '../types';

export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(name)
    `);

  if (error) throw error;
  return data;
}

export async function getProductsByCategory(categoryId: string) {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(name)
    `)
    .eq('category_id', categoryId);

  if (error) throw error;
  return data;
}

export async function getProduct(id: string) {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      category:categories(name),
      reviews(*)
    `)
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

export async function createProduct(product: Omit<Product, 'id'>) {
  const { data, error } = await supabase
    .from('products')
    .insert(product)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateProduct(id: string, updates: Partial<Product>) {
  const { data, error } = await supabase
    .from('products')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteProduct(id: string) {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (error) throw error;
}