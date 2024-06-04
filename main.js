document.getElementById('saveButton').addEventListener('click', function() {
    const nim = document.getElementById('nim').value;
    const nama = document.getElementById('nama').value;
    const presensiTeori = document.getElementById('presensiTeori').value;
    const tugasTeori = document.getElementById('tugasTeori').value;
    const utsTeori = document.getElementById('utsTeori').value;
    const uasTeori = document.getElementById('uasTeori').value;
    const presensiPraktek = document.getElementById('presensiPraktek').value;
    const tugasPraktek = document.getElementById('tugasPraktek').value;
    const utsPraktek = document.getElementById('utsPraktek').value;
    const uasPraktek = document.getElementById('uasPraktek').value;

    const tableBody = document.getElementById('gradeTableBody');
    const newRow = document.createElement('tr');

    const fields = [nim, nama, presensiTeori, tugasTeori, utsTeori, uasTeori, presensiPraktek, tugasPraktek, utsPraktek, uasPraktek];
    fields.forEach(field => {
        const cell = document.createElement('td');
        cell.textContent = field;
        newRow.appendChild(cell);
    });

    // Calculate final grade and add to the table
    const finalGrade = calculateFinalGrade(presensiTeori, tugasTeori, utsTeori, uasTeori, presensiPraktek, tugasPraktek, utsPraktek, uasPraktek);
    const gradeCell = document.createElement('td');
    gradeCell.textContent = finalGrade;
    newRow.appendChild(gradeCell);

    const gradeLetter = calculateGradeLetter(finalGrade);
    const gradeLetterCell = document.createElement('td');
    gradeLetterCell.textContent = gradeLetter;
    newRow.appendChild(gradeLetterCell);

    tableBody.appendChild(newRow);

    resetForm();
});

document.getElementById('resetButton').addEventListener('click', resetForm);

function resetForm() {
    document.getElementById('nim').value = '';
    document.getElementById('nama').value = '';
    document.getElementById('presensiTeori').value = '';
    document.getElementById('tugasTeori').value = '';
    document.getElementById('utsTeori').value = '';
    document.getElementById('uasTeori').value = '';
    document.getElementById('presensiPraktek').value = '';
    document.getElementById('tugasPraktek').value = '';
    document.getElementById('utsPraktek').value = '';
    document.getElementById('uasPraktek').value = '';
}

function calculateFinalGrade(...grades) {
    const total = grades.reduce((sum, grade) => sum + parseFloat(grade), 0);
    return (total / grades.length).toFixed(2);
}

function calculateGradeLetter(finalGrade) {
    if (finalGrade >= 85) return 'A';
    if (finalGrade >= 70) return 'B';
    if (finalGrade >= 55) return 'C';
    if (finalGrade >= 40) return 'D';
    return 'E';
}