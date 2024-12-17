export const navbarData = {
  homeTitle: "Nick's Blog",
}

export const footerData = {
  author: 'Nick Lewis',
  aboutAuthor:
    'Hi! I am Nick, a Tech enthusiast, photographer, synth nerd and software engineer. Currently working at Vixio',
  authorInterest:
    "I have a fair amount of knowledge of Javascript, Typescript, VueJs, and Nuxt. If you have an interesting idea, either open source or paid let's connect.",
  aboutTheSite:
    "This is a personal blog site built with Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon. Currently it's deployed on Netlify.",
}

export const homePage = {
  title: 'Welcome To My Blog Site',
  description:
    'Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
}

export const blogsPage = {
  title: 'All Blogs',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: 'Categories',
  description:
    'The category list below is generated from all the tags that are mentioned across the different blog posts',
}

export const aboutPage = {
  title: 'Nick Lewis',
  description: 'Software Engineer, Photographer, Synth Nerd, Web Enthusiast.',
  aboutMe:
    "Hello, I am based in Berkshire, England",
}

export const seoData = {
  title: `Nick's Blog | Nicks Blog`,
  ogTitle: `Let's learn Javascript, Typescript, Vue, Nuxt, Photography and music - Nicks Blog | Nick's Blog`,
  description: `Hi I am Nick. A Software Engineer at Vixio, with over 30+ years experience in software development. - Nicks Blog | Nick's Blog`,
  twitterDescription: `Nick's Blog, where I play around with Nuxt, Vue, and more and showcase my blog, resources, etc - Nicks Blog | Nick's Blog`,
  image:
    'https://res.cloudinary.com/dqpknoetx/image/upload/v1734429258/IMG_3889_rtew6u.jpg',
  mySite: 'https://nicklewis.blog',
  twitterHandle: '',
  mailAddress: 'nickeblewis@gmail.com',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
