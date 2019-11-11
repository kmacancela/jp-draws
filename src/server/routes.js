import * as express from 'express';
import * as stripeLoader from 'stripe';

const router = express.Router();

router.get('/hello', (req, res, next) => {
  res.json('World')
})

const stripe = new stripeLoader(ENV["SECRET_KEY"])

const charge = (token, amount) => {
  return stripe.charges.create({
    amount: amount * 100,
    currency: 'usd',
    source: token,
    description: 'Statement Description'
  })
}

router.post('/charge', (req, res, next) => {
  try {
    let data = await charge(req.body.token.id, req.body.amount)
    console.log(data)
    res.send("Charged!")
  } catch(event) {
    console.log(event)
    res.status(500)
  }
})
export default router
