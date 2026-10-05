const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const overview = {
  company: 'Solid Bridge Solutions',
  email: 'solidbridgeservices@gmail.com',
  phone: '0108286250',
  whatsapp: 'https://wa.me/20108286250',
  callLink: 'tel:+20108286250',
  loans: [
    { id: 1, name: 'Quick Business Loan', amount: 'EGP 25,000', duration: '12 months', rate: '6.5% APR', status: 'Approved' },
    { id: 2, name: 'Personal Loan', amount: 'EGP 15,000', duration: '9 months', rate: '7.2% APR', status: 'Reviewing' },
    { id: 3, name: 'Home Upgrade Loan', amount: 'EGP 50,000', duration: '18 months', rate: '6.1% APR', status: 'New' }
  ],
  electronics: [
    { id: 1, name: 'Laptop Bundle', category: 'Computing', price: 'EGP 18,500', stock: 8, status: 'Available' },
    { id: 2, name: 'Smartphone Pro', category: 'Mobile', price: 'EGP 12,900', stock: 14, status: 'Available' },
    { id: 3, name: 'Home Audio Kit', category: 'Electronics', price: 'EGP 9,750', stock: 5, status: 'Low stock' }
  ],
  totalLoanClients: 142,
  activeProducts: 36,
  monthlyRevenue: 'EGP 1.8M',
  satisfaction: '96%'
};

const loanApplications = [...overview.loans];
const electronicsCatalog = [...overview.electronics];
const contactMessages = [];

app.get('/api/overview', (req, res) => {
  res.json({
    ...overview,
    loanCount: loanApplications.length,
    electronicsCount: electronicsCatalog.length,
    contactMessages: contactMessages.length
  });
});

app.get('/api/contact', (req, res) => {
  res.json({
    company: overview.company,
    email: overview.email,
    phone: overview.phone,
    whatsapp: overview.whatsapp,
    callLink: overview.callLink
  });
});

app.get('/api/loans', (req, res) => {
  res.json(loanApplications);
});

app.get('/api/electronics', (req, res) => {
  res.json(electronicsCatalog);
});

app.get('/api/contact-messages', (req, res) => {
  res.json(contactMessages);
});

app.post('/api/loans', (req, res) => {
  const { name, amount, duration, rate, status } = req.body;

  if (!name || !amount || !duration || !rate) {
    return res.status(400).json({ message: 'Please provide full loan details.' });
  }

  const entry = {
    id: Date.now(),
    name,
    amount,
    duration,
    rate,
    status: status || 'New'
  };

  loanApplications.unshift(entry);
  res.status(201).json({ message: 'Loan application added successfully.', entry });
});

app.post('/api/electronics', (req, res) => {
  const { name, category, price, stock, status } = req.body;

  if (!name || !category || !price) {
    return res.status(400).json({ message: 'Please provide complete product details.' });
  }

  const entry = {
    id: Date.now(),
    name,
    category,
    price,
    stock: stock || 0,
    status: status || 'Available'
  };

  electronicsCatalog.unshift(entry);
  res.status(201).json({ message: 'Electronics item added successfully.', entry });
});

app.post('/api/contact-message', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill in all fields.' });
  }

  const entry = {
    id: Date.now(),
    name,
    email,
    message,
    createdAt: new Date().toISOString()
  };

  contactMessages.unshift(entry);
  res.status(201).json({ message: 'Message received successfully. We will contact you soon.' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Solid Bridge Solutions API' });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Solid Bridge Solutions server running at http://localhost:${PORT}`);
});
