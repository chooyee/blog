const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Routes
router.get('/', async (req, res) => {

    // Fetch posts from the database
    // and render the index view with the posts data
    try {
      const locals = {
          title: 'Home',
          description: 'Welcome to the blog!'
      }

      let perPage = 10;
      let page = req.query.page || 1; // get the page or default to 1

      // Use aggregate to sort, skip, and limit the posts
      const data = await Post.aggregate([
        { $sort: { createdAt: -1 } }, // sort by createdAt in descending order
        { $skip: (perPage * page) - perPage }, // skip the first N documents
        { $limit: perPage } // return the next 10 documents
      ]);
      
      const count = await Post.countDocuments(); // Count total posts for pagination
      const nextPage = parseInt(page) + 1; // calculate the next page number
      const hasNextPage = nextPage <= Math.ceil(count / perPage);

      res.render('index', {
        locals,
        data,
        current: page,
        nextPage: hasNextPage ? nextPage : null,
      });

      // const data = await Post.find();
      // res.render('index', { locals, data });
      
    } catch (error) {
      console.log(error)
    }

    
});

/**
 * GET /
 * Post :id
*/
router.get('/posts/:id', async (req, res) => {
  try {

    let slug = req.params.id;

    const data = await Post.findById({ _id: slug });

    const locals = {
      title: 'NodeJS Blog',
      description: 'Some description about the blog.'
    }
    
    res.render('post', {
      locals, 
      data,
      currentRoute: `/posts/${slug}`});
  } catch (error) {
    console.log(error);
  }
});

function insertPostData () {
  Post.insertMany([
    {
      title: "Building APIs with Node.js",
      body: "Learn how to use Node.js to build RESTful APIs using frameworks like Express.js"
    },
    {
      title: "Deployment of Node.js applications",
      body: "Understand the different ways to deploy your Node.js applications, including on-premises, cloud, and container environments..."
    },
    {
      title: "Authentication and Authorization in Node.js",
      body: "Learn how to add authentication and authorization to your Node.js web applications using Passport.js or other authentication libraries."
    },
    {
      title: "Understand how to work with MongoDB and Mongoose",
      body: "Understand how to work with MongoDB and Mongoose, an Object Data Modeling (ODM) library, in Node.js applications."
    },
    {
      title: "build real-time, event-driven applications in Node.js",
      body: "Socket.io: Learn how to use Socket.io to build real-time, event-driven applications in Node.js."
    },
    {
      title: "Discover how to use Express.js",
      body: "Discover how to use Express.js, a popular Node.js web framework, to build web applications."
    },
    {
      title: "Asynchronous Programming with Node.js",
      body: "Asynchronous Programming with Node.js: Explore the asynchronous nature of Node.js and how it allows for non-blocking I/O operations."
    },
    {
      title: "Learn the basics of Node.js and its architecture",
      body: "Learn the basics of Node.js and its architecture, how it works, and why it is popular among developers."
    },
    {
      title: "NodeJs Limiting Network Traffic",
      body: "Learn how to limit netowrk traffic."
    },
    {
      title: "Learn Morgan - HTTP Request logger for NodeJs",
      body: "Learn Morgan."
    },
  ])
}

insertPostData();

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;