const conn = require('../database/conn');

module.exports = {
    "get": async(req,res) => {
        const sql = `SELECT * FROM tasks`;
        const tasks = await conn.execute(sql).then(tasks => {return tasks[0]});

        res.status(200).json(tasks);

    },

    "post":async(req,res) => {
        const {descricao, status} = req.body;
        const sql = "INSERT INTO tasks(descricao, status) VALUES(?,?)";
        const data = [descricao, status];

        await conn.execute(sql, data)
        .then(() => {
            res.status(201).json({"message":"Nova tarefa adicionada!"});
        })
        .catch(error => {
            res.status(500).json({"message":"Ocorreu um erro interno. Tente novamente!"});
        });

    },

    "put": async(req,res) => {
        const id = req.params['id'];
        const {descricao, status} = req.body;
        const sql = `UPDATE tasks SET descricao = ?, status = ? WHERE id = ?`;

        await conn.execute(sql, [descricao, status, id])
        .then(() => {
            res.status(204).json();
        })
        .catch(error => {
            res.status(500).json({"message":"Ocorreu um erro interno. Tente novamente!"});
        });

    },

    "delete":async(req,res) => {
        const id = req.params['id'];
        const sql = `DELETE FROM tasks WHERE id = ?`;

        await conn.execute(sql, [id])
        .then(() => {
            res.status(204).json();
        })
        .catch(error => {
            res.status(500).json({"message":"Ocorreu um erro interno. Tente novamente!"});
        })
    }
}