import express from 'express';
import cors from 'cors';
import multer from 'multer';

const app = express();

const port = process.env.PORT || 3001;


app.use(express.static('public'));


app.listen(port, () => {
  console.log('Server ready in the port 3001');
});
