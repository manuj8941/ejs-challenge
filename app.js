
const express = require( "express" );
const bodyParser = require( "body-parser" );
const ejs = require( "ejs" );
const fs = require( "fs" );
const _ = require( "lodash" );

const app = express();

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

var composedPostS = [];

app.set( 'view engine', 'ejs' );

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( express.static( "public" ) );

app.get( "/", ( req, res ) =>
{
  res.render( "home.ejs", { homeStartingContent: homeStartingContent, composedPostS: composedPostS } );
} );

app.get( "/contact", ( req, res ) =>
{
  res.render( "contact.ejs", { contactContent: contactContent } );
} );

app.get( "/about", ( req, res ) =>
{
  res.render( "about.ejs", { aboutContent: aboutContent } );
} );


app.get( "/compose", ( req, res ) =>
{
  res.render( "compose.ejs" );
} );

app.post( "/compose", ( req, res ) =>
{

  var composedPost = {
    "postTitle": req.body.postTitle,
    "postBody": req.body.postBody
  };

  composedPostS.push( composedPost );
  res.redirect( "/" );

} );




app.get( "/posts/:postQ", ( req, res ) =>
{

  for ( i = 0; i < composedPostS.length; i++ )
  {
    if ( ( _.lowerCase( composedPostS[ i ].postTitle ) ) === ( _.lowerCase( req.params.postQ ) ) )
    {
      res.render( "post.ejs", { postTitle: composedPostS[ i ].postTitle, postBody: composedPostS[ i ].postBody } );
    }

  }

} );


app.listen( 3000 || process.env.PORT, function ()
{
  console.log( "Server started on port 3000" );
} );




/*

var h = '<%- include ("D:/projects/ejs-challenge/views/partials/header.ejs"); -%> <p>';
    var t = req.body.postText;
  var f = '</p><%- include ("D:/projects/ejs-challenge/views/partials/footer.ejs"); -%>';
  var tt = h + t + f;


  fs.writeFile( __dirname + "/views/user/title.ejs", tt, function ( err )
  {
    if ( err ) throw err;
    console.log( 'File is created successfully.' );
  } );

  setTimeout( function () { res.render( __dirname + "/views/user/title.ejs" ); }, 3000 );





  comment
  if ((req.params.postURL).toString().toLowerCase() === (composedPostS[ i ].postTitle).toString().toLowerCase())


  
app.get( "/posts/:postURL", ( req, res ) =>
{
  for ( i = 0; i < composedPostS.length; i++ )
  {
    if ( _.lowerCase( req.params.postURL ) === _.lowerCase( composedPostS[ i ].postTitle ) )
    {
      console.log( "Match found" );

      var h = '<%- include ("partials/header.ejs"); -%><h1>';
      var p1 = composedPostS[ i ].postTitle + '</h1>' + '<p>';
      var p2 = composedPostS[ i ].postBody + '</p>';
      var f = '<%- include ("partials/footer.ejs"); -%>';
      var cP = h + p1 + p2 + f;

      fs.writeFile( __dirname + "/views/post.ejs", cP, function ( err )
      {
        if ( err ) throw err;
        console.log( "File is created successfully." );
      } );

      setTimeout( () =>
      {
        res.render( "post.ejs" );
      }, 3000 );
    }
  }
} );


*/
