import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const application = express();

application.use(helmet());
application.use(cors());
application.use(express.json());
application.use(Routes);
application.use(express.urlencoded({ extended: true }));
application.use(helmet.hidePoweredBy());

const server = application.listen(process.env.PORT || 4000, (err) => {
    if (err) { console.log("Application Error",  err); throw err }
    else { console.log('Up and ruining'); }
});

application.get('/', (req, res) => {
    try {
        if (process.env.NODE_ENV === "production") {
            res.status(200).send({
                API_STATUS: true
            });
        } else{
            res.status(200).send({
                environment: process.env.NODE_ENV,
                connect_to_database: true
            });
        }
    } catch (err) {
        res.status(500).send({ error: err.message });
    }
});
