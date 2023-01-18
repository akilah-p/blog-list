import { checkError, client } from './client';

export async function fetchBlogs() {
  const resp = await client.from('blogs').select('*, authors(*)');
  return checkError(resp);
}