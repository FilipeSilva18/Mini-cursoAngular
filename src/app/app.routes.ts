import { Routes } from '@angular/router';

import { PainelComponent } from './painel/painel.component';
import { ProfessoresComponent } from './professores/professores.component';
import { CursosComponent } from './cursos/cursos.component';



export const ROUTES: Routes = [
    {path: '', component: PainelComponent},
    {path: 'professores', component: ProfessoresComponent},
    {path: 'cursos', component: CursosComponent}
]

