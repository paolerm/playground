import * as express from 'express';

const app = express();
const version = '1.0';

app.get('/', (req, res) => res.send(`Hello World! This is the ${version} version`));
app.listen(3000, () => console.log('Server ready'));

