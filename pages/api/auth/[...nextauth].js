import NextAuth from 'next-auth';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import { client } from '../../../lib/sanity';

const options = {
  providers: [
    SanityCredentials(client) // only if you use sign in with credentials
  ],
  session: {
    strategy: 'jwt'
  },
  secret: 'any-secret-word',
  adapter: SanityAdapter(client)
};

export default NextAuth(options);