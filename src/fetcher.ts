import Axios from 'axios';
interface GistOwner {
  login: string;
  avatar_url: string;
}

export interface Gist {
  description: string;
  html_url: string;
  owner: GistOwner;
}

export async function fetchGists(): Promise<Gist[]> {
  return (await Axios.get('https://api.github.com/gists')).data;
}
