'use strict';
var Poll=require('../models/polls');

function savePoll(){

  this.save =function(req,res){
    Poll
      .findOne({'question':req.body.question},{'_id':false})
      .exec(function(err,result){
        if(err) throw err;
        if(!result){
          var newpoll=new Poll();
          newpoll.question=req.body.question;
          newpoll.save(function(err){
            if(err) throw err;
          })
        }
        console.log(req.body.length);
        console.log("HHH");
      })
  }

}

module.exports = savePoll;
