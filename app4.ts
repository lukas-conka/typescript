//import { ConcessionariaDao } from './ConcessionariaDao';
import Concessionaria from './Concessionaria';
import Pessoa from './Pessoa';
import {Dao} from './Dao';
//import { PessoaDao } from './PessoaDao';

//let dao: ConcessionariaDao = new ConcessionariaDao();

let concessionaria = new Concessionaria('', []);
let pessoa: Pessoa = new Pessoa('', '');
//let dao2 = new PessoaDao();

let dao3 : Dao<Concessionaria> = new Dao<Concessionaria>();
let dao4 : Dao<Pessoa> = new Dao<Pessoa>();

dao3.inserir(concessionaria);
dao4.remover(5);
