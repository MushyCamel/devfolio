module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://elastic-meninsky-aa7c74.netlify.app/`,
    // Your Name
    name: 'Mark Tempini',
    // Main Site Title
    title: `Mark Tempini | Game Developer`,
    // Description that goes under your name in main bio
    description: `Game Designer and Producer from Scotland.`,
    // Optional: Twitter account handle
    author: `MarkTempini`,
    // Optional: Github account URL
    artstation: `https://www.artstation.com/marktempini`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/marktempini/`,
    // Content of the About Me section
    about: `I'm a passionate game developer that has experience in both AAA and indie development teams. I specialise in narrative, level design and production. Have a look at a selection of the projects I've worked:`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Grand Theft Auto V, Grand Theft Auto Online, Red Dead Redemption 2, Red Dead Online',
        description:
          'Working with Rockstar North since 2018 I have had a hand in delivering multiple entries into multiple iconic series. I am involved in ensuring that all narrative elements of the project are written and implemented to wider deadlines while overseeing relevant pipelines.',
        link: 'https://marktempini.com/blog/01-Rockstar-Games-Projects/',
      },
      {
        name: 'cf.me ',
        description:
          'We created two games as part of a wider news app that was developed with a philosophy of the experience being easy to pick up and difficult to master.',
        link: 'https://marktempini.com/blog/02-cf-me/',
      },
      {
        name: 'Rebound: Dodgeball Evolved',
        description:
          'Originally created for Dare to be Digital 2016, the game was developed part time while studying and eventually released for Xbox and PC in 2018. I was the lead designer on the project.',
        link: 'https://marktempini.com/blog/03-Rebound-Dodgeball-Evolved/',
      },
      {
        name: 'Game Jams',
        description:
          'Part of the Global Game Jam, our entry is a time-trial parkour game where you collect noodles. I was the sole designer on the project from conception to completion. The game won the community choice award and is available on itch.io for free!',
        link: 'https://marktempini.com/blog/04-Game-Jams/',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Rockstar North',
        description: 'Senior Production Coordinator: Online, July 2022 - Present',
        link:'',
      },
      {
        name: 'Rockstar North',
        description: 'Production Coordinator: Dialogue, September 2019 - July 2022',
        link:'',
      },
      {
        name: 'Rockstar North',
        description: 'Game Tester, April 2018 - September 2019',
        link:'',
      },
      {
        name: 'Hexterion',
        description: 'Game Designer & Co-Founder, May 2016 - March 2018',
        link:'',
      },
      {
        name: 'Glasgow Caledonian University',
        description: 'Clinical Demonstrator, September 2017 - March 2018',
        link:'',
       },
      {
        name: 'Freelance',
        description: 'Game Designer, April 2015 - March 2022',
        link:'',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Game Engines and Software',
        description:
          'Unity, Unreal Engine 4 & 5, Blender, Maya, Perforce, Substance Designer, Adobe After Effects, Visio etc.',
      },
      {
        name: 'Languages',
        description: 'C#, JavaScript, css, HTML5, Python',      
      },
      /*{
        name: 'Misc.',
        description:
          'Creating Custom Rules and "Homebrew" for TTRPGs such as Dungeons and Dragons, film studies, ',
      },*/
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#F1FAEE`,
        theme_color: `#F1FAEE`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/X.jpg`,
      },
    },
  ],
};
