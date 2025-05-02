// Copyright © 2025 Tu Nombre. All rights reserved.
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Conexión a MongoDB (cambia la URI si usas Atlas)
mongoose.connect('mongodb://localhost:27017/anime-betting', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Conectado a MongoDB'));

// Esquema y modelo para apuestas
const betSchema = new mongoose.Schema({
  series: String,
  chapter: Number,
  event: String,
  amount: Number,
  outcome: String,
  winnings: Number,
  createdAt: { type: Date, default: Date.now },
});
const Bet = mongoose.model('Bet', betSchema);

// Esquema y modelo para saldo
const balanceSchema = new mongoose.Schema({
  userId: { type: String, default: 'default-user' }, // Simplificado, usa autenticación real después
  balance: { type: Number, default: 1000 },
});
const Balance = mongoose.model('Balance', balanceSchema);

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

// Obtener saldo
app.get('/balance', async (req, res) => {
  let balance = await Balance.findOne({ userId: 'default-user' });
  if (!balance) {
    balance = await Balance.create({ userId: 'default-user', balance: 1000 });
  }
  res.json({ balance: balance.balance });
});

// Obtener historial de apuestas
app.get('/bets', async (req, res) => {
  const bets = await Bet.find().sort({ createdAt: -1 });
  res.json(bets);
});

// Crear apuesta
app.post('/bets', async (req, res) => {
  const { series, chapter, event, amount } = req.body;
  const parsedAmount = parseInt(amount);

  let balance = await Balance.findOne({ userId: 'default-user' });
  if (!balance) {
    balance = await Balance.create({ userId: 'default-user', balance: 1000 });
  }

  if (parsedAmount < 10 || parsedAmount > balance.balance) {
    return res.status(400).json({ error: 'Cantidad inválida o saldo insuficiente.' });
  }

  balance.balance -= parsedAmount;
  const outcome = Math.random() > 0.5 ? 'Ganada' : 'Perdida';
  const winnings = outcome === 'Ganada' ? parsedAmount * 2 : 0;
  balance.balance += winnings;
  await balance.save();

  const bet = new Bet({ series, chapter, event, amount: parsedAmount, outcome, winnings });
  await bet.save();

  res.json(bet);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});