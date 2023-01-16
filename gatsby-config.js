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
        name: 'Senior Production Coordinator: Online & Ped Writer',
        description: 'Rockstar North, July 2022 - Present',
        link:'',
      },
      {
        name: 'Production Coordinator: Dialogue',
        description: 'Rockstar North, September 2019 - July 2022',
        link:'',
      },
      {
        name: 'Game Tester',
        description: 'Rockstar North, April 2018 - September 2019',
        link:'',
      },
      {
        name: 'Game Designer & Co-Founder',
        description: 'Hexterion, May 2016 - March 2018',
        link:'',
      },
      {
        name: 'Clinical Demonstrator',
        description: 'Glasgow Caledonian University, September 2017 - March 2018',
        link:'',
       },
      {
        name: 'Freelance Game Designer',
        description: 'April 2015 - March 2022',
        link:'',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Production',
        description:
          '- Strong experience leading and coordinating teams from initial development through launch.\r\
          - Exceptional verbal, written, and interpersonal communication skills.\
          - Expertise in common Production methodologies (eg. Agile, Waterfall) as well as software (Monday, ShotGrid, Excel, Microsoft Project, Confluence, and in-house software)\
          - Proven experience in a production role where I have supported cross-functional teams in the creation and delivery of sophisticated projects \
          - Excellent organizational & prioritization skills, attention to detail, process knowledge and ability to multi-task'
      },
      {
        name: 'Design',
        description: 'Able to take feedback, distilling messages into actionable items that move designs and content in the desired direction.\n- Strong understanding of environmental design and how it integrates with gameplay moments\n- Maintaining alignment with other leads both within and outside the design department.\n- Experience of being the champion for a product including giving presentations to press and at conferences & events\n- Understanding of psychological mechanisms that keep players engaged\n- Strong knowledge of all game design disciplines like system design, game economies etc\n- Self-motivated and fast learning\n- Intense creativity, a passion to innovate, and a drive to go beyond what is directly asked\n- Demonstrated success designing and creating compelling gameplay\n- Strong knowledge of prototyping & playtesting best practices\n- Academic knowledge, focusing on the study of game design & level design with attention to narrative impacts through design choices.',      
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
