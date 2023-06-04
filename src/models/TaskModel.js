const conn = require('../database/conn');

module.exports = class Task{
    constructor(id, descricao, status){
        this.id = id;
        this.descricao = descricao;
        this.status = status;
    }

    static async getTasks(){
        const tasks = await conn.execute(`SELECT * FROM tasks`);
        return tasks;
    }

    static async getTaskById(id){
        const task = await conn.execute(`SELECT * FROM tasks WHERE id = ${id}`);
        return task;
    }

    async save(){
        const query = `INSERT INTO tasks (descricao, status) VALUES(?,?)`;
        const values = [this.descricao, this.status];

        await conn.execute(query, values)
        .then((result) => {

            this.id = result.insertId;

        }).catch(error => {
            console.log(error);
        });
    }

    async update(){
        const query = `UPDATE tasks SET status = true WHERE id = ?`;
        const values = [this.id];

        await conn.execute(query, values);
    }

    async delete(){
        const query = `DELETE FROM tasks WHERE id = ?`;
        const values = [this.id];

        await conn.execute(query, values);
    }



}