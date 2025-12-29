import { AdminTitle } from '@/admin/components/AdminTitle';
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/components/ui/table';

export const AdminProductsPage = () => {
  return (
    <>
      <AdminTitle title="Productos" subtitle="Gestiona tus productos" />
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>IMAGEN</TableHead>
            <TableHead>NOMBRE</TableHead>
            <TableHead>PRECIO</TableHead>
            <TableHead>CATEGORÍA</TableHead>
            <TableHead>INVENTARIO</TableHead>
            <TableHead>TALLAS</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell className="font-medium">
              <img src="https:placeholder.co/250x250" alt="" />
            </TableCell>
            <TableCell>Producto 1</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};
