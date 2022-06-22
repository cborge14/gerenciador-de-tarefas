
import { Routes } from '@angular/router';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';
import { CadastrarTarefasComponent } from './cadastrar-tarefas/cadastrar-tarefas.component';
import { EditarTarefaComponent} from './editar-tarefa/editar-tarefa.component';


export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefasComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent
    }

];
