import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
type singleTask = {
  id: number,
  title: string,
  completed: boolean
}
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tasks: WritableSignal<singleTask[]> = signal(
    []
  );
  task = signal('');
  get tsk(): string{
    return this.task()
  }
  set tsk(val){
    this.task.set(val)
  }
  addTask(){
    if (this.task()) {
      this.tasks.update(
        (item) => ([...item,{
          id: this.tasks().length,
          title: this.task(),
          completed: false
        }])
      )
    }
    this.task.set('');
  };
  deleteTask(id: number){
    this.tasks.update(
      (tasks) => tasks.filter(
        (item) => item.id != id
        )
    )
  }
}
