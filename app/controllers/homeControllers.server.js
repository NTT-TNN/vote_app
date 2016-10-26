'use strict';

var polls=require('../models/allpolls.js');

function HomeHandle(){

  this.getClicks=function(req,res){
    polls
      .findOne({},{'_id':false})
      .exec(function(err,result){
        if(err) throw err;

        res.json(result);
      })
  }
}
