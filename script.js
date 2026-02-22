const sampleStudents = [
    { name: "JOSHUE ARENAL", id: "UA202500670", course: "BSIT", year: "3rd Year", age: "20" },
    { name: "ALICE JOHNSON", id: "UA202500123", course: "BSCS", year: "2nd Year", age: "19" },
    { name: "ANNA SANTOS", id: "UA202500456", course: "BSIT", year: "4th Year", age: "21" },
    { name: "ANDREW CRUZ", id: "UA202500789", course: "ACT", year: "1st Year", age: "18" },
    { name: "BRIAN REYES", id: "UA202500234", course: "BSCS", year: "3rd Year", age: "20" },
    { name: "BELLA GARCIA", id: "UA202500567", course: "BSIT", year: "2nd Year", age: "19" },
    { name: "BENJAMIN RAMOS", id: "UA202500890", course: "ACT", year: "4th Year", age: "21" },
    { name: "CARLOS MENDOZA", id: "UA202500345", course: "BSCS", year: "1st Year", age: "18" },
    { name: "CATHERINE LOPEZ", id: "UA202500678", course: "BSIT", year: "3rd Year", age: "20" },
    { name: "CHRISTIAN DELA CRUZ", id: "UA202500901", course: "ACT", year: "2nd Year", age: "19" },
    { name: "DAVID TORRES", id: "UA202500112", course: "BSCS", year: "4th Year", age: "21" },
    { name: "DIANA MORALES", id: "UA202500445", course: "BSIT", year: "1st Year", age: "18" },
    { name: "DANIEL FLORES", id: "UA202500778", course: "ACT", year: "3rd Year", age: "20" },
    { name: "EMILY CASTILLO", id: "UA202500223", course: "BSCS", year: "2nd Year", age: "19" },
    { name: "ETHAN RIVERA", id: "UA202500556", course: "BSIT", year: "4th Year", age: "21" },
    { name: "EMMA GONZALES", id: "UA202500889", course: "ACT", year: "1st Year", age: "18" },
    { name: "FRANCIS AQUINO", id: "UA202500334", course: "BSCS", year: "3rd Year", age: "20" },
    { name: "FAITH BAUTISTA", id: "UA202500667", course: "BSIT", year: "2nd Year", age: "19" },
    { name: "FERNANDO VELASCO", id: "UA202500990", course: "ACT", year: "4th Year", age: "21" },
    { name: "GABRIEL SANTIAGO", id: "UA202500101", course: "BSCS", year: "1st Year", age: "18" },
    { name: "GRACE MERCADO", id: "UA202500434", course: "BSIT", year: "3rd Year", age: "20" },
    { name: "GEORGE NAVARRO", id: "UA202500767", course: "ACT", year: "2nd Year", age: "19" },
    { name: "HANNAH VILLANUEVA", id: "UA202500212", course: "BSCS", year: "4th Year", age: "21" },
    { name: "HENRY PASCUAL", id: "UA202500545", course: "BSIT", year: "1st Year", age: "18" },
    { name: "HELEN AGUILAR", id: "UA202500878", course: "ACT", year: "3rd Year", age: "20" }
];


let editingRow = null;
let editingIsPending = true;

function addStudentRow(name, id, course, year, age, isPending = true) {
    const tbody = isPending ? document.getElementById('student-list') : document.getElementById('approved-list');
    const row = document.createElement('tr');
    
    if (isPending) {
        row.innerHTML = `
            <td>${name}</td>
            <td>${id}</td>
            <td>${course}</td>
            <td>${year}</td>
            <td>${age}</td>
            <td>
                <button class="confirm-btn">Confirm</button>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        
       
        row.querySelector('.confirm-btn').addEventListener('click', function() {
            addStudentRow(name, id, course, year, age, false);
            row.remove();
        });
        
       
        row.querySelector('.edit-btn').addEventListener('click', function() {
            editStudent(row, name, id, course, year, age, true);
        });
        
        
        row.querySelector('.delete-btn').addEventListener('click', function() {
            row.remove();
        });
    } else {
        row.innerHTML = `
            <td>${name}</td>
            <td>${id}</td>
            <td>${course}</td>
            <td>${year}</td>
            <td>${age}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
           
        row.querySelector('.edit-btn').addEventListener('click', function() {
            editStudent(row, name, id, course, year, age, false);
        });
        
       
        row.querySelector('.delete-btn').addEventListener('click', function() {
            row.remove();
        });
    }
    
    tbody.appendChild(row);
}

