import pool from "../db/pg.js";

export const getAllAnimals = (req, res) => {
  pool
    .query('SELECT * FROM "Animals"')
    .then((data) => res.status(200).json({animals : data.rows}))
    .catch((err) => res.status(500).json(err));
};

export const getSingleAnimal = (req, res) =>    {
    const { id } = req.params;
    pool
        .query('SELECT * FROM "Animals" WHERE "ID"=$1', [id])
        .then((data) => {
            if(data.rowCount == 0)  {
                res.status(404).send("There is no animal with this ID");
            } else{
                res.status(200).json(data.rows[0]);
            }
        })
        .catch((err) => res.status(500).json(err))
};

