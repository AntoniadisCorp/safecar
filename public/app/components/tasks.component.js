"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var task_service_1 = require("../services/task.service");
var index_1 = require("../services/index");
var TaskComponent = (function () {
    function TaskComponent(taskService, Alert) {
        var _this = this;
        this.taskService = taskService;
        this.Alert = Alert;
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            _this.tasks = tasks;
        });
    }
    TaskComponent.prototype.addTask = function (event) {
        var _this = this;
        event.preventDefault();
        var newTask = {
            title: this.title,
            isDone: false
        };
        this.taskService.addTask(newTask)
            .subscribe(function (tasks) {
            _this.tasks.push(tasks);
            _this.title = '';
        });
    };
    TaskComponent.prototype.deleteTask = function (id) {
        var tasks = this.tasks;
        this.taskService.deleteTask(id)
            .subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < tasks.length; i++) {
                    if (tasks[i]._id == id) {
                        tasks.splice(i, data.n);
                    }
                }
            }
        });
    };
    TaskComponent.prototype.updateStatus = function (task) {
        var _this = this;
        var _task = {
            _id: task._id,
            title: task.title,
            isDone: !task.isDone
        };
        this.taskService.updateStatus(_task)
            .subscribe(function (data) {
            if (data.message !== undefined)
                _this.Alert.error(data.message);
            else if (data.error !== undefined)
                _this.Alert.error(data.error);
            else
                _this.Alert.success("Task " + task.title + " updated..");
            task.isDone = !task.isDone;
        }, function (error) {
            _this.Alert.error(error);
        });
    };
    return TaskComponent;
}());
TaskComponent = __decorate([
    core_1.Component({
        selector: 'tasks',
        templateUrl: "../../views/ng_partials/tasks.ejs"
    }),
    __metadata("design:paramtypes", [task_service_1.TaskService,
        index_1.AlertService])
], TaskComponent);
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=tasks.component.js.map