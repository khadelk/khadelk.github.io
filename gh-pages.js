import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
	{
  branch: 'gh-pages',
  repo: 'https://github.com/khadelk/khadelk.github.io.git', // Update to point to your repository
  user: {
		name: 'khadelk', // update to use your name
   	email: 'khadidjaelkeurti@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
		console.log('Deploy Complete!');
  }
);