const express=require('express');
const bodpars=require('body-parser');
const app=express();
const PORT=process.env.port || 3030;

app.use(bodpars.json());
app.use(bodpars.urlencoded({extended: true}));
app.use(bodpars.text());
app.use(bodpars.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

app.listen(PORT, function(){
	console.log('app listening on port ' + PORT);
});

app.get('/', function(req, res){
  res.sendFile('./public/index.html');
});
