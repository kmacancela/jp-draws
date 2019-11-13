const app = require("express")();
const cors = require('cors')
const stripe = require("stripe")();

app.use(require("body-parser").text());
app.use(cors())

app.get('/charge', function (req, res) {
  console.log("hi")
})

app.post('/charge', async (req, res) => {
  let bodyStuff = req.body.split('&')
  let token = bodyStuff[0]
  let amount = bodyStuff[1]
  try {
    let {status} = await stripe.charges.create({
      amount: amount,
      currency: "usd",
      description: "An example charge",
      source: token
    })
    res.json({status});
  }
  catch (err) {
    console.log("ERROR: ", err);
    res.status(500).end();
  }
});

app.listen(9000, () => console.log("Listening on port 9000"))
