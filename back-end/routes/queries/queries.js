import express from "express";
import fs from 'fs';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = fs.readFileSync('queries.json', 'utf8');
        res.status(200).send(data);
    } catch (err) {
        if (res.status)
            console.error(err);
        res.status(404).send("queries.json file not found");
    }   
});

router.post('/', async (req, res) => {
    
    try {
        // Getting the data from the file.
        const currentData = fs.readFileSync('queries.json', 'utf8');
        const queryArray = req.body;
        let data;
        // check is exits any queries recorded into the queries.json file.
        if(currentData.length === 0){
            data = JSON.stringify(queryArray, null, 2);
        }else{
            // merging the existing data from the file and the data from the Request body
            const jsonArrayFromFile = JSON.parse(currentData);
            const mergedJSON = [...queryArray, ...jsonArrayFromFile];
            data = JSON.stringify(mergedJSON, null, 2);
        }
        // Save the queries info into the file
        fs.writeFileSync('queries.json', data);
        console.log('query array saved to queries.json');
        console.log(data);
        res.status(200).send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// Delete the queries file data
router.delete('/', async (req, res) => {
    
    try {
        // Save the queries info into the file
        fs.writeFileSync('queries.json', '[]');
        // fs.writeFile('/path/to/file', '')
        console.log('query array saved to queries.json');
        res.status(200).send("query list was delered");
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});
router.delete('/:id', async (req, res) => {
    
    try {
        const data = JSON.parse(fs.readFileSync('queries.json', 'utf8'));
        console.log(data);
        let newData = data.filter(item=>(item.queryName!==req.params.id));
        console.log(newData);
        // Save the queries info into the file
        fs.writeFileSync('queries.json', JSON.stringify(newData));
        // fs.writeFile('/path/to/file', '')
        console.log('query array deleted to queries.json');
        console.log(newData);
        res.status(200).send(newData);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

export default router;