const TaskModel = require('../models/TaskModel')

module.exports = class TaskController{
    static async getAll(req,res){
        const tasks = await TaskModel.getTasks();
        return res.status(200).json(tasks[0]);
    }

    static async getById(req,res){
        const {id} = req.params;
        const task = await TaskModel.getTaskById(id);

        return res.status(200).json(task[0]);
    }

    static async addTask(req,res){
        try {
            const {descricao} = req.body;

            const newTask = new TaskModel(null, descricao, false);

            await newTask.save();

            return res.status(201).json({"message": "Tarefa adicionada com sucesso!"});
        } catch (error) {
            return res.status(500).json({"message": "Ocorreu um erro ao processar a sua solicitação. Tente novamente!"});
        }
    }

    static async updateTask(req,res){
        try {
            const {id} = req.params;
            const taskUpdate = new TaskModel(id);

            await taskUpdate.update();

            return res.status(204).json();
        } catch (error) {
            
        }
    }

    static async deleteTask(req,res){
        try {
            const {id} = req.params;

            const taskDelete = new TaskModel(id);

            await taskDelete.delete();

            return res.status(204).json();
        } catch (error) {
            
        }
    }
}