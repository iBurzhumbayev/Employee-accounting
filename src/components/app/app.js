import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

	const data = [
		{name: 'Ilyas', salary: 9000, increase: false, id: 1},
		{name: 'Askar', salary: 11000, increase: true, id: 2},
		{name: 'Aslan', salary: 8000, increase: false, id: 3},
		{name: 'Gleb', salary: 100000, increase: false, id: 4},
	]

	return (
		<div className="app">
			<AppInfo />

			<div className="search-panel">
				<SearchPanel/>
				<AppFilter/>
			</div>
			
			<EmployeesList data={data}/>
			<EmployeesAddForm/>
		</div>
	);
}

export default App;