function editStudent(row, name, id, course, year, age, isPending) {
    
    editingRow = row;
    editingIsPending = isPending;
    
  
    closeModal();
    
  
    document.getElementById('student-name').value = name;
    document.getElementById('student-id').value = id;
    document.getElementById('student-course').value = course;
    document.getElementById('student-year').value = year;
    document.getElementById('student-age').value = age;
    
    document.getElementById('form-title').textContent = 'EDIT STUDENT';
    document.getElementById('submit-btn').textContent = 'UPDATE';
    document.getElementById('cancel-btn').style.display = 'inline-block';
    
   
    setTimeout(() => {
        document.getElementById('login-form').scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function cancelEdit() {
   
    document.getElementById('student-form').reset();
    
   
    document.getElementById('form-title').textContent = 'CLASS LIST';
    document.getElementById('submit-btn').textContent = 'SUBMIT';
    document.getElementById('cancel-btn').style.display = 'none';
    
    
    editingRow = null;
    editingIsPending = true;
}


function openModal() {
    document.getElementById('student-modal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('student-modal').classList.remove('show');
    document.body.style.overflow = 'auto';
}


window.addEventListener('DOMContentLoaded', function() {
    
    for (let i = 0; i < 5; i++) {
        addStudentRow(
            sampleStudents[i].name,
            sampleStudents[i].id,
            sampleStudents[i].course,
            sampleStudents[i].year,
            sampleStudents[i].age,
            true
        );
    }
    
   
    for (let i = 5; i < 10; i++) {
        addStudentRow(
            sampleStudents[i].name,
            sampleStudents[i].id,
            sampleStudents[i].course,
            sampleStudents[i].year,
            sampleStudents[i].age,
            false
        );
    }
    
    
    document.getElementById('toggle-list').addEventListener('click', function() {
        openModal();
    });

    
    document.querySelector('.close-modal').addEventListener('click', function() {
        closeModal();
    });


    window.addEventListener('click', function(event) {
        const modal = document.getElementById('student-modal');
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

  
    document.getElementById('student-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('student-name').value.toUpperCase();
        const id = document.getElementById('student-id').value.toUpperCase();
        const course = document.getElementById('student-course').value.toUpperCase();
        const year = document.getElementById('student-year').value;
        const age = document.getElementById('student-age').value;

        if (editingRow) {
           
            editingRow.cells[0].textContent = name;
            editingRow.cells[1].textContent = id;
            editingRow.cells[2].textContent = course;
            editingRow.cells[3].textContent = year;
            editingRow.cells[4].textContent = age;
            
           
            const editBtn = editingRow.querySelector('.edit-btn');
            editBtn.replaceWith(editBtn.cloneNode(true));
            editingRow.querySelector('.edit-btn').addEventListener('click', function() {
                editStudent(editingRow, name, id, course, year, age, editingIsPending);
            });
            
            cancelEdit();
        } else {
         
            addStudentRow(name, id, course, year, age, true);
        }

        
        openModal();

        this.reset();
    });

    
    document.getElementById('cancel-btn').addEventListener('click', function() {
        cancelEdit();
    });

   
    const searchInput = document.getElementById('search');
    const searchResults = document.getElementById('search-results');
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        
        if (query === '') {
            searchResults.classList.remove('show');
            searchResults.innerHTML = '';
            return;
        }
        

        let allStudents = [];
        
        
        const pendingRows = document.querySelectorAll('#student-list tr');
        pendingRows.forEach(row => {
            if (row.cells && row.cells[0]) {
                allStudents.push({
                    name: row.cells[0].textContent,
                    id: row.cells[1].textContent,
                    course: row.cells[2].textContent,
                    year: row.cells[3].textContent,
                    age: row.cells[4].textContent,
                    status: 'Pending',
                    row: row
                });
            }
        });
        
   
        const approvedRows = document.querySelectorAll('#approved-list tr');
        approvedRows.forEach(row => {
            if (row.cells && row.cells[0]) {
                allStudents.push({
                    name: row.cells[0].textContent,
                    id: row.cells[1].textContent,
                    course: row.cells[2].textContent,
                    year: row.cells[3].textContent,
                    age: row.cells[4].textContent,
                    status: 'Approved',
                    row: row
                });
            }
        });
      
        const matches = allStudents.filter(student => 
            student.name.toLowerCase().includes(query) || 
            student.id.toLowerCase().includes(query)
        );
        
        
        if (matches.length === 0) {
            searchResults.innerHTML = '<div class="no-results">No students found</div>';
            searchResults.classList.add('show');
        } else {
            let resultsHTML = '';
            matches.forEach(student => {
                const statusClass = student.status === 'Pending' ? 'status-pending' : 'status-approved';
                resultsHTML += `
                    <div class="search-result-item" data-student-id="${student.id}">
                        <div class="search-result-name">${student.name}</div>
                        <div class="search-result-details">
                            ID: ${student.id} | ${student.course} | ${student.year} | Age: ${student.age}
                        </div>
                        <span class="search-result-status ${statusClass}">${student.status}</span>
                    </div>
                `;
            });
            searchResults.innerHTML = resultsHTML;
            searchResults.classList.add('show');
            
           
            searchResults.querySelectorAll('.search-result-item').forEach((item, index) => {
                item.addEventListener('click', function() {
                    const studentId = this.getAttribute('data-student-id');
                    const student = matches.find(s => s.id === studentId);
                    
                    if (student && student.row) {
                        
                        openModal();
                        
                       
                        setTimeout(() => {
                            student.row.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            student.row.style.backgroundColor = '#fffbcc';
                            setTimeout(() => {
                                student.row.style.backgroundColor = '';
                            }, 2000);
                        }, 300);
                    }
                    
                  
                    searchInput.value = '';
                    searchResults.classList.remove('show');
                });
            });
        }
    });


    document.addEventListener('click', function(event) {
        const searchContainer = document.querySelector('.search-container');
        if (searchContainer && !searchContainer.contains(event.target)) {
            searchResults.classList.remove('show');
        }
    });

    
    searchResults.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});