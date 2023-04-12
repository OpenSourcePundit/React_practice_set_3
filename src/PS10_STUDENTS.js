export const PS10_STUDENTS = ({ student }) => {
  const total = student.reduce((tot, stud) => tot + stud.marks, 0);
  const totStud = student.reduce((tot, stud) => tot + 1, 0);
  return (
    <div>
      <h3>
        {total / totStud >= 80
          ? "CERTIFICATION APPROVED"
          : "CERTIFICATION NOT APPROVED"}
      </h3>
    </div>
  );
};
