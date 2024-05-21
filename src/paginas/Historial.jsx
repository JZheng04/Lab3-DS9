import Table from 'react-bootstrap/Table';

function Historial() {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 3 }).map((_, index) => (
            <th key={index}>Titulo de la columna</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 3 }).map((_, index) => (
            <td key={index}>********</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 3 }).map((_, index) => (
            <td key={index}>**********</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 3 }).map((_, index) => (
            <td key={index}>**********</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

export default Historial;