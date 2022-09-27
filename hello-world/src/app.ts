import * as express from 'express';
import * as fs from 'fs';

const app = express();
const version = '1.0';

const secret = fs.readFileSync('/mnt/secrets-store/csi-please-open-me');

app.get('/', (req, res) => res.send(`Hello World! This is the ${version} version. The secret value is: ${secret}`));
app.listen(3000, () => console.log('Server ready'));

