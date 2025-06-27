import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
'mongodb+srv://hamza:hamza375@cluster0.k2t9xgr.mongodb.net/investement_app?retryWrites=true&w=majority&appName=Cluster0',
{ useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
console.log('Connected to MongoDB');
}).catch(err => {
console.error('MongoDB connection error:', err);
});

const userSchema = new mongoose.Schema({
name: String,
email: String,
phone: String,
password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/api/users', async (req, res) => {
try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
} catch (err) {
    res.status(400).json({ error: err.message });
}
});

// Add this route to get a user by ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password') // Exclude password
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user)
  } catch (err) {
    res.status(400).json({ error: 'Invalid user ID' })
  }
})

// List all available stocks
app.get('/api/stocks', (req, res) => {
  const dir = path.join(__dirname, 'data', 'stocks');
  fs.readdir(dir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Failed to read directory' });
    const stocks = files
      .filter(f => f.endsWith('.csv'))
      .map(f => {
        const symbol = f.replace('.csv', '');
        const name = symbol.split('.')[0].replace(/_/g, ' ');
        return { symbol, name };
      });
    res.json(stocks);
  });
});

// Get historical data for a specific stock
app.get('/api/stocks/:symbol', (req, res) => {
  const symbol = req.params.symbol;
  const filePath = path.join(__dirname, 'data', 'stocks', `${symbol}.csv`);
  const results = [];
  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      res.json(results);
    })
    .on('error', () => {
      res.status(404).json({ error: 'Stock not found' });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
