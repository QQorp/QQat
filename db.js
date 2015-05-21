/**
 * Let's say that this is a script to initialize the database
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/QQat:27017');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var BlogPost = mongoose.model('BlogPost', new Schema({
  title: String,
  body: String
}));

// retrieve my model
var BlogPost = mongoose.model('BlogPost');

// create a blog post
var post = new BlogPost({
  title: "QQ",
  body: "QQMoar"
});

post.save(function (err) {
  if (!err){
    console.log('Success!');
  }else{
    console.log('Failed :(');
  }
});

BlogPost.find({}, function (err, docs) {
  docs.forEach(function(doc) {
    console.log(doc);
    doc.title = "Lel..";
    doc.save();
  });
});
